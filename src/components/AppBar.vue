<template>
  <v-container fluid>
    <v-app-bar
      height="100px"
      style="box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
      app
      hide-on-scroll
      color="black"
    >
      <v-row>
        <v-col class="f1" offset-sm="1" md="1" sm="2" cols="10">
          <router-link to="/" class="links f1">
            Portfolio
          </router-link>
        </v-col>

        <v-col
          v-show="!mobile"
          align-self="start"
          class="f2"
          offset-sm="1"
          offset-md="3"
          offset-lg="5"
          lg="5"
          md="6"
          sm="8"
          cols="12"
        >
          <router-link to="/" class="links">
            ABOUT ME
          </router-link>
          <!-- <router-link to="/blogs" class="links">
            PORTFOLIO
          </router-link> -->
          <router-link to="/creat-post" class="links">
            PORTFOLIO
          </router-link>
          <router-link to="/creat-post" class="links">
            CONTACT
          </router-link>
          <router-link to="/login" class="links">
            SIGN IN
          </router-link>
        </v-col>
        <v-btn
          class="menu-icon"
          color="black ml-4"
          small
          fab
          @click="toggleMobileNav"
          v-show="mobile"
        >
          <v-icon class="white--text">mdi-close</v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
    <!-- <div class="menu-icon"> -->
    <!-- <div class="menu-icon"> -->
    <!-- <v-icon class="white">mdi-close</v-icon> -->
    <!-- </div> -->
    <!-- <v-btn> -->
    <!-- </v-btn> -->
    <!-- </div> -->
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="links links-mobile" to="#">ABOUT ME</router-link>
        <router-link class="links links-mobile" to="#">CONTACT</router-link>
        <router-link class="links links-mobile" to="#">PORTFOLIO</router-link>
        <router-link class="links links-mobile" to="#">SIGN IN</router-link>
      </ul>
    </transition>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen;
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 778) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    // darkMode() {
    //   this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    //   console.log("Hello");
    // },
  },
};
</script>

<style lang="scss" scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter {
  transform: translateX(-550px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(-550px);
}

.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}

.mobile-nav {
  padding: 20px;
  width: 100%;
  // max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 80%;
  background-color: black;
  top: 12%;
  left: 0;
  z-index: 10;
}

// .link {
//   font-size: 16px;
//   font-weight: 500;
//   cursor: pointer;
//   padding: 20px 0;
//   text-decoration: none;
//   margin: 0px 20px !important;
//   // color: map-get($colors, "text");
//   color: black;
//   border-bottom: 1px solid transparent;
//   transition: all 0.2s ease-in;

//   &:hover,
//   &:focus {
//     border-bottom-color: $yellow;
//     color: $yellow;
//   }
// }

.links {
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  // padding: 1rem 2rem;
  text-decoration: none;
  margin: 0px 20px;
  // color: map-get($colors, "text");
  color: white;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    border-bottom-color: $yellow;
    color: $yellow;
  }
  @media (max-width: 360px) {
    padding: 0px 5px !important;
  }

  &-mobile {
    color: white;
    margin: 20px 0;
  }
}

.f1 {
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 600px) {
    margin-top: 15px !important;
    margin-bottom: 0px !important;
  }
}
.f2 {
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 500;
    margin: 0px 0px 25px 15px !important;
    padding: 0px;
  }
}
.f3 {
  font-size: 12px;
  font-weight: 400;
  @media (max-width: 600px) {
    margin-top: 15px !important;
    margin-bottom: 0px !important;
  }
}
</style>
