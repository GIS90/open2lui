import request from '@/utils/request'

// 获取角色列表
export function getRoleList(data) {
  return request({
    url: '/auth/role_list',
    method: 'post',
    data
  })
}

// 新增角色
export function roleAdd(data) {
  return request({
    url: '/auth/role_add',
    method: 'post',
    data
  })
}

// 更新角色
export function roleUpdate(data) {
  return request({
    url: '/auth/role_update',
    method: 'post',
    data
  })
}

// 角色详情
export function roleDetail(params) {
  return request({
    url: '/auth/role_detail',
    method: 'get',
    params
  })
}

// 批量删除角色
export function batchDeleteRole(data) {
  return request({
    url: '/auth/role_del_m',
    method: 'post',
    data
  })
}

// 单个删除角色
export function roleDelete(data) {
  return request({
    url: '/auth/role_del',
    method: 'post',
    data
  })
}

// 获取角色权限tree
export function getAuthTree(data) {
  return request({
    url: '/auth/role_auth',
    method: 'get',
    params: data
  })
}

// 保存角色权限tree
export function submitAuthTree(data) {
  return request({
    url: '/auth/role_save_tree',
    method: 'post',
    data
  })
}

// 初始化roles list参数(key, value数据格式)
export function initRoleSelect() {
  return request({
    url: '/auth/role_select',
    method: 'get'
  })
}

// 获取用户列表
export function getUserList(data) {
  return request({
    url: '/auth/user_list',
    method: 'post',
    data
  })
}

// 新增用户
export function userAdd(data) {
  return request({
    url: '/auth/user_add',
    method: 'post',
    data
  })
}

// 批量删除用户
export function batchDeleteUser(data) {
  return request({
    url: '/auth/user_del_m',
    method: 'post',
    data
  })
}

// 改变用户状态
export function changeUserStatus(data) {
  return request({
    url: '/auth/user_status',
    method: 'post',
    data
  })
}

// 用户详情
export function userDetail(params) {
  return request({
    url: '/auth/user_detail',
    method: 'get',
    params
  })
}

// 更新用户信息
export function userUpdate(data) {
  return request({
    url: '/auth/user_update',
    method: 'post',
    data
  })
}

// 重置默认密码
export function userResetPw(params) {
  return request({
    url: '/auth/user_reset_pw',
    method: 'get',
    params
  })
}

// 获取用户列表key-value
export function getUserKVList(data) {
  return request({
    url: '/auth/user_kv_list',
    method: 'post',
    data
  })
}

// 获取菜单列表
export function getMenuList(data) {
  return request({
    url: '/auth/menu_list',
    method: 'post',
    data
  })
}

// 添加菜单
export function menuAdd(data) {
  return request({
    url: '/auth/menu_add',
    method: 'post',
    data
  })
}

// 添加菜单
export function menuAddInit() {
  return request({
    url: '/auth/menu_add_init',
    method: 'get'
  })
}

// 获取菜单列表
export function menuDetail(data) {
  return request({
    url: '/auth/menu_detail',
    method: 'post',
    data
  })
}

// 更新菜单信息
export function menuUpdate(data) {
  return request({
    url: '/auth/menu_update',
    method: 'post',
    data
  })
}

// 改变菜单状态
export function menuStatus(data) {
  return request({
    url: '/auth/menu_status',
    method: 'post',
    data
  })
}
