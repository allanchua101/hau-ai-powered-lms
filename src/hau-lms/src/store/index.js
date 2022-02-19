import Vue from "vue";
import Vuex from "vuex";
import { courses } from "./courses.json";
import { getResponse } from "../chatbot/english-bot-v2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: "John",
    lastName: "Doe",
    courses: [...courses],
    activeCourseID: null,
    activeVideoID: 1,
    isChatbotOpened: false,
    isBotResponding: false,
    messages: [],
    searchText: "",
    isSearchVisible: false,
  },
  mutations: {
    setActiveCourse(state, courseID) {
      state.activeCourseID = courseID;
      state.activeVideoID = 1;
    },
    setActiveVideo(state, videoID) {
      state.activeVideoID = videoID;
    },
    setChatbotState(state, isOpened) {
      state.isChatbotOpened = isOpened;
    },
    addMessage(state, message) {
      let newMessages = [...state.messages];

      newMessages.push({
        id: newMessages.length + 1,
        text: message,
        isUser: true,
        date: new Date().valueOf(),
      });
      state.messages = newMessages;
      state.isBotResponding = true;

      setTimeout(() => {
        let response = getResponse(message);

        newMessages.push({
          id: newMessages.length + 1,
          text: response,
          isUser: false,
          date: new Date().valueOf(),
        });
        state.isBotResponding = false;
      }, 750);
    },
    clearMessages(state) {
      state.messages = [];
    },
    //Search
    updateSearchText(state, searchText) {
      state.searchText = searchText;
    },
    setSearchVisibility(state, isOpened) {
      state.isSearchVisible = isOpened;
    },
  },
  actions: {
    sendChat({ commit }, message) {
      commit("addMessage", message);
    },
    clearChat({ commit }) {
      commit("clearMessages");
    },
    openChatbot({ commit }) {
      commit("setChatbotState", true);
    },
    closeChatbot({ commit }) {
      commit("setChatbotState", false);
    },
    setActiveCourseID({ commit }, id) {
      commit("setActiveCourse", id);
    },
    setActiveVideoID({ commit }, id) {
      commit("setActiveVideo", id);
    },
    closeSearch({ commit }) {
      commit("setSearchVisibility", false);
    },
    openSearch({ commit }) {
      commit("setSearchVisibility", true);
    },
    setSearchText({ commit }, text) {
      commit("updateSearchText", text);
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
