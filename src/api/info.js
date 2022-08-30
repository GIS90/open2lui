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
export function changeDictStatus(data) {
  return request({
    url: '/info/dict_status',
    method: 'post',
    data
  })
}
