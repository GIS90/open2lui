import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(), // user token
  auth: false, // 是否认证用户，与src/permission.js（router hook）关联
  user: {}, // 用户信息对象
  rtx_id: '', // 用户rtx_id
  avatar: '', // 用户头像
  roles: [] // 用户角色（数组类型）
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_AUTH: (state, auth) => {
    state.auth = auth
  },
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_RTX: (state, rtx_id) => {
    state.rtx_id = rtx_id
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // login system to get user token
  // parameter: username, password
  // api: src/api/user.js
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { status_id, data } = response
        if (status_id === 100) {
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve(data)
        } else {
          reject(data)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // login success to get user info, result is object
  // api: src/api/user.js
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { status_id, data } = response
        if (status_id !== 100) {
          reject('验证失败，请重新登录')
        }
        if (!data) {
          reject('验证失败，请重新登录')
        }

        // api数据结构包含user、token，解构赋值
        const { user } = data
        if (!user) {
          reject('初始化用户信息失败')
        }
        const { role, avatar, rtx_id } = user
        if (!rtx_id || !role) {
          reject('初始化用户信息失败')
        }

        commit('SET_ROLES', role) // api返回的role为code字符串，转化为数组
        commit('SET_AVATAR', avatar)
        commit('SET_AUTH', true)
        commit('SET_USER', user)
        commit('SET_RTX', rtx_id)
        resolve(user)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout, clear token and store
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_AUTH', false)
        commit('SET_USER', {})
        commit('SET_RTX', '')
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_AUTH', false)
      commit('SET_USER', {})
      commit('SET_RTX', '')
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { rtx_id } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', rtx_id, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
