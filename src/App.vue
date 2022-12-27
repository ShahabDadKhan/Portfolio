<template>
  <v-app>
    <v-main>
      <app-bar />
      <!-- <my-intro />
      <about-me />
      <my-portfolio /> -->
      <!-- <contact-me /> -->
       <router-view />
      <the-footer />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import TheFooter from "./components/TheFooter.vue";
// import AboutMe from "./views/AboutMe.vue";
// // import ContactMe from "./views/ContactMe.vue";
// import MyIntro from "./views/MyIntro.vue";
// import MyPortfolio from "./views/MyPortfolio.vue";
export default {
  components: {
    AppBar,
    TheFooter,
    // MyIntro,
    // AboutMe,
    // MyPortfolio,
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

  // &:before {
  //   content: ' ';
  //   display: block;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   opacity: 0.2;
  //   background-image: url('./assets/Img/Background/desktop.jpg');

  //   // background-image: url('https://assets.digitalocean.com/labs/images/community_bg.png');
  //   background-repeat: no-repeat;
  //   background-position: 50% 0;
  //   background-size: cover;
  //   background-attachment: fixed;
  // }

  // @media (max-width: 600px) {
  //   background-color: transparent;
  //   background-size: cover;
  //   background-image: url("./assets/Img/SDK-black.jpg");
  // }
}
</style>
