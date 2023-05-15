
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/home'},
      { path: '/home', component: () => import('pages/PaginaInicial.vue') },
      { path: '/conta', component: () => import('pages/PaginaConta.vue') },
      { path: '/emprestimo', component: () => import('pages/PaginaEmprestimo.vue') },
      { path: '/pix', component: () => import('pages/PaginaPix.vue') },
      { path: '/cartao', component: () => import('pages/PaginaCartao.vue') },
      { path: '/extrato', component: () => import('pages/PaginaExtrato.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
