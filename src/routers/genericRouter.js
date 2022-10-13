const moduleName = "GenericModule"

export const router = [{
  path: '/',
  meta: {
    title: '主页',
    modules: moduleName
  },
  component: resolve => require(['../views/noteEditor/index'], resolve),
}, ]

export const genericRouter = router
