const routerMappings = {
  layout: () => import('@/layout/index.vue'),
  // search
  search_probase: () => import('@/views/search/probase.vue'),
  search_sqlbase: () => import('@/views/search/sqlbase.vue'),
  // office
  pdf_to_word: () => import('@/views/office/pdf2word.vue'),
  excel_merge: () => import('@/views/office/emerge.vue'),
  excel_split: () => import('@/views/office/esplit.vue'),
  excel_history: () => import('@/views/office/ehistory.vue'),
  // notify
  notify_message: () => import('@/views/notify/message.vue'),
  notify_dtalk: () => import('@/views/notify/dtalk.vue'),
  // info
  info_department: () => import('@/views/info/department.vue'),
  info_dict: () => import('@/views/info/dict.vue'),
  // manage
  manage_role: () => import('@/views/manage/role.vue'),
  manage_user: () => import('@/views/manage/user.vue'),
  manage_menu: () => import('@/views/manage/menu.vue'),
  // setter
  setter_profile: () => import('@/views/setter/profile.vue'),
  setter_guide: () => import('@/views/setter/guide.vue')
}

export default routerMappings
