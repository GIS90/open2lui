import Layout from '@/layout'

const searchRouter = {
  path: '/search',
  hidden: false,
  component: Layout,
  redirect: '/search/probase',
  name: 'Search',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '问题检索',
    icon: 'c-search'
  },
  children: [
    {
      path: 'probase',
      hidden: false,
      component: () => import('@/views/search/probase.vue'),
      name: 'SearchProbase',
      meta: {
        title: '问题仓库',
        icon: 'i_problem',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      path: 'sqlbase',
      hidden: false,
      component: () => import('@/views/search/sqlbase.vue'),
      name: 'SearchSqlbase',
      meta: {
        title: '取数仓库',
        icon: 'i_sql',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default searchRouter
