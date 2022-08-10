import request from '@/utils/request'

// 获取Excel source文件列表
export function officeExcelSourceList(data) {
  return request({
    url: '/office/excel_source_list',
    method: 'post',
    data
  })
}

// 更新Excel source文件信息
export function officeExcelSourceUpdate(data) {
  return request({
    url: '/office/excel_source_update',
    method: 'post',
    data
  })
}

// 删除Excel source单个文件
export function officeExcelSourceDelete(data) {
  return request({
    url: '/office/excel_source_delete',
    method: 'post',
    data
  })
}

// 删除Excel source多个文件
export function officeExcelSourceDeletes(data) {
  return request({
    url: '/office/excel_source_deletes',
    method: 'post',
    data
  })
}

// Excel合并文件
export function officeExcelMerge(data) {
  return request({
    url: '/office/excel_merge',
    method: 'post',
    data
  })
}

// 获取Excel result文件列表
export function officeExcelResultList(data) {
  return request({
    url: '/office/excel_history_list',
    method: 'post',
    data
  })
}

// 更新Excel result文件信息
export function officeExcelResultUpdate(data) {
  return request({
    url: '/office/excel_result_update',
    method: 'post',
    data
  })
}

// 删除Excel result单个文件
export function officeExcelResultDelete(data) {
  return request({
    url: '/office/excel_result_delete',
    method: 'post',
    data
  })
}

// 删除Excel result多个文件
export function officeExcelResultDeletes(data) {
  return request({
    url: '/office/excel_result_deletes',
    method: 'post',
    data
  })
}

// Excel拆分文件
export function officeExcelSplit(data) {
  return request({
    url: '/office/excel_split',
    method: 'post',
    data
  })
}

// 初始化Excel拆分参数
export function officeExcelSplitInit(data) {
  return request({
    url: '/office/excel_init_split',
    method: 'post',
    data
  })
}

// 获取Excel Sheet header by sheet index
export function officeExcelSheetHeader(data) {
  return request({
    url: '/office/excel_sheet_header',
    method: 'post',
    data
  })
}

// 获取Pdf2Word文件列表
export function officePdf2WordList(data) {
  return request({
    url: '/office/pdf2word_list',
    method: 'post',
    data
  })
}

// 获取Office PDF文件详情
export function officePDFDetail(data) {
  return request({
    url: '/office/office_pdf_detail',
    method: 'post',
    data
  })
}

// 更新Office PDF文件信息
export function officePDFUpdate(data) {
  return request({
    url: '/office/office_pdf_update',
    method: 'post',
    data
  })
}

// 删除Office PDF单个文件
export function officePDFDelete(data) {
  return request({
    url: '/office/office_pdf_delete',
    method: 'post',
    data
  })
}

// 删除Office PDF多个文件
export function officePDFDeletes(data) {
  return request({
    url: '/office/office_pdf_deletes',
    method: 'post',
    data
  })
}

// Office PDF转WORD文件
export function officePDFTo(data) {
  return request({
    url: '/office/office_pdf_to',
    method: 'post',
    data
  })
}
