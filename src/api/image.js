import request from '@/utils/request'

// 数据字典列表
export function ImageAvatarList(data) {
  return request({
    url: '/image/avatar_list',
    method: 'post',
    data
  })
}
