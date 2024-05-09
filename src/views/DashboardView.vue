<script setup>
import NavbarDashboardLeft from '@/components/NavbarDashboardLeft.vue'
import CountriesGraph from '@/components/CountriesGraph.vue'
import TeamMembers from '@/components/TeamMembers.vue'
import DashboardCountries from '@/components/DashboardCountries.vue'
import DashboardBalance from '@/components/DashboardBalance.vue'
</script>

<template>
  <div id="dashboard-full-page" class="w-screen grid grid-cols-10 relative bg-[#FCFCFC]">
    <NavbarDashboardLeft class="col-span-3 xl:col-span-1 lg:col-span-1 sm:col-span-2" />
    <div
      id="dashboard-main-content"
      class="flex flex-col col-span-7 xl:col-span-9 lg:col-span-9 sm:col-span-8 pl-20 pt-20 mr-10 gap-6"
    >
      <div id="dashboard-top" class="flex flex-wrap flex-row justify-between h-[95px] mb-5">
        <div>
          <div class="text-5xl font-inter text-slate-900">Dashboard</div>
          <div class="font-inter text-slate-400">Welcome back, {{ name }}</div>
        </div>
        <div class="flex flew-row gap-4 items-center">
          <button
            class="bg-blue-600 text-white text-lg font-inter p-1 flex flex-row place-items-center rounded-lg px-5"
          >
            <div class="text-5xl text-slate-200 mb-2">+</div>
            <div class="font-inter justify-center text-slate-200">Add Unit</div>
          </button>
          <img src="../assets/img/profile1.jpeg" alt="" class="h-16" />
          <div class="font-inter text-slate-400">Andrew Jhonstons</div>
        </div>
      </div>
      <div id="dashboard-balances " class="flex flex-row justify-evenly flex-wrap">
        <DashboardBalance />
        <div class="border-[1px] w-0 border-solid border-slate-200 h-[91px]"></div>
        <DashboardBalance />
        <div class="border-[1px] w-0 border-solid border-slate-200 h-[91px]"></div>
        <DashboardBalance />
      </div>
      <div
        id="dashboard-prices"
        class="flex flex-row flex-wrap justify-between min-h-[226px] bg-white"
        style="background-color: #ffffff; box-shadow: 0px 3px 26px #00000017"
      >
        <CountriesGraph country="Italy" amount="475" arrow="up" />
        <CountriesGraph country="United States" amount="431" arrow="down" />
        <CountriesGraph country="Canada" amount="175" arrow="up" />
        <CountriesGraph country="Span" amount="475" arrow="down" />
        <CountriesGraph country="Japan" amount="134" arrow="up" />
        <CountriesGraph country="South Africa" amount="471" arrow="up" />
      </div>

      <!-- <div class="overflow-x-auto"> -->
      <div
        id="dashboard-bottom"
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 mt-10"
      >
        <div id="team-member" class="max-w-[718px]">
          <div id="team-header" class="text-4xl font-inter text-slate-700 mb-5">Team Members</div>
          <div id="members" class="gap-4 flex flex-col">
            <TeamMembers name="Aditya Baxla" post="Top Trader" />
            <TeamMembers name="Jhon Doe" post="Top Trader" />
            <TeamMembers name="Jerry" post="Manager" />
            <TeamMembers name="Andrew" post="Top Trader" />
          </div>
        </div>
        <div class="">
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
    TeamMembers,
    DashboardBalance,
    DashboardCountries
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
