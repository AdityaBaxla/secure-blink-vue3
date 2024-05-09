<template>
  <div class="w-[154px] h-[88px] flex flex-col justify-between relative">
    <div class="text-slate-400 font-inter text-[19px] tracking-wide">{{ heading }}</div>
    <div class="font-inter font-normal text-[37px]">${{ amt }}</div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    amt: String
  }
}
</script>

<style>
div {
  position: relative;
}
</style>
