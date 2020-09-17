import VueRouter from "vue-router";
import Main from "../pages/Main";
import Blog from "../pages/Blog";
import NewBlog from "../pages/NewBlog";


var routes = [
    {
        path: "/",
        name: "main",
        component: Main,
    },
    {
        path: "/blog/:blogId",
        name: "blog",
        component: Blog,
    },
    {
        path: "/newblog/",
        name: "newBlog",
        component: NewBlog,
    },
]

var router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;