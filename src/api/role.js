import request from '@/utils/request'

// 获取source文件列表
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
