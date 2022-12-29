<template>
    <v-container id="my-portfolio" class="my-16">
      <v-row class="mb-16">
        <div class="back-icon">
            <v-icon @click="$router.go(-1)">mdi-arrow-top-right-thin</v-icon>
        </div>
        <v-col class="text-center">
          <h1 class="my-2">PORTFOLIO</h1>
          <h3 class="mb-10">
            Check <span class="span-2">what</span> I've been doing
            <span class="span-2">lately</span>
          </h3>
        </v-col>
      </v-row>
      <v-row
        :post="post"
        v-for="(post, index) in projects"
        :key="index"
        class="my-10"
      >
        <v-col
          class="d-flex justify-center align-center blog-content"
          :order-sm="post.number % 2 == 0 ? 1 : 2"
          sm="5"
        >
          <div class="content">
            <h2>{{ post.name }}</h2>
            <p>{{ post.info }}</p>
            <div>
              <v-btn class="yellow  mr-3" :href="post.linkToApp" target="_blank" rounded>
                <v-icon class="mr-2">mdi-xml</v-icon>
                Visit
              </v-btn>
              <v-btn :href="post.linkToCode" target="_blank" rounded>
                <v-icon class="mr-2">mdi-github</v-icon>
                Source
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col
          class="pa-0 blog-image d-flex justify-center align-center"
          :order-sm="post.number % 2 == 0 ? 2 : 1"
          sm="7"
          cols="12"
        >
          <!-- <v-img
            height="100%"
            width="100%"
            :src="require(`../assets/Img/Project/${post.photo}.png`)"
            alt=""
          /> -->
          <v-hover v-slot="{ hover }">
            <v-card
              class="ma-5 d-flex align-center"
              style="cursor:pointer"
              width="100%"
              height="auto"
            >
              <v-img
                width="70%"
                :aspect-ratio="16 / 9"
                :src="require(`../assets/Img/Project/${post.photo}.png`)"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex flex-column transition-fast-in-fast-out yellow text-center v-card--reveal"
                    style="height: 100%;"
                  >
                    <p class="pa-3">{{ post.details }}</p>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            name: "Portfolio",
            number: "1",
            photo: "portfolioApp",
            linkToApp: "https://portfolio-7956c.web.app/#/",
            linkToCode: "https://github.com/ShahabDadKhan/Portfolio",
            info:
              "This very website you're now watching. I wanted something fast and good for my portfolio.",
            details:
              "This very website you're now watching. It reads data from markdown files, so it's super easy for me to keep adding Portfolio items as I keep developing stuff. Here you can find my works which i did ambitiously during Night & Day.",
          },
          {
            name: "Movie App",
            number: "2",
            photo: "movieApp",
            linkToApp: "https://movie-app-5e490.web.app/",
            linkToCode: "https://github.com/ShahabDadKhan/movie-app",
            info:
              "A Movie Library made with VueJs. It fetches information from an API, and displays it in a nice way.",
            details:
              "You get recommended movies based on the one you're watching, and you can also click on an Actor, and check information about him/her as well as movies that same actor enters. it uses Vue Router, and fetches the movie based on the URL, so you can easily reload the page and the data will be still fetched. It also uses lazy loading on images, has error handling, and uses Vuex to manage state. One of the projects I'm most proud of.",
          },
          {
            name: "Bagels App",
            number: "3",
            photo: "bagelsApp",
            linkToApp: "https://web-app-903e0.web.app/",
            linkToCode: "https://github.com/ShahabDadKhan/web-app",
            info:
              "A Bagels App made with VueJs. It use Vuex & Firebase to take information, and place an order for the tasty Bagel.",
            details:
              "Here you can add items you want to into the menu & place an order. It also have Admin page where i have used navigational guard to prevent everyone using it. In Admin you can add new item, update or edit the existing item. We also have the customer care section where user can find answers of FAQ.",
          },
          {
            name: "Blog App",
            number: "4",
            photo: "blogApp",
            linkToApp: "https://blog-web-c957f.web.app/",
            linkToCode: "https://github.com/ShahabDadKhan/blog-website",
            info:
              "A Blog App made with VueJs. It use Vuex & Firebase to take information, and displays blogs.",
            details:
              "In this app you can read the blogs which Admin posted. It also have Login & Registration page where user can login or register if he/she is new to the page. Here also i have used navigational guard to stop access of everyone to create Blog post",
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .v-card {
    border: 1px solid $yellow;
  }

  .back-icon {
    display: flex;

    .v-icon {
        font-size: 50px;
        color: white;
        transform: rotate(-135deg);

        &:hover {
            cursor: pointer;
        }
    }
  }
  
  .link {
    width: 140px;
    font-weight: 500;
    // background-color: red;
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    border-bottom-right-radius: 50px;
    transition: 0.2s ease-in all;
    padding: 0px 4px 4px 0px;
    @media (max-width: 1400px) {
    }
    &:hover {
      border-bottom-color: #303030;
      // animation: linkBorder 2s 1;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
    text-align: center;
    width: 70%;
    @media (max-width: 600px) {
      // text-align: center;
      width: 100% !important;
      font-size: 12px;
      font-weight: 300;
      line-height: 1;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    // padding: 0px 0px 0px 50px;
    // text-align: left;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
      padding: 60px 10px;
      text-align: center;
      width: 100% !important;
    }
  
    // align-items: ;
    // background-color: white;
  }
  .blog-content {
    @media (max-width: 1400px) {
      order: 1;
    }
  }
  .blog-image {
    @media (max-width: 1400px) {
      order: 2;
    }
  }
  
  .col {
    padding: 0px;
  }
  
  h1 {
    font-family: Quicksand;
    font-size: 42px;
    font-weight: 600;
    color: $yellow;
  }
  
  h2 {
    font-size: 32px;
    text-transform: uppercase;
    font-family: Poppins;
    background-color: $yellow;
    color: black;
    display: inline-block;
    transform: rotate(-2deg);
    font-weight: 400;
    margin-bottom: 15px;
  }
  
  h3 {
    font-family: Poppins;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    // color: $yellow;
  }
  
  .span-2 {
    font-weight: 600;
  }
  
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 1;
    position: absolute;
    width: 100%;
  }
  </style>
  