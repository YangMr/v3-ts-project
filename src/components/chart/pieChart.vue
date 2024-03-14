<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue'

onMounted(() => {
  init()
})

const init = () => {
  const chartDom = document.getElementById('chartRef')
  const myChart = echarts.init(chartDom)

  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  option && myChart.setOption(option)
}
</script>

<template>
  <el-card shadow="hover">
    <div id="chartRef" style="width: 100%; height: 380px"></div>
  </el-card>
</template>

<style lang="scss" scoped></style>
