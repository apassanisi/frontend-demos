<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <h1>01. Counter</h1>
  <button @click="() => count++">
    <span>Clicks: {{ count }}</span>
  </button>
</template>