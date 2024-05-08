<template>
  <div
    id="contrie-container"
    class="max-w-[718px] h-[355px] flex flex-col p-5 bg-white"
    style="box-shadow: 0px 3px 26px #00000017"
  >
    <div class="grid grid-rows-3 h-full pt-3">
      <div>
        <div class="flex flex-row align-middle gap-2 p-2">
          <img src="../assets/img/usa.svg" alt="" class="h-[21px]" />
          <span style="" class="font-inter text-slate-400">United States</span>
        </div>
        <div
          class="h-[7px] w-[77%]"
          style="background: #0f77fa 0% 0% no-repeat padding-box; border-radius: 6px"
        ></div>
      </div>
      <div>
        <div class="flex flex-row align-middle gap-2 p-2">
          <img src="../assets/img/italy.svg" alt="" class="h-[21px]" />
          <span style="" class="font-inter text-slate-400">Italy</span>
        </div>
        <div
          class="h-[7px] w-[55%]"
          style="background: #0f77fa 0% 0% no-repeat padding-box; border-radius: 6px"
        ></div>
      </div>
      <div>
        <div class="flex flex-row align-middle gap-2 p-2">
          <img src="../assets/img/spain.svg" alt="" class="h-[21px]" />
          <span style="" class="font-inter text-slate-400">Spain</span>
        </div>
        <div
          class="h-[7px] w-[28%]"
          style="background: #0f77fa 0% 0% no-repeat padding-box; border-radius: 6px"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  position: relative;
}
</style>
