<template>
  <div id="s5-form-container" class="grid grid-cols-1 gap-3 justify-items-left px-24 py-20">
    <div id="s5-form-top" class="font-pop font-semibold text-4xl relative">Send Us message</div>
    <div class="relative">
      <input
        v-model="email"
        class="placeholder-black w-full py-2 px-3 outline-none"
        placeholder="Your Email*"
      />
      <div class="border-b border-black absolute left-0 bottom-0 w-full"></div>
    </div>
    <div class="relative">
      <input
        v-model="name"
        class="placeholder-black w-full py-2 px-3 outline-none"
        placeholder="Your Name*"
      />
      <div class="border-b border-black absolute left-0 bottom-0 w-full"></div>
    </div>
    <div class="relative">
      <input
        v-model="phNo"
        class="placeholder-black w-full py-2 px-3 outline-none"
        placeholder="Phone Number*"
      />
      <div class="border-b border-black absolute left-0 bottom-0 w-full"></div>
    </div>
    <div class="relative">
      <input
        v-model="subject"
        class="placeholder-black w-full py-2 px-3 outline-none"
        placeholder="Subject"
      />
      <div class="border-b border-black absolute left-0 bottom-0 w-full"></div>
    </div>
    <div class="relative">
      <input
        v-model="message"
        class="placeholder-black w-full py-2 px-3 outline-none mb-12"
        placeholder="Your Message"
      />
      <div class="border-b border-black absolute left-0 bottom-0 w-full"></div>
    </div>
    <div class="flex items-center">
      <input
        v-model="agreeToTerms"
        type="checkbox"
        id="terms"
        name="terms"
        class="rounded-full h-4 w-4 border-gray-300 focus:ring-blue-500 text-blue-500"
      />
      <label for="terms" class="ml-2 text-xs w-1/2"
        >By sending this message, you confirm that you have read and agreed to our
        privacy-policy.</label
      >
    </div>
    <button
      @click="onButtonClick"
      class="w-[239px] h-[72px] bg-[#0E77FF] opacity-100 rounded-full text-xl"
    >
      <span class="text-white">Get Started</span>
      <span class="text-white">>></span>
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const endpoint = 'https://formsubmit.co/rishab.boomer@gmail.com'

export default defineComponent({
  data() {
    return {
      email: '',
      name: '',
      phNo: '',
      subject: '',
      message: '',
      isEmailValid: false,
      isPhNoValid: false,
      isNameValid: false,
      agreeToTerms: false
    }
  },
  methods: {
    onButtonClick() {
      if (!this.email.includes('@') || !this.email.includes('.')) {
        this.isValidEmail = false
        alert('enter valid email')
      } else {
        this.isEmailValid = true
      }

      if (this.name.length < 1) {
        alert('enter name')
      } else {
        this.isNameValid = true
      }

      if (this.phNo.length < 9 || isNaN(this.phNo)) {
        alert('enter valid phone number')
      } else {
        this.isPhNoValid = true
      }

      if (!this.agreeToTerms) {
        alert('agree to privacy policy')
      } else {
        this.agreeToTerms = true
      }

      // If form is valid, proceed with login
      if (this.isValidForm) {
        console.log('login hit')

        fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify({
            email: this.email,
            name: this.name,
            'phone number': this.phNo,
            subject: this.subject,
            message: this.message
          })
        })
          .then(() => {
            alert('Message Sent')
          })
          .catch(() => {
            alert('error in sending message')
          })
        this.email = ''
        this.name = ''
        this.phNo = ''
        this.subject = ''
        this.message = ''
      }
    }
  },
  computed: {
    isValidForm() {
      return this.isEmailValid && this.isNameValid && this.isPhNoValid && this.agreeToTerms
    }
  }
})
</script>

<style scoped>
div {
  position: relative;
}

input {
  position: relative;
}

#s5-form-container {
  width: 747px;
  height: 836px;
}
</style>
