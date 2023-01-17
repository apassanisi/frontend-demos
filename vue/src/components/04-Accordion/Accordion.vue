<template>
  <div>
    <button @click="collapsed = !collapsed" class="title">{{ title }}</button>
    <p v-show="!collapsed" class="contents">{{ contents }}</p>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const collapsed = ref(true);

const props = defineProps<{
  title: string
  contents: number
}>()
</script>