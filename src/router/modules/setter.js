import Layout from '@/layout'

const setterRouter = {
  path: '/setter',
  hidden: false,
  component: Layout,
  redirect: '/setter/profile',
  name: 'Setter',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '个人设置',
    icon: 'i_setter'
  },
  children: [
    {
      path: 'profile',
      hidden: false,
      component: () => import('@/views/setter/profile.vue'),
      name: 'SetterProfile',
      meta: {
        title: '个人中心',
        icon: 'i_user',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      path: 'guide',
      hidden: false,
      component: () => import('@/views/setter/guide.vue'),
      name: 'SetterGuide',
      meta: {
        title: '系统向导',
        icon: 'guide',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default setterRouter
