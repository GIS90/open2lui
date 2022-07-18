import request from '@/utils/request'

// Office批量上传文件
export function uploadMulFiles(data) {
  return request({
    url: '/common/uploads',
    method: 'post',
    data
  })
}
