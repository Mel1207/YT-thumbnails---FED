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

  <VideoList v-if="currentCategory === 1"/>
  <VideoList1 v-if="currentCategory === 2"/>
  <VideoList2 v-if="currentCategory === 3"/>
  <VideoList3 v-if="currentCategory === 4"/>
</template>

<script setup>
import VideoList from './VideoList.vue'
import VideoList1 from './VideoList1.vue'
import VideoList2 from './VideoList2.vue'
import VideoList3 from './VideoList3.vue'

import { runGlobal } from '../composables/global'
import { categories } from '../constants/index'



const { currentCategory } = runGlobal()

const activeCategory = (id) => {
  currentCategory.value = id
  // console.log(currentCategory.value)
}

</script>