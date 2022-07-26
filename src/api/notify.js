import request from '@/utils/request'

// 获取dtalk list
export function getNotifyDtalkList(data) {
  return request({
    url: '/notify/dtalk_list',
    method: 'post',
    data
  })
}

// 删除dtalk单个文件
export function deleteNotifyDtalk(data) {
  return request({
    url: '/notify/dtalk_delete',
    method: 'post',
    data
  })
}

// 删除dtalk多个文件
export function deleteNotifyDtalks(data) {
  return request({
    url: '/notify/dtalk_deletes',
    method: 'post',
    data
  })
}

// dtalk详情
export function getNotifyDtalkDetail(data) {
  return request({
    url: '/notify/dtalk_detail',
    method: 'post',
    data
  })
}

// dtalk详情
export function getNotifyDtalkUpdate(data) {
  return request({
    url: '/notify/dtalk_update',
    method: 'post',
    data
  })
}

// sheet 改变获取新的title与column
export function getChangeSheet(data) {
  return request({
    url: '/notify/dtalk_change_sheet',
    method: 'post',
    data
  })
}
