<template>
  <div class="header-container">
    <button id="favorite-button" @click="navigateToFavoritePage"> Favorites</button>
    <span>Favorite Count : {{ favoriteCount }}</span>

  </div>
</template>

<script>
import {mapGetters} from "vuex"


export default {
  name: "Header",
  methods: {
    navigateToFavoritePage() {
      this.$router.push("/favorites/bootcamp")
    },
  },
  computed:{
    ...mapGetters({
      favoriteCount: "getFavoriteCount"
    })
  },
}
</script>

<style scoped>
.header-container {
  display: flex;
  position: relative;
  background-color: white;
  width: 100%;
  height: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: black;
  border-style: dotted;
}

#favorite-button {
  position: absolute;
  right: 10px;
}
</style>