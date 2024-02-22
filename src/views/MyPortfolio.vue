<template>
  <v-container id="my-portfolio" class="mb-16">
    <v-row>
      <v-col class="text-center">
        <h1 class="my-2">WORK EXPERIENCE</h1>
        <h3>
          <span class="span-2">GREENHONCHOS </span> SOLUTIONS PVT LTD <br />
          <span class="span-2">2021 - Present</span>
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="border">
        <div>
          <span class="span-2 logo-div"
            ><img src="../assets/Img//Project/Manish.png" alt="" /> Manish
            Malhotra</span
          >
          <p>
            Innovated and implemented an automated size selection feature on the
            Product Display Page (PDP), leveraging user data from past
            interactions to elevate personalized experiences and streamline the
            customer journey.
          </p>
          <v-btn
            class="yellow  mr-3"
            href="https://manishmalhotra.in/"
            target="_blank"
            rounded
          >
            <v-icon class="mr-2">mdi-xml</v-icon>
            Visit
          </v-btn>
        </div>

        <div>
          <span class="span-2 logo-div"
            ><img src="../assets/Img/Project/Ritu.png" alt="" /> Ritu
            Kumar</span
          >
          <p>
            Successfully integrated multicurrency functionality, enhancing its
            global usability and financial flexibility. A seamless and
            user-friendly interface that allows users to seamlessly switch
            between different currencies while maintaining a consistent and
            visually appealing design.
          </p>
          <v-btn
            class="yellow  mr-3"
            href="https://shop.testrblsite.in/"
            target="_blank"
            rounded
          >
            <v-icon class="mr-2">mdi-xml</v-icon>
            Visit
          </v-btn>
        </div>
      </v-col>
      <v-col>
        <div class="project-div">
          <span class="span-2 logo-div"
            ><img src="../assets/Img/Project/jioLogo.svg" alt="" /> JIOMART
            ASP</span
          >
          <p class="p-border">
            Designed and Developed various functionality such as checkout
            journey, order tracking, pre-order, and many more in the Jiomart
            Assisted Sales Platform. Developed cancel and return flow of orders
            from scratch, built refund transaction and other related pages.
          </p>
          <v-btn class="yellow  mr-3" href="#" rounded>
            <v-icon class="mr-2">mdi-xml</v-icon>
            Visit
          </v-btn>
        </div>
        <div class="project-div">
          <span class="span-2 logo-div"
            ><img src="../assets/Img/Project/bpl-logo.svg" alt="" /> BPL</span
          >
          <p class="p-border">
            Built Contact-Us form, FAQ page and configured the website from the
            platform to keep it dynamic. Expand Features, refine code, resolve
            bugs in the website and move the website to production.
          </p>
          <v-btn
            class="yellow  mr-3"
            href="https://bpllimited.com/"
            target="_blank"
            rounded
          >
            <v-icon class="mr-2">mdi-xml</v-icon>
            Visit
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div class="know-more">
      <span>
        <router-link data-cursor-hover to="/my-projects">
          Explore Personal Projects
          <v-icon>mdi-arrow-top-right-thin</v-icon>
        </router-link>
      </span>
    </div>
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  height: 100%;

  @media (max-width: 400px) {
    height: auto;
  }
}

.portfolio-row {
  @media (max-width: 400px) {
    margin: 0px 0px 40px 0px;
  }
}

img {
  width: 60px;
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 50px;
  }
}

.border {
  border-right: 1px solid white;
  margin-right: 20px;

  @media (max-width: 400px) {
    border-right: none;
    margin-right: 0px;
  }
}

.margin-b {
  margin-bottom: 64px;

  @media (max-width: 400px) {
    margin: 0px;
  }
}

.row {
  gap: 40px;
  flex: none;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 10px;
  }
}

.col {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: auto;
}

.v-card {
  border: 1px solid $yellow;
}

.logo-div {
  display: flex;
  align-items: center;
}

.link {
  width: 140px;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  border-bottom-right-radius: 50px;
  transition: 0.2s ease-in all;
  padding: 0px 4px 4px 0px;

  &:hover {
    border-bottom-color: #303030;
  }
}

.know-more {
  text-align: right;
  margin-top: 40px;

  @media (max-width: 400px) {
    text-align: center;
  }

  .v-icon {
    color: white;
    transform: rotate(45deg);
  }

  span {
    a {
      text-decoration: none;
      color: $white;

      &:hover {
        color: $yellow;
      }
    }

    &:hover {
      color: $yellow;

      .v-icon {
        color: $yellow;
        transform: rotate(0deg);
      }
    }
  }
}
p {
  width: 80%;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  text-align: left;
  margin-top: 16px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    line-height: 1;
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 60px 10px;
    text-align: center;
    width: 100% !important;
  }
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

h1 {
  font-family: Quicksand;
  font-size: 42px;
  font-weight: 600;
  color: $yellow;

  @media (max-width: 400px) {
    font-size: 30px;
  }
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
  margin: 40px 0px;

  @media (max-width: 768px) {
    margin: 25px 0px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
    font-weight: 300;
    margin: 0px;
  }
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
