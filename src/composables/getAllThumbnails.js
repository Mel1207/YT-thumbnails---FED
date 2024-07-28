import { ref } from 'vue'
export const getAllThumbnails = () => {

  const videos = ref([])

  const getVideos = () => {
    fetch(import.meta.env.VITE_SERVICE_API)
    .then(res => res.json())
    .then(data => {
      videos.value = data.items
      // console.log(data.items)
      // console.log(import.meta.env)
      // console.log(data.items[0].snippet.title)
    })
  }

  getVideos()

  return {
    videos,
    getVideos
  }
}