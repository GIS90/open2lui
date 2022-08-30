import request from '@/utils/request'

// 数据字典列表
export function InfoDictList(data) {
  return request({
    url: '/info/dict_list',
    method: 'post',
    data
  })
}
