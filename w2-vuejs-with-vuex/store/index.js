import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        favoriteVideos:[]
    },
    getters: {
        getFavoriteCount: state => {
            return state.favoriteVideos.length;
        },
        isFavorite:state =>  (videoId)=>{
            return state.favoriteVideos.some(video=> video.id === videoId)
        }
    },
    mutations: {
        addToFavorite(state, video) {
            state.favoriteVideos.push(video);
        },
        removeFromVideosById(state,videoId){
            state.favoriteVideos = state.favoriteVideos.filter(video => video.id !== videoId)
        }
    },
    actions: {
        favoriteStatusChanged({commit,getters}, video) {
            const favorite = getters.isFavorite(video.id)
            favorite ? commit("removeFromVideosById", video.id) : commit('addToFavorite', video)

        }
    }
});