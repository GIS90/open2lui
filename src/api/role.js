import request from '@/utils/request'

// 获取source文件列表
export function getRoleList(data) {
  return request({
    url: '/auth/role',
    method: 'post',
    data
  })
}
