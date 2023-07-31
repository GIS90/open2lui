import Layout from '@/layout'

const officeRouter = {
  name: 'Office',
  path: '/office',
  hidden: false,
  component: Layout,
  redirect: '/office/pdf2word',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '表格工具',
    icon: 'c-office'
  },
  children: [
    {
      name: 'PdfToWord',
      path: 'pdf2word',
      hidden: false,
      component: () => import('@/views/office/pdf2word.vue'),
      meta: {
        title: 'PDF转WORD',
        icon: 'i_word',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'ExcelMerge',
      path: 'merge',
      hidden: false,
      component: () => import('@/views/office/merge.vue'),
      meta: {
        title: '表格合并',
        icon: 'i_merge',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'ExcelSplit',
      path: 'split',
      hidden: false,
      component: () => import('@/views/office/split.vue'),
      meta: {
        title: '表格拆分',
        icon: 'i_split',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'ExcelHistory',
      path: 'history',
      hidden: false,
      component: () => import('@/views/office/history.vue'),
      meta: {
        title: '表格历史',
        icon: 'i_excel',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default officeRouter
