import Layout from '@/layout'

const notifyRouter = {
  path: '/notify',
  hidden: false,
  component: Layout,
  redirect: '/notify/message',
  name: 'Notify',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '通知管理',
    icon: 'i_notify'
  },
  children: [
    {
      path: 'message',
      hidden: false,
      component: () => import('@/views/notify/message.vue'),
      name: 'NotifyMessage',
      meta: {
        title: '短信通知',
        icon: 'message',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      path: 'dtalk',
      hidden: false,
      component: () => import('@/views/notify/dtalk.vue'),
      name: 'NotifyDtalk',
      meta: {
        title: '钉钉绩效',
        icon: 'i_dtalk',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default notifyRouter
