import { defineStore } from 'pinia';

export default defineStore('tab', {
  state: () => ({
    tabMain: 'home',
    tabProfile: 'posts'
  }),
  actions: {
    switchTabMain(param) {
      this.tabMain = param
    },
    switchTabProfile(param) {
      this.tabProfile = param
    }
  }
})