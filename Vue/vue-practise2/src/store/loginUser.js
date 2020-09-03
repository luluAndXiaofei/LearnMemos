import { login } from "../service/userService";

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
        var res = await login(userInfo)
          var success = false;
          if (res.code == 0) {
              context.commit("setData", res.data);
              success = true;
          }

          return success;
      },
  },
};
