<template>
  <v-app>
    <v-main>
      <app-bar v-if="isShow"/>
       <router-view />
      <the-footer v-if="isShow"/>
    </v-main>
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
  // mounted(){
  //   if(this.$route.path == '/') {
  //       this.isShow = true
  //       console.log("true", this.isShow);
  //     } else {
  //       this.isShow = false
  //       console.log("false", this.isShow);
  //     }
  // },

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
main {
  font-family: "Montserrat", "Poppins", "Quicksand", sans-serif;
  background-color: black;
  color: #fff;
  width: 100%;
}
</style>
