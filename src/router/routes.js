
const routes = [
  {
    path: '/',
    component: () => import('components/index.vue'),
    children: [
      { path: '', component: () => import('components/list/listContent.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
