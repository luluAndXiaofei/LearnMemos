export default {
    namespaced: true,
    state : {
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
        
    }
}