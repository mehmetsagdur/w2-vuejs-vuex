<template>
  <div>
    <Header></Header>
    <div id="video-list-container">
      <Video v-for="video in videos"
             :video="video"
             :key="video.id"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Video from "@/components/Video";
import axios from "axios";


export default {
  name: "HomePage",
  components: {
    Header,
    Video
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
  }
}
</script>

<style scoped>
#video-list-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-top: 20px;
}
</style>