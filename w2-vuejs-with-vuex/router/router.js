import VueRouter from "vue-router";
import Vue from "vue";
import HomePage from "../views/HomePage"
import FavoritePage from "../views/FavoritePage";
import WatchPage from "../views/WatchPage";

Vue.use(VueRouter)

const router = new VueRouter({
    mode:"history",
    routes:[
        {path: "/", component: HomePage},
        {path: "/favorites/:userid", component: FavoritePage},
        {path: "/watch", component: WatchPage}

    ]
});

export default router;