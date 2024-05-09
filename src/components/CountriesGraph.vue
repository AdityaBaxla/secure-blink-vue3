<template>
  <div class="container grid place-items-center h-[124px] w-[161px] m-12">
    <div class="text-base font-inter text-slate-500">{{ country }}</div>
    <div class="flex flex-row items-center gap-3">
      <div class="text-3xl font-bold font-inter text-slate-700">{{ amount }}</div>
      <div :class="{ 'arrow-up': arrow === 'up', 'arrow-down': arrow === 'down' }"></div>
    </div>
    <svg viewBox="0 0 160 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 10,5 L 20,10 L 50,18 L 70,8 L 120,12 L 160,2 "
        :stroke="arrow == 'up' ? '#0F77FA' : '#ff4b75'"
        fill="transparent"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    country: String,
    amount: Number,
    arrow: String
  }
}
</script>

<style scoped>
* {
  position: relative;
}

.path-red {
  stroke: '#ff4b75';
}

.container {
  width: 161px;
  height: 124px;
}

#cont-graph {
  position: absolute;
  top: 678px;
  left: 289px;
  width: 718px;
  height: 406px;
  /* UI Properties */
  opacity: 1;
}

.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid #00e38c;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5px solid #ff4b75;
}
</style>
