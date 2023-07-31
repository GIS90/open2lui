const routerMappings = {
  layout: () => import('@/layout/index.vue'),
  // office
  pdf2Word: () => import('@/views/office/pdf2word.vue'),
  excelMerge: () => import('@/views/office/merge.vue'),
  excelSplit: () => import('@/views/office/split.vue'),
  excelHistory: () => import('@/views/office/history.vue'),
  // search
  searchSqlbase: () => import('@/views/search/sqlbase.vue'),
  searchProbase: () => import('@/views/search/probase.vue'),
  searchShare: () => import('@/views/search/share.vue'),
  // notify
  notifyDtalk: () => import('@/views/notify/dtalk.vue'),
  notifyQywx: () => import('@/views/notify/qywx.vue'),
  notifyMessage: () => import('@/views/notify/message.vue'),
  // info
  infoDepart: () => import('@/views/info/depart.vue'),
  infoDict: () => import('@/views/info/dict.vue'),
  infoApi: () => import('@/views/info/api.vue'),
  infoAvatar: () => import('@/views/info/avatar.vue'),
  // manage
  manageUser: () => import('@/views/manage/user.vue'),
  manageRole: () => import('@/views/manage/role.vue'),
  manageMenu: () => import('@/views/manage/menu.vue'),
  // setter
  setterProfile: () => import('@/views/setter/profile.vue'),
  setterGuide: () => import('@/views/setter/guide.vue')
}

export default routerMappings
