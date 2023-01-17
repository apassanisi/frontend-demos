<script setup lang="ts">
import { ref } from 'vue';

const todos = ref(['Demo task 1', 'Demo task 2', 'Demo task 3'])
const newTodoInput = ref('');

const addTodo = (newTodo: string) => {
  todos.value = [...todos.value, newTodo];
  newTodoInput.value = ''
}

const deletetodo = (todoToDelete: string) => {
  todos.value = todos.value.filter(todo => todo !== todoToDelete) 
}

</script>
<template>
  <h2>03. Todo List</h2>
  <div>
    <input 
      type="text" 
      aria-label="Add new todo" 
      placeholder="Add your todo" 
      v-model="newTodoInput"
    />
    <div>
      <button @click="addTodo(newTodoInput)">Submit</button>
    </div>
    <ul>
      <li v-for="todo in todos">
        <span>{{ todo }}</span>
        <button @click="deletetodo(todo)">Delete</button>
      </li>
    </ul>
  </div>
</template>