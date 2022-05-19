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
export function addRole(data) {
  return request({
    url: '/auth/addrole',
    method: 'post',
    data
  })
}

// 更新角色
export function updateRole(data) {
  return request({
    url: '/auth/updaterole',
    method: 'post',
    data
  })
}

// 批量删除角色
export function batchDeleteRole(data) {
  return request({
    url: '/auth/mdelrole',
    method: 'post',
    data
  })
}

// 单个删除角色
export function deleteRole(data) {
  return request({
    url: '/auth/delrole',
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
    url: '/auth/savetree',
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
export function addUser(data) {
  return request({
    url: '/auth/adduser',
    method: 'post',
    data
  })
}

// 批量删除用户
export function batchDeleteUser(data) {
  return request({
    url: '/auth/mdeluser',
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
export function detailUser(params) {
  return request({
    url: '/auth/userinfo',
    method: 'get',
    params
  })
}

// 更新用户信息
export function updateUser(data) {
  return request({
    url: '/auth/updateuser',
    method: 'post',
    data
  })
}

// 重置默认密码
export function UserResetPw(params) {
  return request({
    url: '/auth/userrp',
    method: 'get',
    params
  })
}
