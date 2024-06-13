import request from '@/utils/request'

// 单文件上传
export function uploadMulFile(data) {
  return request({
    url: '/common/file_upload',
    method: 'post',
    data
  })
}

// 文件上传
export function uploadMulFiles(data) {
  return request({
    url: '/common/file_uploads',
    method: 'post',
    data
  })
}

// Excel下载
export function downloadExcel(data) {
  return request({
    url: '/common/download_excel',
    method: 'post',
    data
  })
}

// Excel下载初始化枚举
export function downloadExcelInit(params) {
  return request({
    url: '/common/download_excel_init',
    method: 'get',
    params
  })
}
