const routerMappings = {
  layout: () => import('@/layout/index.vue'),
  // search
  searchProbase: () => import('@/views/search/probase.vue'),
  searchSqlbase: () => import('@/views/search/sqlbase.vue'),
  // office
  pdf2Word: () => import('@/views/office/pdf2word.vue'),
  excelMerge: () => import('@/views/office/merge.vue'),
  excelSplit: () => import('@/views/office/split.vue'),
  excelHistory: () => import('@/views/office/history.vue'),
  // notify
  notifyMessage: () => import('@/views/notify/message.vue'),
  notifyDtalk: () => import('@/views/notify/dtalk.vue'),
  // info
  infoDepartment: () => import('@/views/info/department.vue'),
  infoDict: () => import('@/views/info/dict.vue'),
  // manage
  manageRole: () => import('@/views/manage/role.vue'),
  manageUser: () => import('@/views/manage/user.vue'),
  manageMenu: () => import('@/views/manage/menu.vue'),
  // setter
  setterProfile: () => import('@/views/setter/profile.vue'),
  setterGuide: () => import('@/views/setter/guide.vue')
}

export default routerMappings
