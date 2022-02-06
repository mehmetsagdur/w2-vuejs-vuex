<template>
  <div>
    <Header></Header>
    <div id="video-list-container">

      <FavoriteVideo v-for="video in filteredProducts"
                     :video="video"
                     :key="video.id"

      ></FavoriteVideo>
    </div>
  </div>
</template>

<script>
import FavoriteVideo from "@/components/FavoriteVideo";
import Header from "@/components/Header";
import axios from "axios";


export default {
  name: "FavoritePage",
  components: {
    Header,
    FavoriteVideo
  },
  data() {
    return {
      videos: [],
    }
  },
  async mounted() {
    const {data} = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos");
    this.videos = data;
    console.log(this.videos);
  },
  computed: {
    filteredProducts() {
      return this.videos.filter(videos => videos.favorite === true)
    }
  },
}
</script>

<style scoped>
#video-list-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  margin-left: 300px;
  margin-top: 20px;

}
</style>