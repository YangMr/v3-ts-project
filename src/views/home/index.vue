<script lang="ts" name="Home" setup>
import { computed, defineAsyncComponent, ref } from 'vue'
import { getCategorySalesApi, getTopApi } from '@/api/home'
import type { CategoryResType } from '@/api/home/types'
import { useLayoutConfigStore } from '@/stores/layoutConfig'

const store = useLayoutConfigStore()

const StaticBlock = defineAsyncComponent(() => import('./components/staticBlock.vue'))
const pieChart = defineAsyncComponent(() => import('@/components/chart/pieChart.vue'))
const barChart = defineAsyncComponent(() => import('@/components/chart/barChart.vue'))

// 初始化一个变量,用来分类销售统计数据
const categoryData = ref<CategoryResType[]>([])
// 获取分类销售统计数据
const loadCategoryData = async () => {
  try {
    const { data } = await getCategorySalesApi()
    categoryData.value = data
  } catch (e) {
    console.log(e)
  }
}
loadCategoryData()
const theme = computed(() => (store.isDark ? 'dark' : ''))
const bgColor = computed(() => (store.isDark ? 'transparent' : ''))

// 获取会员消费top10的数据
// x轴的数据
const xAxisData = ref<string[]>([])
// y轴的数据
const data = ref<number[]>([])
const loadTopData = async () => {
  try {
    const { data } = await getTopApi()
    xAxisData.value = data.map((item) => item.name)
    data.value = data.map((item) => item.consumeMoney)

    console.log('xAxisData', xAxisData.value)
    console.log('data', data.value)
  } catch (e) {
    console.log(e)
  }
}
loadTopData()
</script>

<template>
  <div>
    <!-- 营业数据统计-->
    <StaticBlock></StaticBlock>
    <!-- 分类销售统计与近30天销售趋势-->
    <el-row :gutter="20">
      <el-col :lg="9" :md="11" :sm="24" :xs="24" class="mb15">
        <!--饼图-->
        <pieChart
          :bgColor="bgColor"
          :data="categoryData"
          :theme="theme"
          subtext="每种商品分类的近30天销售额"
          title="分类销售统计"
        ></pieChart>
      </el-col>
      <el-col :lg="15" :md="13" :sm="24" :xs="24" class="mb15">
        <el-card shadow="hover">近30天销售趋势</el-card>
      </el-col>
    </el-row>
    <!-- 会员消费与气温仪表盘-->
    <el-row :gutter="20">
      <el-col :lg="15" :md="13" :sm="24" :xs="24" class="mb15">
        <!--柱状图-->
        <barChart :data="data" :xAxisData="xAxisData"></barChart>
      </el-col>
      <el-col :lg="9" :md="11" :sm="24" :xs="24" class="mb15">
        <el-card shadow="hover">近30天销售趋势</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss"></style>
