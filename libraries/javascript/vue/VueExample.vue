<!-- libraries/javascript/vue/VueExample.vue -->
<script setup>
import { ref, onMounted } from 'vue';

const message = ref('Vue 3 Single File Component Example');
const clicks = ref(0);

onMounted(() => {
  console.log('Vue Component Mounted!');
});
</script>

<template>
  <div class="vue-card">
    <h3>{{ message }}</h3>
    <button @click="clicks++" class="vue-btn">Clicks: {{ clicks }}</button>
  </div>
</template>

<style scoped>
.vue-card {
  padding: 1.5rem;
  background-color: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 8px;
}
.vue-btn {
  background-color: #10b981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>
