<script lang="ts" name="Home" setup>
import { defineAsyncComponent } from 'vue'

const StaticBlock = defineAsyncComponent(() => import('./components/staticBlock.vue'))
const pieChart = defineAsyncComponent(() => import('@/components/chart/pieChart.vue'))
</script>

<template>
  <div>
    <!-- 营业数据统计-->
    <StaticBlock></StaticBlock>
    <!-- 分类销售统计与近30天销售趋势-->
    <el-row :gutter="20">
      <el-col :lg="9" :md="11" :sm="24" :xs="24" class="mb15">
        <!--饼图-->
        <pieChart></pieChart>
      </el-col>
      <el-col :lg="15" :md="13" :sm="24" :xs="24" class="mb15">
        <el-card shadow="hover">近30天销售趋势</el-card>
      </el-col>
    </el-row>
    <!-- 会员消费与气温仪表盘-->
    <el-row :gutter="20">
      <el-col :lg="15" :md="13" :sm="24" :xs="24" class="mb15">
        <el-card shadow="hover">分类销售统计</el-card>
      </el-col>
      <el-col :lg="9" :md="11" :sm="24" :xs="24" class="mb15">
        <el-card shadow="hover">近30天销售趋势</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss"></style>
