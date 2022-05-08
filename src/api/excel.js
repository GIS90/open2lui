import request from '@/utils/request'

// 获取source文件列表
export function getSourceList(data) {
  return request({
    url: '/excel/list',
    method: 'post',
    data
  })
}

// 获取result文件列表
export function getResultList(data) {
  return request({
    url: '/excel/history',
    method: 'post',
    data
  })
}

// 更新source文件信息
export function updateSourceFile(data) {
  return request({
    url: '/excel/updates',
    method: 'post',
    data
  })
}

// 更新result文件信息
export function updateResultFile(data) {
  return request({
    url: '/excel/updater',
    method: 'post',
    data
  })
}

// 删除source单个文件
export function deleteSourceFile(data) {
  return request({
    url: '/excel/delete',
    method: 'post',
    data
  })
}

// 删除source多个文件
export function deleteSourceFiles(data) {
  return request({
    url: '/excel/deletes',
    method: 'post',
    data
  })
}

// 批量上传文件
export function uploadMulFiles(data) {
  return request({
    url: '/excel/uploads',
    method: 'post',
    data
  })
}

// 合并文件
export function mergeFiles(data) {
  return request({
    url: '/excel/merge',
    method: 'post',
    data
  })
}

// 删除result单个文件
export function deleteResultFile(data) {
  return request({
    url: '/excel/deleter',
    method: 'post',
    data
  })
}

// 删除result多个文件
export function deleteResultFiles(data) {
  return request({
    url: '/excel/deletesr',
    method: 'post',
    data
  })
}

// 拆分文件
export function splitFiles(data) {
  return request({
    url: '/excel/split',
    method: 'post',
    data
  })
}

// 初始化拆分参数
export function initSplitParams(data) {
  return request({
    url: '/excel/initsplit',
    method: 'post',
    data
  })
}

// 获取Sheet header by sheet index
export function getSheetHeader(data) {
  return request({
    url: '/excel/sheetheader',
    method: 'post',
    data
  })
}
