import { ref } from "vue";

export const runGlobal = () => {
  const currentCategory = ref(1)

  return {
    currentCategory
  }
}