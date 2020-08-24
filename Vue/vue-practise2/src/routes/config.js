
export default {
    mode: "history",
    routes: [
        {
            path:"/",
            component: () => import("@/pages/Home"),
            name: "home",
        },
        {
            path:"/login",
            component: () => import("@/pages/Login"),
            name: "login",
        },
        {
            path:"/reg",
            component: () => import("@/pages/Reg"),
            name:"reg",
        },
        {
            path:"/channel/:channelId",
            component: () => import("@/pages/ChannelNews"),
            name:"channel",
        },
        {
            path:"*",
            component: () => import("@/pages/NotFound"),
            name: "notFound"
        },
    ]
}