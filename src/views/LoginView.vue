<script setup lang="ts">
import Vue from 'vue'
import { defineComponent } from 'vue'
import NavbarHomeTop from '../components/NavbarHomeTop.vue'
</script>

<template>
  <NavbarHomeTop />
  <div id="backgound">
    <div id="background-image"></div>
    <div id="login-container" class="grid grid-cols-1 gap-4">
      <div id="login-head" class="text-center">Login to Access Dashboard</div>
      <div>
        <span id="login-email-label" class="input-label">Email</span
        ><span class="font-pop text-red-700">*</span>
      </div>
      <input v-model="email" id="login-email-input" class="input-field" />
      <div class="flex justify-between">
        <span>
          <span id="login-password-label" class="input-label">Password</span
          ><span class="text-red-700" font-pop>*</span> </span
        ><span id="forgot-password">Forgot Password?</span>
      </div>
      <input v-model="password" type="password" id="login-password-input" class="input-field" />
      <div class="flex justify-center">
        <button @click="onLogin" id="login-button" class="">Login >></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin() {
      console.log('login hit')
      this.email = ''
      this.password = ''
      return 1
    }
  }
})
</script>

<style scoped>
#login-button {
  width: 239px;
  height: 72px;
  /* UI Properties */
  color: #0e77ff;
  border: 2px solid #0e77ff;
  border-radius: 35px;
  opacity: 1;
  font: Poppins;
}
.input-field {
  width: 453px;
  height: 73px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
}
#forgot-password {
  text-align: right;
  font: normal normal medium 18px/32px Poppins;
  letter-spacing: 0px;
  color: #ea1010;
  opacity: 1;
}

.input-label {
  text-align: left;
  font: normal normal 600 18px/32px Poppins;
  letter-spacing: 0px;
  color: #000000;
}
#login-head {
  text-align: left;
  font: normal normal 600 32px/50px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

* {
  position: relative;
}
#login-container {
  position: absolute;
  top: 304px;
  left: 1312px;
  width: 453px;
  height: auto;
}
#backgound {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1080px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
}
#background-image {
  position: absolute;
  top: -177.154296875px;
  left: -547.7056884765625px;
  width: 1652px;
  height: 1316px;
  /* UI Properties */
  background: transparent url('../assets/img/Group 35699.svg') 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>
