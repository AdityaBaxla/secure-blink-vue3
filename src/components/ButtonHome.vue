<template>
  <button id="button-main">{{ text }} <span id="button-icon"></span></button>
</template>

<script>
const { defineComponent } = require('vue')

defineComponent({
  name: 'button-home',
  data() {
    return {
      text: 'Get Started'
    }
  }
})
</script>

<style scoped>
#button-main {
  width: 239px;
  height: 72px;
  /* UI Properties */
  background: #0e77ff 0% 0% no-repeat padding-box;
  border-radius: 35px;
  opacity: 1;
}

#button-icon {
  top: 5926px;
  left: 1168px;
  width: 7px;
  height: 12px;
  transform: matrix(0, -1, 1, 0, 0, 0);
  /* UI Properties */
  background: transparent url('../assets/img/arrow-down-sign-to-navigate.svg') 0% 0% no-repeat
    padding-box;
  opacity: 1;
}
</style>
