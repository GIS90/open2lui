import request from '@/utils/request'

// 用户登录验证
export function login(data) {
  return request({
    url: '/access/login',
    method: 'post',
    data
  })
}

// 退出
export function logout() {
  return request({
    url: '/access/logout',
    method: 'post'
  })
}

// 用户信息获取
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

// 获取用户sidebar权限
export function getAuth(data) {
  return request({
    url: '/user/auth',
    method: 'post',
    data
  })
}

// 获取用户操作日志
export function getTimeLine(data) {
  return request({
    url: '/user/timeline',
    method: 'post',
    data
  })
}

// 更新用户信息
export function updateInfo(data) {
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}

// 更新用户密码
export function updatePassword(data) {
  return request({
    url: '/user/password',
    method: 'post',
    data
  })
}
