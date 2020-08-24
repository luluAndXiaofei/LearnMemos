import vuex from "vuex";
import channels from "./channels";
import loginUser from "./loginUser";
import Vue from "vue";

Vue.use(vuex);

var store = new vuex.Store({
    modules: {
        channels,
        loginUser,
    }
});

export default store;