import VueRouter from "vue-router";
import Vue from "vue";
import config from "./config";

Vue.use(VueRouter);

var router = new VueRouter(config);

export default router;