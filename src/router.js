import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import User from "./components/BoardUser.vue"
import Profile from "./components/Profile.vue"
import admin from "./components/BoardAdmin.vue"

// // lazy-loaded
// const Profile = () => import("./components/Profile.vue")
// const BoardAdmin = () => import("./components/BoardAdmin.vue")
// const BoardModerator = () => import("./components/BoardModerator.vue")
// const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
    {
        path: "/",
        component: Login,
    },
    {
        path: "/login",
        component: Login,

    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/admin",
        name: "admin",
        component: admin,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: User,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

