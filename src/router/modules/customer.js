const Layout = () => import('@/layout/index.vue')
const CustomerManagement = () => import('@/views/customerManagement/index.vue')

export default [
  {
    path: '/customer',
    component: Layout,
    name: 'customer',
    meta: {
      title: '客户管理',
    },
    icon: 'el-icon-location',
    children: [
      {
        path: '',
        name: 'CustomerManagement',
        component: CustomerManagement,
        meta: {
          title: '客户管理',
        },
      },
    ],
  },
]
