import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import BriefAboutMyself from "../pages/BriefAboutMyself.vue";
import MyProjects from "../pages/MyProjects.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      footer: true
    },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    meta: {
      title: "Sign In",
      footer: false
    },
  },
  {
    path:'/about-shahab',
    name: 'AboutShahab',
    component: BriefAboutMyself,
    meta: {
      title: 'About Shahab',
      footer: false
    }
  },
  {
    path:'/my-projects',
    name: 'MyProjects',
    component: MyProjects,
    meta: {
      title: 'Projects',
      footer: false
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(){
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
   }
  });

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Portfolio `;
 
  next();
});

export default router;
