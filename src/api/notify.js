import request from '@/utils/request'

// 获取Notify dtalk list
export function getNotifyDtalkList(data) {
  return request({
    url: '/notify/dtalk_list',
    method: 'post',
    data
  })
}
