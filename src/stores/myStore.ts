import { defineStore } from 'pinia'

export const useMyStore = defineStore({
  id: 'myStore',
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    setLogin(loginState: boolean) {
      this.isLoggedIn = loginState
    }
  }
})
