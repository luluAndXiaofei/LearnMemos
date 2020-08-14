export default {
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/Home"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/Login"),
    },
    {
      path: "/reg",
      name: "Reg",
      component: () => import("@/pages/Reg"),
    },
    {
      path: "/channel/:channelId",
      name: "Channel",
      component: () => import("@/pages/ChannelNews"),
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/pages/NotFound"),
    },
    {
      path: "/personal",
      name: "Personal",
      component: () => import("@/pages/Personal"),
    },
  ],
};
