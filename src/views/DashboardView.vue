<script setup>
import NavbarDashboardLeft from '@/components/NavbarDashboardLeft.vue'
import CountriesGraph from '@/components/CountriesGraph.vue'
import TeamMembers from '@/components/TeamMembers.vue'
import DashboardCountries from '@/components/DashboardCountries.vue'
</script>

<template>
  <div id="dashboard-full-page" class="w-screen grid grid-cols-10 relative bg-[#FCFCFC]">
    <NavbarDashboardLeft class="col-span-1" />
    <div id="dashboard-main-content" class="flex flex-col col-span-9 pl-20 pt-20 mr-10">
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
      <div
        id="dashboard-prices"
        class="flex flex-row flex-wrap h-[226px] bg-white"
        style="background-color: #ffffff; box-shadow: 0px 3px 26px #00000017"
      >
        <CountriesGraph />
        <CountriesGraph />
        <CountriesGraph />
        <CountriesGraph />
        <CountriesGraph />
      </div>

      <!-- <div class="overflow-x-auto"> -->
      <div id="dashboard-bottom" class="flex flex-row flex-wrap gap-10 mt-10">
        <div id="team-member" class="max-w-[718px] flex-grow">
          <div id="team-header" class="text-4xl font-inter text-slate-700 mb-5">Team Members</div>
          <div id="members" class="flex flex-col gap-4">
            <TeamMembers name="Aditya Baxla" post="Top Trader" />
            <TeamMembers name="Jhon Doe" post="Top Trader" />
            <TeamMembers name="Jerry" post="Manager" />
            <TeamMembers name="Andrew" post="Top Trader" />
          </div>
        </div>
        <div class="flex flex-wrap flex-col w-1/2">
          <div class="text-4xl font-inter text-slate-700 mb-5">Countries</div>
          <DashboardCountries w-full />
        </div>
      </div>
      <!-- </div> -->
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
  },
  components: {
    TeamMembers
  }
})
</script>

<style scoped>
* {
  position: relative;
}

/* #dashboard-prices {
  box-shadow: 0px 3px 26px #00000017;
  opacity: 1;
} */

#dashboard-main-content {
  background: #fcfcfc 0% 0% no-repeat padding-box;
}
</style>
