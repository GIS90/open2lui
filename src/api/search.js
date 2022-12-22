import request from '@/utils/request'

// search > Sqlbase add
export function searchSqlbaseAdd(data) {
  return request({
    url: '/search/sqlbase_add',
    method: 'post',
    data
  })
}

// search > Sqlbase list
export function searchSqlbaseList(data) {
  return request({
    url: '/search/sqlbase_list',
    method: 'post',
    data
  })
}
