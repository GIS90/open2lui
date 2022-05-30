import request from '@/utils/request'

// 获取角色列表
export function getRoleList(data) {
  return request({
    url: '/auth/role',
    method: 'post',
    data
  })
}

// 新增角色
export function roleAdd(data) {
  return request({
    url: '/auth/roleadd',
    method: 'post',
    data
  })
}

// 更新角色
export function roleUpdate(data) {
  return request({
    url: '/auth/roleupdate',
    method: 'post',
    data
  })
}

// 角色详情
export function roleDetail(params) {
  return request({
    url: '/auth/roleinfo',
    method: 'get',
    params
  })
}

// 批量删除角色
export function batchDeleteRole(data) {
  return request({
    url: '/auth/rolemdel',
    method: 'post',
    data
  })
}

// 单个删除角色
export function roleDelete(data) {
  return request({
    url: '/auth/roledel',
    method: 'post',
    data
  })
}

// 获取角色权限tree
export function getAuthTree(data) {
  return request({
    url: '/auth/tree',
    method: 'get',
    params: data
  })
}

// 保存角色权限tree
export function submitAuthTree(data) {
  return request({
    url: '/auth/rolesavetree',
    method: 'post',
    data
  })
}

// 初始化roles list参数(key, value数据格式)
export function initRoleSelect() {
  return request({
    url: '/auth/roleselect',
    method: 'get'
  })
}

// 获取用户列表
export function getUserList(data) {
  return request({
    url: '/auth/user',
    method: 'post',
    data
  })
}

// 新增用户
export function userAdd(data) {
  return request({
    url: '/auth/useradd',
    method: 'post',
    data
  })
}

// 批量删除用户
export function batchDeleteUser(data) {
  return request({
    url: '/auth/usermdel',
    method: 'post',
    data
  })
}

// 改变用户状态
export function changeUserStatus(data) {
  return request({
    url: '/auth/userstatus',
    method: 'post',
    data
  })
}

// 用户详情
export function userDetail(params) {
  return request({
    url: '/auth/userinfo',
    method: 'get',
    params
  })
}

// 更新用户信息
export function userUpdate(data) {
  return request({
    url: '/auth/userupdate',
    method: 'post',
    data
  })
}

// 重置默认密码
export function userResetPw(params) {
  return request({
    url: '/auth/userrp',
    method: 'get',
    params
  })
}

// 获取菜单列表
export function getMenuList(data) {
  return request({
    url: '/auth/menu',
    method: 'post',
    data
  })
}

// 添加菜单
export function menuAdd(data) {
  return request({
    url: '/auth/menuadd',
    method: 'post',
    data
  })
}

// 获取菜单列表
export function menuDetail(data) {
  return request({
    url: '/auth/menuinfo',
    method: 'post',
    data
  })
}

// 更新菜单信息
export function menuUpdate(data) {
  return request({
    url: '/auth/menuupdate',
    method: 'post',
    data
  })
}
