import request from '@/utils/request'

// 获取dtalk list
export function notifyDtalkList(data) {
  return request({
    url: '/notify/dtalk_list',
    method: 'post',
    data
  })
}

// 删除dtalk单个文件
export function notifyDtalkDelete(data) {
  return request({
    url: '/notify/dtalk_delete',
    method: 'post',
    data
  })
}

// 删除dtalk多个文件
export function notifyDtalkDeletes(data) {
  return request({
    url: '/notify/dtalk_deletes',
    method: 'post',
    data
  })
}

// 获取dtalk详情
export function notifyDtalkDetail(data) {
  return request({
    url: '/notify/dtalk_detail',
    method: 'post',
    data
  })
}

// 更新dtalk详情
export function notifyDtalkUpdate(data) {
  return request({
    url: '/notify/dtalk_update',
    method: 'post',
    data
  })
}

// dtalk sheet 改变获取新的title与column
export function notifyDtalkChangeSheet(data) {
  return request({
    url: '/notify/dtalk_change_sheet',
    method: 'post',
    data
  })
}

// 获取dtalk robot list
export function notifyDtalkRobotList(data) {
  return request({
    url: '/notify/dtalk_robot_list',
    method: 'post',
    data
  })
}

// 新增dtalk robot
export function notifyDtalkRobotAdd(data) {
  return request({
    url: '/notify/dtalk_robot_add',
    method: 'post',
    data
  })
}

// 删除dtalk robot单个文件
export function notifyDtalkRobotDelete(data) {
  return request({
    url: '/notify/dtalk_robot_delete',
    method: 'post',
    data
  })
}

// 删除dtalk robot多个文件
export function notifyDtalkRobotDeletes(data) {
  return request({
    url: '/notify/dtalk_robot_deletes',
    method: 'post',
    data
  })
}

// 获取dtalk robot详情
export function notifyDtalkRobotDetail(data) {
  return request({
    url: '/notify/dtalk_robot_detail',
    method: 'post',
    data
  })
}

// 更新dtalk robot详情
export function notifyDtalkRobotUpdate(data) {
  return request({
    url: '/notify/dtalk_robot_update',
    method: 'post',
    data
  })
}

// 更新dtalk robot选择状态
export function notifyDtalkRobotSelect(data) {
  return request({
    url: '/notify/dtalk_robot_select',
    method: 'post',
    data
  })
}
