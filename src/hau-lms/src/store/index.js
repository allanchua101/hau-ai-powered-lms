import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      firstName: "John",
      lastName: "Doe",
    },
    courses: [],
  },
  mutations: {},
  actions: {},
  getters: {
    fullName: function () {
      return this.user.firstName + " " + this.user.lastName;
    },
  },
});
