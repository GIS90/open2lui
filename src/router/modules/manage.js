import Layout from '@/layout'

const manageRouter = {
  path: '/manage',
  hidden: false,
  component: Layout,
  redirect: '/manage/user',
  name: 'Manage',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '权限管理',
    icon: 'i_manage'
  },
  children: [
    {
      path: 'user',
      hidden: false,
      component: () => import('@/views/manage/user.vue'),
      name: 'ManageUser',
      meta: {
        title: '用户管理',
        icon: 'peoples',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      path: 'role',
      hidden: false,
      component: () => import('@/views/manage/role.vue'),
      name: 'ManageRole',
      meta: {
        title: '角色管理',
        icon: 'i_role',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      path: 'menu',
      hidden: false,
      component: () => import('@/views/manage/menu.vue'),
      name: 'ManageMenu',
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
