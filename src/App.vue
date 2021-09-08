<template>
  <v-app>
    <v-main>
      <app-bar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
export default {
  components: { AppBar },
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
}
</style>
