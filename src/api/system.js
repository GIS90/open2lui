import request from '@/utils/request'

// 数据字典列表
export function SystemDictList(data) {
  return request({
    url: '/system/dict_list',
    method: 'post',
    data
  })
}

// 数据字典状态转换
export function SystemDictStatus(data) {
  return request({
    url: '/system/dict_status',
    method: 'post',
    data
  })
}

// 数据字典单个删除
export function SystemDictDelete(data) {
  return request({
    url: '/system/dict_delete',
    method: 'post',
    data
  })
}

// 数据字典批量删除
export function SystemDictDeletes(data) {
  return request({
    url: '/system/dict_deletes',
    method: 'post',
    data
  })
}

// 数据字典批量禁用
export function SystemDictDisables(data) {
  return request({
    url: '/system/dict_disables',
    method: 'post',
    data
  })
}

// 数据字典详情
export function SystemDictDetail(data) {
  return request({
    url: '/system/dict_detail',
    method: 'post',
    data
  })
}

// 数据字典更新
export function SystemDictUpdate(data) {
  return request({
    url: '/system/dict_update',
    method: 'post',
    data
  })
}

// 数据字典新增
export function SystemDictAdd(data) {
  return request({
    url: '/system/dict_add',
    method: 'post',
    data
  })
}

// 数据字典NAMES
export function SystemDictNames(data) {
  return request({
    url: '/system/dict_names',
    method: 'post',
    data
  })
}

// API列表
export function SystemApiList(data) {
  return request({
    url: '/system/api_list',
    method: 'post',
    data
  })
}

// API单个删除
export function SystemApiDelete(data) {
  return request({
    url: '/system/api_delete',
    method: 'post',
    data
  })
}

// API批量删除
export function SystemApiDeletes(data) {
  return request({
    url: '/system/api_deletes',
    method: 'post',
    data
  })
}

// API详情
export function SystemApiDetail(data) {
  return request({
    url: '/system/api_detail',
    method: 'post',
    data
  })
}

// API更新
export function SystemApiUpdate(data) {
  return request({
    url: '/system/api_update',
    method: 'post',
    data
  })
}

// API新增
export function SystemApiAdd(data) {
  return request({
    url: '/system/api_add',
    method: 'post',
    data
  })
}

// API TYPE字典
export function SystemApiTypeList(data) {
  return request({
    url: '/system/api_types',
    method: 'post',
    data
  })
}

// 部门树列表
export function SystemDepartList(data) {
  return request({
    url: '/system/depart_list',
    method: 'post',
    data
  })
}

// 更新部门信息
export function SystemDepartUpdateTree(data) {
  return request({
    url: '/system/depart_update_tree',
    method: 'post',
    data
  })
}

// 部门新增初始化参数
export function SystemDepartAddInit(data) {
  return request({
    url: '/system/depart_init',
    method: 'post',
    data
  })
}

// 新增部门
export function SystemDepartAdd(data) {
  return request({
    url: '/system/depart_add',
    method: 'post',
    data
  })
}

// 删除部门
export function SystemDepartRemove(data) {
  return request({
    url: '/system/depart_remove',
    method: 'post',
    data
  })
}

// 部门详情
export function SystemDepartDetail(data) {
  return request({
    url: '/system/depart_detail',
    method: 'post',
    data
  })
}

// 部门详情更新
export function SystemDepartUpdate(data) {
  return request({
    url: '/system/depart_update',
    method: 'post',
    data
  })
}

// 部门详情更新
export function SystemDepartDrag(data) {
  return request({
    url: '/system/depart_drag',
    method: 'post',
    data
  })
}

// 日志列表
export function SystemLogList(data) {
  return request({
    url: '/system/log_list',
    method: 'post',
    data
  })
}
