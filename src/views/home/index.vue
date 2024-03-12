<script lang="ts" name="Home" setup>
import { ref } from 'vue'

const message = ref<string>('')
</script>

<template>
  <div>
    <el-input v-model="message" placeholder="请输入message"></el-input>
  </div>
</template>

<style lang="scss" scoped></style>
