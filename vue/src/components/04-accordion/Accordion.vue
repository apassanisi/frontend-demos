<script setup lang="ts">import { ref } from 'vue';

const props = defineProps<{
  title: string,
  body: string
}>()

const collapsed = ref(true);
</script>
<template>
  <div class="accordion">
    <span @click="collapsed = !collapsed" class="title">{{ title }}</span>
    <p :class="{ collapsed }" class="body">{{ body }}</p>
  </div>
</template>

<style>
.title {
  cursor: pointer;
}

.collapsed {
  display: none;
}
</style>