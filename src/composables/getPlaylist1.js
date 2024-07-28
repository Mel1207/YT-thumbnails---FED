import { ref } from "vue"
export const getPlaylist1 = () => {
  const videos = ref([])
  // const pl1 = import.meta.env.VITE_PL1_ID
  // const serviceAPI = import.meta.env.VITE_CRED_API_SINGLE

  const getPlayList = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&playlistId=${import.meta.env.VITE_PL1_ID}&key=${import.meta.env.VITE_CRED_API_SINGLE}`).then(res => res.json()).then(data => {
      videos.value = data.items
    }).catch(err => console.log(err))
  }

  getPlayList()

  return { videos }
}