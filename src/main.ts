import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入element-plus
import ElementPlus from 'element-plus'
// 引入icon
import useIcon from './utils/setGlobal'
// 引入element-plus 中文语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 引入scss
import './styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus, {
  locale: zhCn
})
app.use(useIcon)
app.use(router)

app.mount('#app')
