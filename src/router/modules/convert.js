import Layout from '@/layout'

const convertRouter = {
  path: '/convert',
  hidden: false,
  component: Layout,
  redirect: '/convert/pdf2word',
  name: 'Convert',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '文档转换',
    icon: 'i_convert'
  },
  children: [
    {
      path: 'pdf2word',
      hidden: false,
      component: () => import('@/views/convert/pdf2word.vue'),
      name: 'ConvertPdf2word',
      meta: {
        title: 'PDF转WORD',
        icon: 'i_word',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default convertRouter
