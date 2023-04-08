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

// 数据字典详情
export function InfoDictDetail(data) {
  return request({
    url: '/info/dict_detail',
    method: 'post',
    data
  })
}

// 数据字典更新
export function InfoDictUpdate(data) {
  return request({
    url: '/info/dict_update',
    method: 'post',
    data
  })
}

// 数据字典新增
export function InfoDictAdd(data) {
  return request({
    url: '/info/dict_add',
    method: 'post',
    data
  })
}

// 数据字典NAMES
export function InfoDictNames(data) {
  return request({
    url: '/info/dict_names',
    method: 'post',
    data
  })
}

// API列表
export function InfoApiList(data) {
  return request({
    url: '/info/api_list',
    method: 'post',
    data
  })
}

// API单个删除
export function InfoApiDelete(data) {
  return request({
    url: '/info/api_delete',
    method: 'post',
    data
  })
}

// API批量删除
export function InfoApiDeletes(data) {
  return request({
    url: '/info/api_deletes',
    method: 'post',
    data
  })
}

// API详情
export function InfoApiDetail(data) {
  return request({
    url: '/info/api_detail',
    method: 'post',
    data
  })
}

// API更新
export function InfoApiUpdate(data) {
  return request({
    url: '/info/api_update',
    method: 'post',
    data
  })
}

// API新增
export function InfoApiAdd(data) {
  return request({
    url: '/info/api_add',
    method: 'post',
    data
  })
}

// API TYPE字典
export function InfoApiTypeList(data) {
  return request({
    url: '/info/api_types',
    method: 'post',
    data
  })
}

// 部门树列表
export function InfoDepartList(data) {
  return request({
    url: '/info/depart_list',
    method: 'post',
    data
  })
}

// 更新部门信息
export function InfoDepartUpdateTree(data) {
  return request({
    url: '/info/depart_update_tree',
    method: 'post',
    data
  })
}

// 部门新增初始化参数
export function InfoDepartAddInit(data) {
  return request({
    url: '/info/depart_init',
    method: 'post',
    data
  })
}

// 新增部门
export function InfoDepartAdd(data) {
  return request({
    url: '/info/depart_add',
    method: 'post',
    data
  })
}

// 删除部门
export function InfoDepartRemove(data) {
  return request({
    url: '/info/depart_remove',
    method: 'post',
    data
  })
}
