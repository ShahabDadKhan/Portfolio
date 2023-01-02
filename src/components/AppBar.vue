<template>
  <v-container id="app-bar">
    <v-app-bar
      height="100px"
      style="box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
      app
      :hide-on-scroll="!mobileNav"
      color="black"
    >
      <v-row>
        <v-col offset-sm="1" md="1" sm="2" cols="2">
          <a @click="goToHome" href="/" data-cursor-hover v-smooth-scroll>
            <div style="width:70px; height:70px" class="links">
              <v-img
                max-height="100%"
                max-width="100%"
                src="../assets/Img/SDK-blackSmall.jpg"
              ></v-img>
            </div>
          </a>
        </v-col>

        <v-col
          v-show="!mobile"
          class="f2"
          offset-sm="1"
          offset-md="3"
          offset-lg="5"
          lg="5"
          md="6"
          sm="8"
          cols="12"
        >
          <a href="#about-me" data-cursor-hover v-smooth-scroll class="links"> ABOUT ME</a>
          <a href="#my-portfolio" data-cursor-hover v-smooth-scroll class="links"> PORTFOLIO</a>
          <a href="shahabdadkhan.pdf" download data-cursor-hover class="links"> RESUME</a>
          <a href="#" data-cursor-hover v-smooth-scroll class="links"> SIGN IN</a>
        </v-col>
        <v-btn
          class="menu-icon"
          color="black ml-4"
          small
          fab
          @click="toggleMobileNav"
          v-show="mobile"
        >
          <v-icon class="white--text"
            >mdi-{{
              mobileNav === false ? "format-list-bulleted" : "close"
            }}</v-icon
          >
        </v-btn>
      </v-row>
    </v-app-bar>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <a
          href="#about-me"
          v-smooth-scroll
          @click="toggleMobileNav"
          class="links links-mobile"
        >
          ABOUT ME</a
        >
        <a
          href="#my-portfolio"
          v-smooth-scroll
          @click="toggleMobileNav"
          class="links links-mobile"
        >
          PORTFOLIO</a
        >
        <a
          href="shahabdadkhan.pdf" 
          download 
          v-smooth-scroll
          @click="toggleMobileNav"
          class="links links-mobile"
        >
          RESUME</a
        >
        <a
          href="#"
          v-smooth-scroll
          @click="toggleMobileNav"
          class="links links-mobile"
        >
          SIGN IN</a
        >
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
  beforeMount() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    goToHome(){
      if(this.$route.path != '/')
      this.$router.push('/');
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 778) {
        return (this.mobile = true);
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      if(this.mobileNav) {
        const body = document.body;
        body.style.position = "fixed";
      } else {
        const body = document.body;
        body.style.position = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.7s ease;
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
  position: absolute;
  top: 20px;
  right: 30px;
  height: 25px;
  width: auto;
}

.mobile-nav {
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 90%;
  background-color: black;
  top: 12%;
  left: 0;
  z-index: 10;
}

.links {
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  margin: 0px 20px;
  color: white;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    cursor: none;
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
  @media (max-width: 768px) {
    margin-top: 15px !important;
    margin-bottom: 0px !important;
  }
}
.f2 {
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 500;
    margin: 0px 0px 25px 15px !important;
    padding: 0px;
  }
}
.f3 {
  font-size: 12px;
  font-weight: 400;
  @media (max-width: 768px) {
    margin-top: 15px !important;
    margin-bottom: 0px !important;
  }
}
</style>
