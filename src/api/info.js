import request from '@/utils/request'

// 数据字典列表
export function InfoDictList(data) {
  return request({
    url: '/info/dict_list',
    method: 'post',
    data
  })
}

// 数据字典状态转换
export function InfoDictStatus(data) {
  return request({
    url: '/info/dict_status',
    method: 'post',
    data
  })
}

// 数据字典单个删除
export function InfoDictDelete(data) {
  return request({
    url: '/info/dict_delete',
    method: 'post',
    data
  })
}

// 数据字典批量删除
export function InfoDictDeletes(data) {
  return request({
    url: '/info/dict_deletes',
    method: 'post',
    data
  })
}

// 数据字典批量禁用
export function InfoDictDisables(data) {
  return request({
    url: '/info/dict_disables',
    method: 'post',
    data
  })
}
