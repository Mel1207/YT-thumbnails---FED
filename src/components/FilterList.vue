<template>
  <div class="container">
    <ul class="category-list">
      <li 
        v-for="item in categories" 
        :key="item.id" :class="currentCategory === item.id ? 'active category-item' 
        : 'category-item'"
        @click="activeCategory(item.id)"
        >
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { categories } from '../constants/index'
import { ref } from 'vue'

const currentCategory = ref(1)

const activeCategory = (id) => {
  currentCategory.value = id
}

</script>