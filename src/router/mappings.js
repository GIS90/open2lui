const routerMappings = {
  layout: () => import('@/layout/index.vue'),
  // search
  search_probase: () => import('@/views/search/probase.vue'),
  search_sqlbase: () => import('@/views/search/sqlbase.vue'),
  // excel
  excel_merge: () => import('@/views/excel/merge.vue'),
  excel_split: () => import('@/views/excel/split.vue'),
  excel_history: () => import('@/views/excel/history.vue'),
  // notify
  notify_message: () => import('@/views/notify/message.vue'),
  notify_dtalk: () => import('@/views/notify/dtalk.vue'),
  // convert
  convert_pdf2word: () => import('@/views/convert/pdf2word.vue'),
  // manage
  manage_role: () => import('@/views/manage/role.vue'),
  manage_user: () => import('@/views/manage/user.vue'),
  manage_menu: () => import('@/views/manage/menu.vue'),
  // info
  info_department: () => import('@/views/info/department.vue'),
  info_dict: () => import('@/views/info/dict.vue'),
  // setter
  setter_profile: () => import('@/views/setter/profile.vue'),
  setter_guide: () => import('@/views/setter/guide.vue')
}

export default routerMappings
