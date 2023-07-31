import Layout from '@/layout'

const infoRouter = {
  name: 'Info',
  path: '/info',
  hidden: false,
  component: Layout,
  redirect: '/info/depart',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '信息维护',
    icon: 'c-info'
  },
  children: [
    {
      name: 'InfoDepart',
      path: 'depart',
      hidden: false,
      component: () => import('@/views/info/depart.vue'),
      meta: {
        title: '部门架构',
        icon: 'tree',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'InfoDict',
      path: 'dict',
      hidden: false,
      component: () => import('@/views/info/dict.vue'),
      meta: {
        title: '数据字典',
        icon: 'i_dict',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'InfoApi',
      path: 'api',
      hidden: false,
      component: () => import('@/views/info/api.vue'),
      meta: {
        title: '后台API',
        icon: 'i_api',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'InfoAvatar',
      path: 'avatar',
      hidden: false,
      component: () => import('@/views/info/avatar.vue'),
      meta: {
        title: '头像管理',
        icon: 'i-avatar',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default infoRouter
