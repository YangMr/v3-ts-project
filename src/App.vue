<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { getList } from '@/api/test'
import { ref } from 'vue'

const list = ref()

const init = async () => {
  try {
    const res = await getList({
      current: 1,
      size: 10
    })

    console.log('res=>', res.data)
    list.value = res.data.records
  } catch (e) {
    console.log(e)
  }
}
init()
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped></style>
