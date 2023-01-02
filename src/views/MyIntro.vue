<template>
  <v-container id="my-intro">
    <v-row align="center" justify="center">
      <v-col
        order-sm="1"
        order="2"
        align-self="center"
        offset-md=""
        offset-sm=""
        cols="12"
        sm="7"
        md="4"
      >
        <p class="home-text-1">
          Hello ✌🏼, <br />
          I'm <span> Shahab </span>
        </p>
        <div class="home-text-2 d-flex">
          A
          <ul class="dynamic-text pl-1 mr-1">
            <li>
              <span>Self-Taught</span>
            </li>
            <li>
              <span>Committed</span>
            </li>
            <li>
              <span>Passionate</span>
            </li>
          </ul>
          Software developer
        </div>
      </v-col>
      <v-col
        class="text-center"
        order-sm="2"
        order="1"
        cols="10"
        offset-md="2"
        sm="4"
        md="4"
      >
        <v-avatar>
          <v-img src="../assets/Img/photo2.jpg"></v-img>
        </v-avatar>
      </v-col>
    </v-row>
    <v-row justify="center">
      <a id="goToTop" @click="scrollIntoDiv" data-cursor-hover class="scrollToTop">
        <v-icon x-large class="white--text">mdi-transfer-up</v-icon></a>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      showGoToTop: false,
    }
  },
  methods:{
    scrollIntoDiv(){
      if(this.showGoToTop){
        let elem = document.getElementById("app-bar");
        elem.scrollIntoView({behavior: 'smooth'});
      } else {
        let elem = document.getElementById("about-me");
        elem.scrollIntoView({behavior: 'smooth'});
      }
    },
    attachScrollListeners() {
        window.addEventListener("scroll", this.scrollListener.bind(this));
    },
    detachScrollListener() {
        window.removeEventListener("scroll", this.scrollListener.bind(this));
    },
    scrollListener() {
      let el = this.$el;
      if (!el) {
        this.detachScrollListener();
      }

      let scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;
      if (scrollTop > 500) {
        // added this to hide go to top on mobile and tablet when keypad comes
        if (
          window.innerWidth <= 800 &&
          window.innerHeight <= 600
        ) {
          this.showGoToTop = false;
        }
        this.showGoToTop = true;
      } else {
        this.showGoToTop = false;
      }
    },
    rotateGoToTop(value){
      if(value) {
        document.getElementById("goToTop").style.transitionDuration = "0.3s";
        document.getElementById('goToTop').style.transform = "rotate(0deg)";
      } else {
        document.getElementById("goToTop").style.transitionDuration = "0.3s";
        document.getElementById('goToTop').style.transform = "rotate(-180deg)";
      }
    }
  },
  watch:{
    showGoToTop: function(value){
      this.rotateGoToTop(value)
    }
  },
  mounted(){
    this.rotateGoToTop(this.showGoToTop)
    this.attachScrollListeners();
  },
  beforeUnmount() {
      window.removeEventListener("online", this.checkOffline);
      window.removeEventListener("offline", this.checkOffline);
  },
  created() {
      window.addEventListener("resize", this.myEventHandler);
    },
  destroyed() {
    this.detachScrollListener();
      window.removeEventListener("resize", this.myEventHandler);
    }
};
</script>

<style lang="scss" scoped>
a {
  cursor: none;
}

.links {

  .v-icon {    

    &:hover {
      color: $yellow !important;
    }
  }
}
.scrollToTop {
  text-decoration: none;
  position: fixed;
  bottom: 50px;
  right: 30px;

  
  .v-icon {    
    &:hover {
      color: $yellow !important;
    }
  }
}

.v-avatar {
  width: 160px !important;
  height: 160px !important;

  @media (max-width: 768px) {
    width: 100px !important;
    height: 100px !important;
  }
}

.container {
  height: 84vh;
}

.row {
  height: 95%;
}

.home-text-1 {
  font-size: 62px;
  font-weight: 200;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 42px;
  }

  @media (max-width: 400px) {
    font-size: 32px;
  }
}

.home-text-2 {
  width: 305px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 40px 0px;
  }
}

span {
  color: $yellow;
  font-weight: 500;
}

ul {
  overflow: hidden;
  width: 32%;
  height: 20px;
  @media (max-width: 330px) {
    width: 60%;
  }
}

ul li {
  position: relative;
  top: 0;
  animation: slide 4s steps(3) infinite;
}

@keyframes slide {
  100% {
    top: -72px;
  }
}

ul li span {
  position: relative;
}

ul li span::after {
  content: "";
  position: absolute;
  left: 100%;
  top: 1px;
  height: 100%;
  width: 100%;
  background: black;
}

ul li {
  list-style: none;
}
</style>
