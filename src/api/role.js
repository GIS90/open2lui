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
