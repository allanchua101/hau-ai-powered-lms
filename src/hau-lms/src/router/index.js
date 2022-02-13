import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
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
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "courses" */ "../views/Courses.vue"),
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
});

export default router;
