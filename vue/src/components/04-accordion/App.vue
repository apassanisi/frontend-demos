<script setup lang="ts">
import Accordion from './Accordion.vue'
const data = [
  {
    title: 'HTML',
    body: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
  },
  {
    title: 'CSS',
    body: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
  },
  {
    title: 'JavaScript',
    body: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
  }
]
</script>
<template>
  <h1>04. Accordion</h1>
  <Accordion v-for="accordion in data" :title="accordion.title" :body="accordion.body" />
</template>