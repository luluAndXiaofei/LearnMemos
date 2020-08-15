import VueRouter from "vue-router";
import Vue from "vue";
import config from "./config";
import store from "../store";

Vue.use(VueRouter);

var router = new VueRouter(config);
router.beforeEach(function(to, from, next) {
  if (to.meta.auth) {
    if (store.state.loginUser.isLoading) {
      next({ name: "Auth", query: { returnurl: to.fullPath } });
    } else if (store.state.loginUser.data) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;