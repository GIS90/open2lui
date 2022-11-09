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

// dtalk robot ping
export function notifyDtalkRobotPing(data) {
  return request({
    url: '/notify/dtalk_robot_ping',
    method: 'post',
    data
  })
}

// dtalk消息发送dg数据初始化
export function notifyDtalkSendInit(data) {
  return request({
    url: '/notify/dtalk_send_init',
    method: 'post',
    data
  })
}

// dtalk消息发送
export function notifyDtalkSend(data) {
  return request({
    url: '/notify/dtalk_send',
    method: 'post',
    data
  })
}

// 获取qywx robot list
export function notifyQywxRobotList(data) {
  return request({
    url: '/notify/qywx_robot_list',
    method: 'post',
    data
  })
}

// 新增qywx robot
export function notifyQywxRobotAdd(data) {
  return request({
    url: '/notify/qywx_robot_add',
    method: 'post',
    data
  })
}

// 删除qywx robot单个文件
export function notifyQywxRobotDelete(data) {
  return request({
    url: '/notify/qywx_robot_delete',
    method: 'post',
    data
  })
}

// 删除qywx robot多个文件
export function notifyQywxRobotDeletes(data) {
  return request({
    url: '/notify/qywx_robot_deletes',
    method: 'post',
    data
  })
}

// 获取qywx robot详情
export function notifyQywxRobotDetail(data) {
  return request({
    url: '/notify/qywx_robot_detail',
    method: 'post',
    data
  })
}

// 更新qywx robot详情
export function notifyQywxRobotUpdate(data) {
  return request({
    url: '/notify/qywx_robot_update',
    method: 'post',
    data
  })
}

// 更新qywx robot选择状态
export function notifyQywxRobotSelect(data) {
  return request({
    url: '/notify/qywx_robot_select',
    method: 'post',
    data
  })
}

// qywx robot ping
export function notifyQywxRobotPing(data) {
  return request({
    url: '/notify/qywx_robot_ping',
    method: 'post',
    data
  })
}
