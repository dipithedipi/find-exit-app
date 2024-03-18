import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
  getters: {
    isLoggedIn(state) {
        return !!state.user
    },

    user(state) {
      return state.user;
    },
  },
});