<!-- libraries/javascript/nuxt/nuxt-page.vue -->
<template>
  <div>
    <h1>Welcome to the Nuxt Portal</h1>
    <NuxtLink to="/">Back Home</NuxtLink>
    <div v-if="pending">Loading content...</div>
    <div v-else>
      <p>Data loaded successfully:</p>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
const { data, pending } = useLazyFetch('/api/v1/status');
</script>
