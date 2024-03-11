import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 设置端口号为8080
    port: 8080,
    // 启动项目时,自动打开浏览器
    open: true,
    // 跨域代理
    proxy: {
      '/api': {
        target: 'http://vue3.mengxuegu.com/pro-api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
