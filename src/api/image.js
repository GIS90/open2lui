import request from '@/utils/request'

// 数据字典列表
export function ImageProfileAvatarList(data) {
  return request({
    url: '/image/profile_avatar_list',
    method: 'post',
    data
  })
}

// 数据字典列表
export function ImageProfileAvatarSet(data) {
  return request({
    url: '/image/profile_avatar_set',
    method: 'post',
    data
  })
}

