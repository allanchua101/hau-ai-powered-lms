import Vue from "vue";
import Vuex from "vuex";
import { courses } from "./courses.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: "John",
    lastName: "Doe",
    courses: [...courses],
    activeCourseID: null,
    activeVideoID: 1,
  },
  mutations: {
    setActiveCourse(state, courseID) {
      state.activeCourseID = courseID;
      state.activeVideoID = 1;
    },
    setActiveVideo(state, videoID) {
      state.activeVideoID = videoID;
    },
  },
  actions: {
    setActiveCourseID({ commit }, id) {
      commit("setActiveCourse", id);
    },
    setActiveVideoID({ commit }, id) {
      commit("setActiveVideo", id);
    },
    async playNextVideo({ commit, state }) {
      let maxID = state.courses[state.activeCourseID - 1].videos.length;

      if (state.activeVideoID === maxID) {
        return;
      }

      commit("setActiveVideo", state.activeVideoID + 1);
    },
    async playPreviousVideo({ commit, state }) {
      if (state.activeVideoID === 1) {
        return;
      }

      commit("setActiveVideo", state.activeVideoID - 1);
    },
  },
  modules: {},
  getters: {
    fullName: (state) => {
      return state.firstName + " " + state.lastName;
    },
    courseList: (state) => {
      return state.courses;
    },
    activeCourse: (state) => {
      return state.courses.find((course) => course.id === state.activeCourseID);
    },
    activeVideo: (state) => {
      let course = state.courses.find(
        (course) => course.id === state.activeCourseID
      );

      if (!course) return null;

      return course.videos.find((video) => video.id === state.activeVideoID);
    },
  },
});
