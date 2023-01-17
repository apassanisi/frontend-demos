<script setup lang="ts">
import { reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  message: '',
})

const submit = () => {
  console.log(formData)
}

</script>
<template>
  <h1>02. Contact Form</h1>
  <form method="post" @submit.prevent="submit">
    <div>
      <label for="name">Name </label>
      <input type="text" id="name" name="name" placeholder="Name" v-model="formData.name" />
    </div>
    <div>
      <label for="email">Email </label>
      <input type="text" id="email" name="email" placeholder="Email" v-model="formData.email" />
    </div>
    <div>
      <label for="message">Message </label>
      <textarea id="message" name="message" v-model="formData.message"></textarea>
    </div>
    <button type="submit">Send</button>
  </form>
</template>