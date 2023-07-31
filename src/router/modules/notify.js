import Layout from '@/layout'

const notifyRouter = {
  name: 'Notify',
  path: '/notify',
  hidden: false,
  component: Layout,
  redirect: '/notify/message',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '通知消息',
    icon: 'c-notify'
  },
  children: [
    {
      name: 'NotifyDtalk',
      path: 'dtalk',
      hidden: false,
      component: () => import('@/views/notify/dtalk.vue'),
      meta: {
        title: '钉钉绩效',
        icon: 'i_dtalk',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'NotifyQywx',
      path: 'qywx',
      hidden: false,
      component: () => import('@/views/notify/qywx.vue'),
      meta: {
        title: '企微通知',
        icon: 'i_qywx',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      name: 'NotifyMessage',
      path: 'message',
      hidden: false,
      component: () => import('@/views/notify/message.vue'),
      meta: {
        title: '短信通知',
        icon: 'message',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default notifyRouter
