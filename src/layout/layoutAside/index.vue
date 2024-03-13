<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { useLayoutConfigStore } from '@/stores/layoutConfig'

const store = useLayoutConfigStore()

const Logo = defineAsyncComponent(() => import('./logo.vue'))
const VerticalMenu = defineAsyncComponent(() => import('./vertcialMenu.vue'))

const isCollapse = computed(() => {
  return store.isCollapse
})
</script>

<template>
  <!--左侧菜单区域-->
  <el-aside
    :class="isCollapse ? 'layout-aside-menu-60' : 'layout-aside-menu-200'"
    class="layout-aside"
  >
    <!--logo-->
    <Logo></Logo>
    <!--menu-->
    <VerticalMenu></VerticalMenu>
  </el-aside>
</template>

<style lang="scss" scoped></style>
