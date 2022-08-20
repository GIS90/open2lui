import request from '@/utils/request'

// 初始化Dashboard pan
export function DashboardPan(data) {
  return request({
    url: '/dashboard/pan',
    method: 'post',
    data
  })
}

// Dashboard pan chart[日期当前week数据]
export function DashboardPanChart(data) {
  return request({
    url: '/dashboard/pan_chart',
    method: 'post',
    data
  })
}
