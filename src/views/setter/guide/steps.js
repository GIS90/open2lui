const steps = [
  {
    element: '#sidebar-container',
    popover: {
      title: '系统菜单',
      description: '系统功能菜单列表，分为一级菜单、二级菜单',
      position: 'right', // position: left, left-center, left-bottom, top,
      // top-center, top-right, right, right-center, right-bottom,
      // bottom, bottom-center, bottom-right, mid-center
      offset: 20
    },
    padding: 0
  },
  {
    element: '#hamburger-container',
    popover: {
      title: '导航菜单',
      description: '打开&&关闭导航菜单',
      position: 'bottom', // position: left, left-center, left-bottom, top,
      // top-center, top-right, right, right-center, right-bottom,
      // bottom, bottom-center, bottom-right, mid-center
      offset: 20
    },
    padding: 0
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: '菜单栏',
      description: '指示当前页面菜单位置',
      position: 'right',
      offset: 20
    },
    padding: 0
  },
  {
    element: '#header-search',
    popover: {
      title: '菜单查询',
      description: '页面搜索，快速导航',
      position: 'left',
      offset: 20
    },
    padding: 0
  },
  {
    element: '#screenfull',
    popover: {
      title: '全屏',
      description: '将页面设置为全屏',
      position: 'left',
      offset: 20
    },
    padding: 0
  },
  {
    element: '#size-select',
    popover: {
      title: '页面大小',
      description: '切换系统大小',
      position: 'left',
      offset: 20
    },
    padding: 0
  },
  {
    element: '#user-avatar',
    popover: {
      title: '个人中心',
      description: '用户个人中心与设置',
      position: 'left',
      offset: 20
    },
    padding: 0
  },
  {
    element: '#tags-view-container',
    popover: {
      title: 'TagsViews',
      description: '您访问的页面的历史记录',
      position: 'bottom',
      offset: 20
    },
    padding: 0
  },
  {
    element: '#guide-opr-container',
    popover: {
      title: '操作域',
      description: '系统定制功能的交互操作域',
      position: 'bottom',
      offset: 0
    },
    padding: 0
  },
  {
    element: '#guide-data-container',
    popover: {
      title: '数据域',
      description: '系统定制功能的数据展示域',
      position: 'bottom',
      offset: 0
    },
    padding: 0
  }
]

export default steps
