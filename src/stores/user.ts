import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', () => {
  const userId = ref('')

  return { userId }
})
