import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import Recommendation from "../components/Recommendation.vue";
import choose from "../components/choose.vue"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/Login",
            name: "Login",
            component: Login
        },
        {
            path: "/Recommendation",
            name: "Recommendation",
            component: Recommendation
        },
        {
            path:"/",
            name: "Home",
            component: Home
        },
        {
            path:"/choose",
            name:"choose",
            component: choose
        }

    ]
});