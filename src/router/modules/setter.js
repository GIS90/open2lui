import Layout from '@/layout'

const setterRouter = {
  name: 'Setter',
  path: '/setter',
  hidden: false,
  component: Layout,
  redirect: '/setter/profile',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '个人设置',
    icon: 'c-setter'
  },
  children: [
    {
      name: 'SetterProfile',
      path: 'profile',
      hidden: false,
      component: () => import('@/views/setter/profile.vue'),
      meta: {
        title: '个人中心',
        icon: 'i_user',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'SetterGuide',
      path: 'guide',
      hidden: false,
      component: () => import('@/views/setter/guide.vue'),
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
