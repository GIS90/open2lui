import request from '@/utils/request'

// Dashboard pan chart data
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

// Dashboard index chart data
export function DashboardIndex(data) {
  return request({
    url: '/dashboard/index',
    method: 'post',
    data
  })
}

// Dashboard short cut data
export function DashboardShortCut(data) {
  return request({
    url: '/dashboard/shortcut',
    method: 'post',
    data
  })
}
