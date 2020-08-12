import vuex from "vuex";
import Vue from "vue";
import channels from "./channels";
import loginUser from "./loginUser";

Vue.use(vuex);

var store = new vuex.Store({
  // 配置
  modules: {
    channels,
    loginUser,
  },
});

export default store;
