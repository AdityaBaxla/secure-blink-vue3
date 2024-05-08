<script setup>
import NavbarDashboardLeft from '@/components/NavbarDashboardLeft.vue'
</script>

<template>
  <div id="dashboard-full-page" class="grid grid-cols-2 relative bg-[#FCFCFC]">
    <NavbarDashboardLeft />
    <div id="dashboard-main-content">
      <div>Dashboard</div>
    </div>
  </div>
</template>

<style scoped>
* {
  position: relative;
}
</style>
