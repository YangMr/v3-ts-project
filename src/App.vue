<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { getList } from '@/api/test'

const color = ref<string>('red')
const size = ref<number>(20)

const init = async () => {
  try {
    const res = await getList({
      current: 1,
      size: 10
    })

    console.log('Res=>', res)
  } catch (e) {
    console.log(e)
  }
}
init()
</script>

<template>
  <!--  <svg-icon color="red" name="ele-Edit" size="20"></svg-icon>-->
  <!--  <svg-icon color="blue" name="ele-Delete" size="20"></svg-icon>-->

  <RouterView />
</template>

<style lang="scss" scoped></style>
