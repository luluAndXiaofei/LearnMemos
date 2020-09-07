import { login, logout, whoami } from "../service/userService";

export default {
  namespaced: true,
  state: {
    data: null,
    isLoading: false,
  },

  mutations: {
    setData(state, payload) {
      state.data = payload;
    },

    setIdLoading(state, payload) {
      state.isLoading = payload;
    },
  },

  actions: {
    async login(context, userInfo) {
      context.commit("setIdLoading", true);
      // async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。
      var res = await login(userInfo);
      var success = false;
      if (res.code == 0) {
        context.commit("setData", res.data);
        success = true;
      }
      context.commit("setIdLoading", false);
      return success;
    },

    logout(context) {
      logout();
      context.commit("setData", null);
    },

    async whoami(context) {
      context.commit("setIdLoading", true);
      var data = await whoami();
      if (data) {
        context.commit("setData", data);
      }
      context.commit("setIdLoading", false);
    },
  },
};
