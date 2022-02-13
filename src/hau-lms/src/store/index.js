import Vue from "vue";
import Vuex from "vuex";
import { courses } from "./courses.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: "John",
    lastName: "Doe",
    courses: [...courses],
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
    courseList: (state) => {
      console.log(JSON.stringify(state.courses));
      return state.courses;
    },
  },
});
