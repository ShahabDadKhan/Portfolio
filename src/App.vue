<template>
  <v-app>
    <v-main>
      <app-bar />
      <my-intro />
      <about-me />
      <my-portfolio />
      <!-- <contact-me /> -->
      <!-- <router-view /> -->
      <the-footer />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import TheFooter from "./components/TheFooter.vue";
import AboutMe from "./views/AboutMe.vue";
// import ContactMe from "./views/ContactMe.vue";
import MyIntro from "./views/MyIntro.vue";
import MyPortfolio from "./views/MyPortfolio.vue";
export default {
  components: {
    AppBar,
    TheFooter,
    MyIntro,
    AboutMe,
    MyPortfolio,
    // ContactMe,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
main {
  // background-color: $backgroundColor;
  font-family: "Montserrat", "Poppins", "Quicksand", sans-serif;
  background-color: black;
  color: #fff;
  width: 100%;

  // @media (max-width: 600px) {
  //   background-color: transparent;
  //   background-size: cover;
  //   background-image: url("./assets/Img/SDK-black.jpg");
  // }
}
</style>
