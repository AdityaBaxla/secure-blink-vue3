<script setup lang="ts">
import Vue from 'vue'
import { defineComponent } from 'vue'
import NavbarHomeTop from '../components/NavbarHomeTop.vue'
import { useRoute, useRouter } from 'vue-router'
import { useMyStore } from '../stores/myStore'
import ButtonHome from '../components/ButtonHome.vue'
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
        <button v-if="!loggingIn" @click="onLogin" id="login-button" class="">Login >></button>
        <div v-else class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const endpoint = 'https://formsubmit.co/rishab.boomer@gmail.com'

export default defineComponent({
  data() {
    return {
      email: '',
      password: '',
      isValidEmail: true,
      isValidPassword: true,
      router: useRouter(),
      loggingIn: false
    }
  },
  methods: {
    onLogin() {
      // Frontend validation logic
      if (!this.email.includes('@') || !this.email.includes('.')) {
        this.isValidEmail = false
        alert('enter valid email')
      } else {
        this.isValidEmail = true
      }

      if (this.password.length < 6) {
        this.isValidPassword = false
        alert('password length more than 6 characters')
      } else {
        this.isValidPassword = true
      }

      // If form is valid, proceed with login
      if (this.isValidEmail && this.isValidPassword) {
        console.log('login hit')

        fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify({ email: this.email, password: this.password })
        })
          .then(() => {
            useMyStore().setLogin(true)
            this.router.push('/dashboard')
          })
          .catch(() => {
            alert('error login')
          })
        this.loggingIn = true
        const myStore = useMyStore()
        console.log(myStore.isLoggedIn)
        this.email = ''
        this.password = ''
      }
    }
  },
  computed: {
    isValidForm() {
      return this.isValidEmail && this.isValidPassword
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

.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33.33333px;
  width: 13.33333px;
  height: 13.33333px;
  border-radius: 50%;
  background: #0e77ff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
