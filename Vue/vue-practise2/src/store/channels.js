import { getNewsChannels } from "../service/newsSevice";

export default {
  namespaced: true,
  state: {
    data: [],
    isLoading: false,
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },

    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async fetchDatas(context) {
      context.commit("setIsLoading", true);
      var data = await getNewsChannels();
      context.commit("setData", data);
      context.commit("setIsLoading", false);
    },
  },
};
