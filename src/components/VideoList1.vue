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
import { getPlaylist1 } from '../composables/getPlaylist1'

const { videos } = getPlaylist1()

</script>