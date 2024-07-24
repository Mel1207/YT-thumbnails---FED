<template>
  <div class="container">
    <ul class="category-list">
      <li v-for="item in categories" :key="item.id" :class="item.isActive ? 'active category-item' : 'category-item'">
        <span>{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { categories } from '../constants/index'

</script>