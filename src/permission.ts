import router from '@/router'
import { useAuthStore } from '@/stores/auth'

const whiteList: string[] = ['/login', '/404', '/401']

/**
 * 页面鉴权
 */
router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  const accessToken = store.accessToken
  if (accessToken) {
    if (to.path === '/login') {
      return next({ path: '/' })
    }
    next()
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      return next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
