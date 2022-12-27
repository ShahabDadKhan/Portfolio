import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ContactMe from "../views/ContactMe.vue";
import AboutMe from "../views/AboutMe.vue";
import MyIntro from "../views/MyIntro.vue";
import MyPortfolio from "../views/MyPortfolio.vue";
import SignIn from "../views/SignIn.vue";
import BriefAboutMyself from "../pages/BriefAboutMyself.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/contact-me",
    name: "ContactMe",
    component: ContactMe,
    meta: {
      title: "Contact Me",
    },
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: AboutMe,
    meta: {
      title: "About Me",
    },
  },
  {
    path: "/my-intro",
    name: "MyIntro",
    component: MyIntro,
    meta: {
      title: "My Intro",
    },
  },
  {
    path: "/my-portfolio",
    name: "MyPortfolio",
    component: MyPortfolio,
    meta: {
      title: "",
    },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    meta: {
      title: "Sign In",
    },
  },
  {
    path:'/about-shahab',
    name: 'AboutShahab',
    component: BriefAboutMyself,
    meta: {
      title: 'About Shahab'
    }
  }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Portfolio `;
  next();
});

export default router;
