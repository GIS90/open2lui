import request from '@/utils/request'

// search > Sqlbase add
export function searchSqlbaseAdd(data) {
  return request({
    url: '/search/sqlbase_add',
    method: 'post',
    data
  })
}

// search > Sqlbase add init
export function searchSqlbaseAddInit(data) {
  return request({
    url: '/search/sqlbase_add_init',
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

// search > Sqlbase删除单条数据
export function searchSqlbaseDelete(data) {
  return request({
    url: '/search/sqlbase_delete',
    method: 'post',
    data
  })
}

// search > Sqlbase删除多条数据
export function searchSqlbaseDeletes(data) {
  return request({
    url: '/search/sqlbase_deletes',
    method: 'post',
    data
  })
}

// search > Sqlbase详情
export function searchSqlbaseDetail(data) {
  return request({
    url: '/search/sqlbase_detail',
    method: 'post',
    data
  })
}

// search > 更新Sqlbase详情
export function searchSqlbaseUpdate(data) {
  return request({
    url: '/search/sqlbase_update',
    method: 'post',
    data
  })
}

// search > share list
export function searchShareList(data) {
  return request({
    url: '/search/share_list',
    method: 'post',
    data
  })
}
