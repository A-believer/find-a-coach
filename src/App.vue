<template>
  <the-header></the-header>
  <main class="w-[60%] mx-auto my-10">
    <router-view></router-view>
  </main>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
</script>