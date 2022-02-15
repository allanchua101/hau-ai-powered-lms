import Vue from "vue";
import VueRouter from "vue-router";
import Courses from "../views/Courses.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Courses,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import(/* webpackChunkName: "team" */ "../views/Team.vue"),
  },
  {
    path: "/course/view/",
    name: "View Course",
    component: () =>
      import(
        /* webpackChunkName: "viewCourse" */ "../views/ViewCoursePage.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

export default router;
