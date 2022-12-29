<template>
  <v-app>
    <app-bar v-if="isShow"/>
      <v-main>
        <router-view />
      </v-main>
    <the-footer v-if="isShow"/>
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
  mounted() {
    // start it, on mounted, or wherever you want
    // this.$refs.cursor.start();
  },

  "$route"() {  
      if (this.$route.path == '/') {
          this.showMore = true;
      } else {
        this.showMore = false
      }
    },

  // watch: {
  //   $route() {
  //     console.log("to from", this.$route);
  //     // this.show = false
  //     if(this.$route.path == '/') {
  //       this.isShow = true
  //       console.log("true", this.isShow);
  //     } else {
  //       this.isShow = false
  //       console.log("false", this.isShow);
  //     }
  //   }
  // },
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
