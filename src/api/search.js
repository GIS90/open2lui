import request from '@/utils/request'

// search > Sqlbase add
export function sqlbaseAdd(data) {
  return request({
    url: '/search/sqlbase_add',
    method: 'post',
    data
  })
}
