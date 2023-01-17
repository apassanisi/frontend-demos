<script setup lang="ts">
import { ref } from 'vue';
import Counter from './components/01-Counter/Counter.vue'
import ContactForm from './components/02-ContactForm/ContactForm.vue'
// import TodoList from './components/UI/03-todo-list.vue'
// import Accordion from './components/UI/04-accordion/App.vue'

const demoMap = <{ [k: string]: any }>{
  'Counter': Counter,
  'ContactForm': ContactForm
}

const selectedComponent = ref();

</script>

<template>
  <div>
    <h1>Front End Demos</h1>
    <select 
      @change="(e) => selectedComponent = (e.target as HTMLInputElement).value" 
      name="selectedComponent" 
      id="selectedComponent" 
      v-model="selectedComponent">
      <option v-for="component in Object.keys(demoMap)" :value="component">{{ component }}</option>
    </select>
    <component :is="demoMap[selectedComponent]"/>
  </div>
</template>