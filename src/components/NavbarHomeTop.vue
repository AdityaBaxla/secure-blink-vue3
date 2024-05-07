<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import { defineComponent } from 'vue'
</script>

<template>
  <nav class="navbar flex flex-row w-full justify-between items-center pr-20">
    <div>
      <RouterLink to="/">Home</RouterLink>
    </div>

    <RouterLink to="/login" class="flex flex-row gap-2 text-3xl">
      <span>About</span>
      <span>Services</span>
      <span>Case Studies</span>
      <span>Testimonials</span>
      <span>Contact</span>
      <span>Login</span>
    </RouterLink>
  </nav>
</template>

<script lang="ts"></script>

<style scoped>
div {
  position: relative;
}
.navbar {
  position: relative; /* Position the navbar relative to the viewport */
  z-index: 9999; /* Ensure the navbar is on top of everything */
  width: 1920px;
  height: 53px;
  background-color: transparent; /* Example background color */
}
</style>
