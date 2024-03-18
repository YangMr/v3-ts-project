import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LoginParamsType, UserResType } from '@/api/auth/types'
import type { MenuItemType } from '@/layout/layoutAside/types/verticalMenuType'
import { loginApi } from '@/api/auth'

export const useAuthStore = defineStore(
  'auth',
  () => {
    // token
    const accessToken = ref<string>('')
    // 用户信息
    const userInfo = ref<UserResType>()
    // 菜单数据
    const menuList = ref<MenuItemType[]>([])
    // 按钮权限数据
    const buttonList = ref<string[]>([])
    // 用户名与密码的数据
    const rememberData = ref<LoginParamsType>()

    // 登录操作
    const login = async (data: LoginParamsType) => {
      try {
        const res = await loginApi(data)
        accessToken.value = res.data.access_token
        return res
      } catch (e) {
        console.log(e)
      }
    }

    return {
      accessToken,
      userInfo,
      menuList,
      buttonList,
      login
    }
  },
  {
    persist: true
  }
)

// 退出登录
// 获取权限列表数据
// 页面权限
// 菜单权限
// 按钮权限
// 路由权限
// history 白屏  ---
