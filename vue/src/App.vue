<script setup lang="ts">
import { ref } from 'vue';
import Counter from './components/01-Counter/Counter.vue'
import ContactForm from './components/02-ContactForm/ContactForm.vue'
import TodoList from './components/03-TodoList/TodoList.vue'
import Accordion from './components/04-Accordion/App.vue'

const componentMap = <{ [k: string]: any }>{
  'Counter': Counter,
  'ContactForm': ContactForm,
  'TodoList': TodoList,
  'Accordion': Accordion
}

const selectedComponent = ref('Counter');

</script>

<template>
  <div>
    <h1>Front End Demos</h1>
    <select 
      @change="(e) => selectedComponent = (e.target as HTMLInputElement).value" 
      name="selectedComponent" 
      id="selectedComponent" 
      v-model="selectedComponent">
      <option value="none">Select an option</option>
      <option v-for="component in Object.keys(componentMap)" :value="component">{{ component }}</option>
    </select>
    <component :is="componentMap[selectedComponent]"/>
  </div>
</template>