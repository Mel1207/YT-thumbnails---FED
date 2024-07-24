<template>
  <div class="container video-list">
    <div class="video-thumbnails">
      <div v-for="item in videos" :key="item.id" class="video-item">
        <!-- <h3>{{ item.snippet.title }}</h3> -->
        <img :src="item.snippet.thumbnails.standard.url" :alt="item.snippet.title">
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'

const videos = ref([])

const getVideos = () => {
  const serviceAPI = import.meta.env.VITE_SERVICE_API
  fetch(serviceAPI)
  .then(res => res.json())
  .then(data => {
    videos.value = data.items
    console.log(data.items)
    console.log(import.meta.env)
    // console.log(data.items[0].snippet.title)
  })
}

getVideos()

</script>