<template>
  <div class="video-container">
    <img id="video-image"
         @mouseover="hover = true"
         @mouseleave="hover = false"
         :src="pictureHover "
         :alt="video.title"
         @click="navigateToWatchPage">
    <div class="video-details-container">

      <div class="video-details">
        <span id="video-name">{{ video.title }}</span>
        <div class="video-post-details">
          <span id="videoViews">{{ video.viewCount }} görüntüleme</span>

          <span id="videoDate">{{ video.publishDateInMonth }} ay önce</span>
        </div>
      </div>
      <img id="owner-image"
           :src="video.ownerImage"
           :alt="video.ownerName">
      <span id="video-owner">{{ video.ownerName }}</span>
      <span id="video-description">{{ video.description }}</span>

    </div>

  </div>
</template>

<script>
export default {
  name: "FavoriteVideo",
  props: {
    video: Object
  },
  data() {
    return {
      hover: false,
    };
  }, methods: {
    navigateToWatchPage() {
      this.$router.push({path: '../watch', query: {id: this.video.id}})
    },
  },
  computed: {
    pictureHover() {
      if (this.hover === true) {
        return this.video.hoverImage
      } else {
        return this.video.coverImage
      }
    },
  },
}
</script>

<style scoped>
.video-container {
  width: 360px;
  font-family: "Roboto", "Arial", sans-serif;
  margin-right: 15px;
  display: flex;
  margin-bottom: 20px;
}

#video-image {
  width: 360px;
  height: 200px;
}

#owner-image {
  width: 24px;
  height: 24px;
  border-radius: 20px;
  margin-right: 10px;
  line-height: 2rem;

}

.video-details-container {
  display: flex;
  height: 50px;
  width: 500px;
  flex-wrap: wrap;
  margin-left: 10px;
}

.video-details {
  font-family: "Roboto", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  max-height: 70px;
  height: 60px;
  width: 500px;
  position: relative;
  overflow: hidden;

}

#video-name {
  line-height: 1rem;
  max-height: 4rem;
  display: block;
  text-align: left;
}

.video-post-details {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

#video-owner {
  font-size: 12px;
  color: #AAAAAA;
  display: block;
  text-align: left;
  line-height: 1.5rem;

}

#video-description {
  font-size: 12px;
  color: #AAAAAA;
  display: block;
  text-align: left;
  line-height: 1.5rem;
  overflow: hidden;
  max-height: 20px;
  margin-top: 15px;
}

#videoViews {
  font-size: 12px;
  padding-right: 10px;
  display: block;
  color: #AAAAAA;

}

#videoDate {
  font-size: 12px;
  display: block;
  color: #AAAAAA;

}

</style>