const moduleName = "ExceptionModule"

export const router = [{
  path: '*',
  meta: {
    title: '404',
    modules: moduleName
  },
  component: resolve => require(['../components/404'], resolve),
}]

export const exceptionRouter = router
