import Layout from '@/layout'

const manageRouter = {
  name: 'Manage',
  path: '/manage',
  hidden: false,
  component: Layout,
  redirect: '/manage/user',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '权限管理',
    icon: 'c-manage'
  },
  children: [
    {
      name: 'ManageUser',
      path: 'user',
      hidden: false,
      component: () => import('@/views/manage/user.vue'),
      meta: {
        title: '用户管理',
        icon: 'peoples',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'ManageRole',
      path: 'role',
      hidden: false,
      component: () => import('@/views/manage/role.vue'),
      meta: {
        title: '角色管理',
        icon: 'i_role',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'ManageMenu',
      path: 'menu',
      hidden: false,
      component: () => import('@/views/manage/menu.vue'),
      meta: {
        title: '菜单管理',
        icon: 'component',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default manageRouter
