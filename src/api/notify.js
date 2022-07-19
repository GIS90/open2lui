import request from '@/utils/request'

// 获取Notify dtalk list
export function getNotifyDtalkList(data) {
  return request({
    url: '/notify/dtalk_list',
    method: 'post',
    data
  })
}

// 删除Excel source单个文件
export function deleteNotifyDtalk(data) {
  return request({
    url: '/notify/dtalk_delete',
    method: 'post',
    data
  })
}

// 删除Excel source多个文件
export function deleteNotifyDtalks(data) {
  return request({
    url: '/notify/dtalk_deletes',
    method: 'post',
    data
  })
}
