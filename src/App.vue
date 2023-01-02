<template>
  <v-app>
    <app-bar/>
      <v-main>
        <router-view />
      </v-main>
    <the-footer v-show="this.$route.meta.footer"/>
    <cursor-fx color="white" color-hover="#ffc800" allow-on-mobile/>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: {
    AppBar,
    TheFooter,
  },
  data: () => ({
    isShow:true
  }),

  "$route"() {  
      if (this.$route.path == '/') {
          this.showMore = true;
      } else {
        this.showMore = false
      }
    },
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", "Poppins", "Quicksand", sans-serif;
  background-color: black;
  color: #fff;
  width: 100%;
}

a {
  cursor: none !important;
}
</style>
