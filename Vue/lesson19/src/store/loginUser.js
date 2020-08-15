import { login, logout, whoAmI } from "../services/userService";

export default {
  namespaced: true,
  state: {
    data: null,
    isLoading: false,
  },

  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },

    setData(state, payload) {
      state.data = payload;
    },
  },

  actions: {
    async login(context, payload) {
      var result = false;
      context.commit("setIsLoading", true);
      var res = await login(payload);
      if (res.code === 0) {
        context.commit("setData", res.data);
        result = true;
      }
      context.commit("setIsLoading", false);
      return result;
    },

    async whoAmI(context) {
      context.commit("setIsLoading", true);
      var res = await whoAmI();
      context.commit("setData", res);
      context.commit("setIsLoading", false);
    },

    logout(context) {
      logout();
      context.commit("setData", null);
    },
  },
};
