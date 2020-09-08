import Vue from "vue";
import VueRouter from "vue-router";
import Config from "./config";
import store from "../store";

Vue.use(VueRouter);

var router = new VueRouter(Config);
router.beforeEach(function(to, from, next) {
  console.log("to:", to);
  console.log("from:", from);
  console.log("next:", next);

  if (to.meta.requireAuth) {
    if (store.state.loginUser.isLoading) {
      next({ name: "auth", query: { returnurl: to.fullPath } });
    } else if (store.state.loginUser.data) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});
export default router;
