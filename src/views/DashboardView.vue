<script setup>
import NavbarDashboardLeft from '@/components/NavbarDashboardLeft.vue'
import CountriesGraph from '@/components/CountriesGraph.vue'
</script>

<template>
  <div id="dashboard-full-page" class="w-screen grid grid-cols-10 relative bg-[#FCFCFC]">
    <NavbarDashboardLeft class="col-span-1" />
    <div id="dashboard-main-content" class="flex flex-col col-span-9 pl-20 pt-20">
      <div id="dashboard-top" class="flex flex-row justify-between">
        <div>
          <div class="text-5xl font-inter text-slate-900">Dashboard</div>
          <div>Welcome back, {{ name }}</div>
        </div>
        <div>
          <button>+ Add Unit</button>
          <img src="" alt="" />
          <div>Andrew Jhonstons</div>
        </div>
      </div>
      <div id="dashboard-balances " class="flex flex-row justify-evenly flex-wrap">
        <div class="w-[154px] h-[88px] flex flex-col justify-between">
          <div class="text-slate-400 font-inter text-[19px] tracking-wide">BALANCE</div>
          <div class="font-inter font-normal text-[37px]">$5900</div>
        </div>
        <div class="border-[1px] w-0 border-solid border-slate-200 h-[91px]"></div>
      </div>
      <div id="dashboard-prices" class="flex flex-row flex-wrap h-[226px]">
        <CountriesGraph />
      </div>
      <div id="dashboard-bottom">bottom row</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'Andrew'
    }
  }
})
</script>

<style scoped>
* {
  position: relative;
}
</style>
