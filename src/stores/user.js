import { defineStore } from 'pinia';

// 1. store 名稱
// 2. 屬性參數
export default defineStore('userStore', {
  // data
  state: () => ({
    name: 'Hobby',
    wallet: 200
  }),

  // computed
  getters: {
    getUserName: (state) => `我的名字叫做 ${state.name}`
  },

  // methods
  actions: {
    //  可以使用 this
    updateName() {
      this.name = 'Aaron'
    }
  }
})