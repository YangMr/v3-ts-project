<script lang="ts" setup>
// 接受父组件传递的参数
let props = withDefaults(
  defineProps<{
    title?: string
    subtext?: string
    theme?: string
    bgColor?: string
    width?: string
    height?: string
    data: any[]
    xAxisData: any[]
  }>(),
  {
    width: '100%',
    height: '380px',
    data: () => []
  }
)
</script>

<template>
  <el-card shadow="hover"> 会员消费top100</el-card>
</template>

<style lang="scss" scoped></style>
