import { constantRoutes } from '@/router'
import { getAuth } from '@/api/user'
// import { asyncRoutes, constantRoutes } from '@/router'
// import { roleAdminCode } from '@/settings.js'
import routerMappings from '@/router/mappings.js'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

/**
 * Map routing tables by recursion
 * @param addRoutes
 */
export function mapAsyncRoutes(addRoutes) {
  const res = []
  addRoutes.forEach(route => {
    const tmp = { ...route }
    if (tmp.children) {
      tmp.children = mapAsyncRoutes(tmp.children)
    }
    if (tmp && tmp.component) {
      tmp.component = routerMappings[tmp.component]
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit, state }, rtx_id) {
    return new Promise((resolve, reject) => {
      // console.log('===============SideBar start')
      // console.log(roles)

      // // 方式一：router(index+modules)路由文件中角色控制
      // let accessedRoutes
      // if (roles.includes(roleAdminCode)) {
      //   accessedRoutes = asyncRoutes || []
      // } else {
      //   accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      // }
      // commit('SET_ROUTES', accessedRoutes)
      // resolve(accessedRoutes)

      // 方式二：添加API请求控制Sidebar与角色绑定，后台API控制
      getAuth({ 'rtx_id': rtx_id }).then(response => {
        const { data } = response
        const authRouters = mapAsyncRoutes(data.auth) || []
        commit('SET_ROUTES', authRouters)
        resolve(authRouters)
      }).catch(error => {
        reject(error)
      })

      // // 方式三：直接引用router modeules中的模块路由
      // // 添加引用：import excelRouter from '@/router/modules/excel.js'
      // let accessedRoutes = [excelRouter]
      // commit('SET_ROUTES', accessedRoutes)
      // resolve(accessedRoutes)
      // console.log('===============SideBar end')
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
