import { ref } from "vue"
export const getPlaylist2 = () => {
  const videos = ref([])
  const pl2 = import.meta.env.VITE_PL2_ID
  const serviceAPI = import.meta.env.VITE_CRED_API_SINGLE

  
  const getPlayList = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&playlistId=${pl2}&key=${serviceAPI}`).then(res => res.json()).then(data => {
      videos.value = data.items
    }).catch(err => console.log(err))
  }

  getPlayList()

  return { videos }
}