import VueRouter from "vue-router";
import Main from "../pages/Main";
import Blog from "../pages/Blog";
import NewBlog from "../pages/NewBlog";
import Complete from "../pages/Complete";


var routes = [
    {
        path: "/main",
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
    {
        path: "/complete/",
        name: "complete",
        component: Complete,
    },
]

var router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;