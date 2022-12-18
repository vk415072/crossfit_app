import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      login: false,
    },
    component: Home,
  },
  {
    path: "/exercises",
    name: "Exercise",
    meta: {
      login: false,
    },
    component: () =>
      import( "../views/Exercises.vue"),
  },
  {
    path: "/nutrition",
    name: "Nutrition",
    meta: {
      login: false,
    },
    component: () =>
      import("../views/Nutrition.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      login: false,
    },
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {
      login: false,
    },
    component: () =>
      import("../views/Contact.vue"),
  },
  {
    path: "/schedule",
    name: "Schedule",
    meta: {
      login: false,
    },
    component: () =>
      import("../views/Schedule.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    meta: {
      login: false,
    },
    component: () =>
      import("../views/Cart.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      login: false,
    },
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/membership",
    name: "Membership",
    meta: {
      login: false,
    },
    component: () =>
      import( "../views/Membership.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.afterEach((to, from) => {
  if (from.name != "Login") {
    store.commit("setLastVisitedPage", from.name);
  }
});
export default router;
