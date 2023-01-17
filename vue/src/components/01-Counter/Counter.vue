<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <h2>01. Counter</h2>
  <button @click="() => count++">
    <span>Clicks: {{ count }}</span>
  </button>
</template>