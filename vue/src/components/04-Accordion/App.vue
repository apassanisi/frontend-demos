<template>
  <h2>04. Accordion</h2>
  <div class="accordion">
    <Accordion v-for="accordion in accordions" :title="accordion.title" :contents="accordion.contents" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Accordion from './Accordion.vue'

const accordions = ref()

onMounted(() => {
  accordions.value = [
    {
      title: 'HTML',
      contents: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
    },
    {
      title: 'CSS',
      contents: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
    },
    {
      title: 'JavaScript',
      contents: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
    }
  ]
})

</script>
