import request from '@/utils/request'

// Office批量上传文件
export function uploadMulFiles(data) {
  return request({
    url: '/office/uploads',
    method: 'post',
    data
  })
}

// 获取Excel source文件列表
export function getExcelSourceList(data) {
  return request({
    url: '/office/excel_source_list',
    method: 'post',
    data
  })
}

// 更新Excel source文件信息
export function updateExcelSourceFile(data) {
  return request({
    url: '/office/excel_source_update',
    method: 'post',
    data
  })
}

// 删除Excel source单个文件
export function deleteExcelSourceFile(data) {
  return request({
    url: '/office/excel_source_delete',
    method: 'post',
    data
  })
}

// 删除Excel source多个文件
export function deleteExcelSourceFiles(data) {
  return request({
    url: '/office/excel_source_deletes',
    method: 'post',
    data
  })
}

// Excel合并文件
export function excelMerge(data) {
  return request({
    url: '/office/excel_merge',
    method: 'post',
    data
  })
}

// 获取Excel result文件列表
export function getExcelResultList(data) {
  return request({
    url: '/office/excel_history_list',
    method: 'post',
    data
  })
}

// 更新Excel result文件信息
export function updateExcelResultFile(data) {
  return request({
    url: '/office/excel_result_update',
    method: 'post',
    data
  })
}

// 删除Excel result单个文件
export function deleteExcelResultFile(data) {
  return request({
    url: '/office/excel_result_delete',
    method: 'post',
    data
  })
}

// 删除Excel result多个文件
export function deleteExcelResultFiles(data) {
  return request({
    url: '/office/excel_result_deletes',
    method: 'post',
    data
  })
}

// Excel拆分文件
export function excelSplit(data) {
  return request({
    url: '/office/excel_split',
    method: 'post',
    data
  })
}

// 初始化Excel拆分参数
export function initExcelSplitParams(data) {
  return request({
    url: '/office/excel_init_split',
    method: 'post',
    data
  })
}

// 获取Excel Sheet header by sheet index
export function getExcelSheetHeader(data) {
  return request({
    url: '/office/excel_sheet_header',
    method: 'post',
    data
  })
}

// 获取Pdf2Word文件列表
export function getPdf2WordList(data) {
  return request({
    url: '/office/pdf2word_list',
    method: 'post',
    data
  })
}

// 更新Office PDF文件信息
export function updateOfficePDFFile(data) {
  return request({
    url: '/office/office_pdf_update',
    method: 'post',
    data
  })
}

// 删除Office PDF单个文件
export function deleteOfficePDFFile(data) {
  return request({
    url: '/office/office_pdf_delete',
    method: 'post',
    data
  })
}

// 删除Office PDF多个文件
export function deleteOfficePDFFiles(data) {
  return request({
    url: '/office/office_pdf_deletes',
    method: 'post',
    data
  })
}
