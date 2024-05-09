<template>
  <div class="w-[154px] h-[88px] flex flex-col justify-between relative pb-3">
    <div class="text-slate-400 font-inter text-[19px] tracking-wide">CURRENCIES</div>
    <div class="flex flex-row w-full gap-2">
      <div class="grid place-items-center">
        <img src="../assets/img/bitcoin-2.svg" alt="" class="absolute" />
        <div class="currency rounded-full"></div>
      </div>
      <div class="grid place-items-center">
        <img src="../assets/img/currency-dollar.svg" alt="" class="absolute" />
        <div class="currency rounded-full"></div>
      </div>
      <div class="grid place-items-center">
        <img src="../assets/img/currency-euro.svg" alt="" class="absolute" />
        <div class="currency rounded-full"></div>
      </div>
      <div class="grid place-items-center">
        <img src="../assets/img/currency-yen.svg" alt="" class="absolute" />
        <div class="currency rounded-full"></div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  position: relative;
}

.currency {
  width: 33px;
  height: 33px;
  /* UI Properties */
  background: #2464fc 0% 0% no-repeat padding-box;
  opacity: 0.1;
}
</style>
