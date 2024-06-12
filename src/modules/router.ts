import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

export const setupRouter = (app: App) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: setupLayouts(routes),
  })

  const publicRoutes = ['/login', '/register']

  router.beforeEach((to, from, next) => {
    const isPublic = publicRoutes.includes(to.path)
    if (isPublic)
      return next()

    return next('/login')
  })

  app.use(router)
}
