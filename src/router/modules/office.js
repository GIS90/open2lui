import Layout from '@/layout'

const officeRouter = {
  path: '/office',
  hidden: false,
  component: Layout,
  redirect: '/office/pdf2word',
  name: 'Excel',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '表格工具',
    icon: 'c-office'
  },
  children: [
    {
      path: 'pdf2word',
      hidden: false,
      component: () => import('@/views/office/pdf2word.vue'),
      name: 'PdfToWord',
      meta: {
        title: 'PDF转WORD',
        icon: 'i_word',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      path: 'emerge',
      hidden: false,
      component: () => import('@/views/office/merge.vue'),
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
      path: 'esplit',
      hidden: false,
      component: () => import('@/views/office/split.vue'),
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
      path: 'ehistory',
      hidden: false,
      component: () => import('@/views/office/history.vue'),
      name: 'ExcelHistory',
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
