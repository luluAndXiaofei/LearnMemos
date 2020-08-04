export default {
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Home"),
    },
    {
      path: "/login",
      component: () => import("@/pages/Login"),
    },
    {
      path: "/reg",
      component: () => import("@/pages/Reg"),
    },
    {
      path: "/channel/:channelId",
      component: () => import("@/pages/ChannelNews"),
    },
    {
      path: "*",
      component: () => import("@/pages/NotFound"),
    },
  ],
};
