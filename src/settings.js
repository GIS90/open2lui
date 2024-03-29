module.exports = {
  /**
   * @type {string}
   * @description show logo/login/page title information
   */
  logoTitle: '践行践远，智慧前行', // logo title
  logoUrl: 'http://2lstore.pygo2.top/templates/opentool_z.png', // logo url
  loginTitle: 'OPENTOOL-Z智行工具箱', // login title: OPENTOOL智行工具箱
  pageTitle: '智行工具箱', // page title: 智行工具箱

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',

  /**
   * admin role rtx
   * */
  adminRoleRtx: 'admin',

  /**
   * user default password
   * user default avatar
   * */
  defaultUserPassword: 'abc1234',
  defaultUserAvatar: 'http://2lstore.pygo2.top/avatars/default.png',
  /**
   * base information
   * */
  baseInfo: {
    name: 'OpenTool-Z',
    version: 'V1.3.0',
    author: 'PyGo²',
    furl: 'https://github.com/GIS90/open2lui.git',
    burl: 'https://github.com/GIS90/open2lisapi.git'
  }
}
