import Layout from '@/layout'

const excelRouter = {
  path: '/excel',
  hidden: false,
  component: Layout,
  redirect: '/excel/merge',
  name: 'Excel',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '表格工具',
    icon: 'i_excel'
  },
  children: [
    {
      path: 'merge',
      hidden: false,
      component: () => import('@/views/excel/merge.vue'),
      name: 'ExcelMerge',
      meta: {
        title: '表格合并',
        icon: 'i_merge',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      path: 'split',
      hidden: false,
      component: () => import('@/views/excel/split.vue'),
      name: 'ExcelSplit',
      meta: {
        title: '表格拆分',
        icon: 'i_split',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      path: 'history',
      hidden: false,
      component: () => import('@/views/excel/history.vue'),
      name: 'ExcelHistory',
      meta: {
        title: '表格拆分',
        icon: 'i_split',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default excelRouter
