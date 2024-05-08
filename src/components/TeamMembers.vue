<template>
  <div
    id="member-container"
    class="flex flex-row justify-between bg-white h-[75px]"
    style="box-shadow: 0px 3px 26px #00000017"
  >
    <div class="flex flex-row justify-start items-center">
      <img src="../assets/img/profile1.jpeg" alt="" class="h-12" />
      <div style="color: #0b2257">{{ name }}</div>
    </div>
    <div
      class="rounded-full self-center mr-3 p-2 text-sm font-semibold text-blue-400 bg-blue-100"
      style="box-shadow: 0px 3px 26px #00000017; border-radius: 100px"
    >
      {{ post }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    post: String
  }
}
</script>

<style scoped>
* {
  position: relative;
}
</style>
