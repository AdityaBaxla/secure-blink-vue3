<template>
  <div id="s5-form-container" class="grid grid-cols-1 gap-3 justify-items-left px-24 py-20">
    <div id="s5-form-top" class="font-pop font-semibold text-4xl relative">Send Us message</div>
    <div class="relative">
      <input class="placeholder-black w-full py-2 px-3 outline-none" placeholder="Your Email*" />
      <div class="border-b border-black absolute left-0 bottom-0 w-full"></div>
    </div>
    <div class="relative">
      <input class="placeholder-black w-full py-2 px-3 outline-none" placeholder="Your Name*" />
      <div class="border-b border-black absolute left-0 bottom-0 w-full"></div>
    </div>
    <div class="relative">
      <input class="placeholder-black w-full py-2 px-3 outline-none" placeholder="Phone Number*" />
      <div class="border-b border-black absolute left-0 bottom-0 w-full"></div>
    </div>
    <div class="relative">
      <input class="placeholder-black w-full py-2 px-3 outline-none" placeholder="Subject" />
      <div class="border-b border-black absolute left-0 bottom-0 w-full"></div>
    </div>
    <div class="relative">
      <input
        class="placeholder-black w-full py-2 px-3 outline-none mb-12"
        placeholder="Your Message"
      />
      <div class="border-b border-black absolute left-0 bottom-0 w-full"></div>
    </div>
    <div class="flex items-center">
      <input
        type="checkbox"
        id="terms"
        name="terms"
        class="rounded-full h-4 w-4 border-gray-300 focus:ring-blue-500 text-blue-500"
      />
      <label for="terms" class="ml-2">Agree to terms</label>
    </div>
  </div>
</template>

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
