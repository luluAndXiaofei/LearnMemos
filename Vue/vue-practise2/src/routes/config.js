
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
            path:"/personal",
            component: () => import("@/pages/Personal"),
            name:"personal",
            meta: {
                requireAuth: true
            }
        },
        {
            path:"/auth",
            component: () => import("@/pages/Auth"),
            name:"auth",
        },
        {
            path:"/protected",
            component: () => import("@/pages/Protected"),
            name:"protected",
            meta: {
                requireAuth: true
            }
        },
        {
            path:"*",
            component: () => import("@/pages/NotFound"),
            name: "notFound"
        },
    ]
}