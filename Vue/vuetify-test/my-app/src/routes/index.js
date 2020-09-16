import VueRouter from "vue-router";
import Home from "../pages/Home";
import Blog from "../components/Blog";

var routes = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/blog/:blogId",
        component: Blog,
    },
]

var router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;