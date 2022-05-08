const getters = {
  // app
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  // tagsView
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  // user
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  roles: state => state.user.roles,
  auth: state => state.user.auth,
  userObj: state => state.user.user,
  rtx_id: state => state.user.rtx_id,
  // permission
  permission_routes: state => state.permission.routes,
  // errorLog
  errorLogs: state => state.errorLog.logs
}
export default getters
