<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar flex justify-between">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  position: relative; /* Position the navbar relative to the viewport */
  top: 0; /* Position the navbar at the top of the viewport */
  left: 0; /* Position the navbar at the left of the viewport */
  width: 100%; /* Make the navbar full width */
  z-index: 9999; /* Ensure the navbar is on top of everything */
  height: 53px;
  background-color: white; /* Example background color */
}
</style>
