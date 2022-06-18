import { defineStore } from 'pinia';

export default defineStore('modal', {
  state: () => ({
    modalPost: false
  }),
  actions: {
    openModalPost() {
      this.modalPost = true
    },
    closeModalPost() {
      this.modalPost = false
    }
  }
})