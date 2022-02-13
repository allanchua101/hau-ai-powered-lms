import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: "John",
    lastName: "Doe",
    courses: [],
    activeCourse: "",
  },
  mutations: {
    setActiveCource(state, payload) {
      state.activeCourse = payload.activeCourse;
    },
  },
  actions: {},
  modules: {},
  getters: {
    fullName: (state) => {
      return state.firstName + " " + state.lastName;
    },
  },
});
