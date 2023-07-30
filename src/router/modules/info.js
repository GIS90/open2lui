import Layout from '@/layout'

const infoRouter = {
  path: '/info',
  hidden: false,
  component: Layout,
  redirect: '/info/department',
  name: 'Info',
  alwaysShow: true,
  meta: {
    // roles: ['admin','editor']
    title: '信息维护',
    icon: 'c-info'
  },
  children: [
    {
      path: 'department',
      hidden: false,
      component: () => import('@/views/info/department.vue'),
      name: 'InfoDepartment',
      meta: {
        title: '部门架构',
        icon: 'tree',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    },
    {
      path: 'dict',
      hidden: false,
      component: () => import('@/views/info/dict.vue'),
      name: 'InfoDict',
      meta: {
        title: '数据字典',
        icon: 'i_dict',
        noCache: false,
        affix: false,
        breadcrumb: true
      }
    }
  ]
}

export default infoRouter
