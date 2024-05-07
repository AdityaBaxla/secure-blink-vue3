<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import { defineComponent } from 'vue'
</script>

<template>
  <nav class="navbar flex flex-row w-full justify-between items-center ml-60">
    <div>
      <RouterLink to="/" class="text-3xl text-white font-semibold">Home</RouterLink>
    </div>

    <RouterLink to="/login" class="items-center nav-right flex flex-row gap-4 text-2xl text-white">
      <span>About</span>
      <span>Services</span>
      <span>Case Studies</span>
      <span>Testimonials</span>
      <span>Contact</span>
      <div class="rounded-md bg-white text-blue-600 p-2 px-6">Login</div>
    </RouterLink>
  </nav>
</template>

<script lang="ts"></script>

<style scoped>
.nav-right {
}

div {
  position: relative;
}
.navbar {
  position: relative; /* Position the navbar relative to the viewport */
  z-index: 9999; /* Ensure the navbar is on top of everything */
  width: 1358px;
  top: 75px;
  height: 53px;
  background-color: transparent; /* Example background color */
}
</style>
