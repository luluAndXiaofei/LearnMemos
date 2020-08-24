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
    async fetchData(context) {
      context.commit("setIsLoading", true);
      var channels = await getNewsChannels();
      context.commit("setData", channels);
      context.commit("setIsLoading", false);
    },
  },
};
