<template>
  <nav
    class="justify-between h-screen flex flex-col min-w-[100px] max-w-[210px] w-auto font-pop text-base text-[#8990AD]"
    style="background-color: #ffffff; box-shadow: 0px 3px 26px #00000017"
  >
    <div id="nav-icon-container" class="flex flex-col gap-14 w-auto items-center mt-20">
      <div
        id="dashboard"
        :class="{ 'selected-icon': isSelected }"
        @click="toggleSelection"
        class="icon-container items-center justify-center gap-2 flex flex-col w-auto h-auto p-1"
      >
        <img src="../assets/img/metrics.svg" alt="" />
        <div>Dashboard</div>
      </div>
      <div
        id="analytics"
        class="icon-container justify-center items-center flex flex-col w-auto h-auto"
      >
        <img src="../assets/img/analytics.svg" alt="" />
        <div>analytics</div>
      </div>
      <div
        id="trading"
        class="icon-container items-center justify-center flex flex-col w-auto h-auto"
      >
        <img src="../assets/img/currency-exchange-2.svg" alt="" />
        <div>trading</div>
      </div>
      <div
        id="notifications"
        class="icon-container items-center justify-center flex flex-col w-auto h-auto"
      >
        <img src="../assets/img/sound-wave.svg" alt="" />
        <div>Notifications</div>
      </div>
    </div>
    <div @click="logout" class="flex flex-col w-auto items-center mb-10">
      <img src="../assets/img/logout.svg" alt="" />
      <div>Logout</div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  data() {
    return {
      isSelected: true,
      router: useRouter()
    }
  },
  methods: {
    toggleSelection() {
      this.isSelected = !this.isSelected
    },
    logout() {
      // use pinia to set logout
      console.log('logout pressed')
      this.router.push('/')
    }
  }
})
</script>

<style scoped>
.selected-icon {
  box-shadow: 0px 3px 26px #0000001c;
  border-radius: 5px;
  opacity: 1;
}

#dashboard-logout-icon {
}
* {
  position: relative;
  /* background-color: tomato; */
}

.icon-container:-moz-placeholder {
  border: 2px solid #4f46e5; /* Border style */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Box shadow */
}
</style>
