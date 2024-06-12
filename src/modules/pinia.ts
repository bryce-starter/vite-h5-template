import type { App } from 'vue'
import { createPinia } from 'pinia'
import { persistPlugin } from 'pinia-misc'

export const setupPinia = (app: App) => {
  const pinia = createPinia()
  pinia.use(persistPlugin)

  app.use(pinia)
}
