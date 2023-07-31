import Layout from '@/layout'

const searchRouter = {
  name: 'Search',
  path: '/search',
  hidden: false,
  component: Layout,
  redirect: '/search/sqlbase',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '问题检索',
    icon: 'c-search'
  },
  children: [
    {
      name: 'SearchSqlbase',
      path: 'sqlbase',
      hidden: false,
      component: () => import('@/views/search/sqlbase.vue'),
      meta: {
        title: '取数仓库',
        icon: 'i_sql',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'SearchProbase',
      path: 'probase',
      hidden: false,
      component: () => import('@/views/search/probase.vue'),
      meta: {
        title: '问题仓库',
        icon: 'i_problem',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'SearchShare',
      path: 'share',
      hidden: false,
      component: () => import('@/views/search/share.vue'),
      meta: {
        title: '知识分享',
        icon: 'i_share',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default searchRouter
