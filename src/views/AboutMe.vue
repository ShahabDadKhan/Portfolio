<template>
  <v-container id="about-me">
    <v-row class="mb-16" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="my-2">ABOUT ME</h1>
        <h3>If you’re <span class="span-2">wondering</span> who I am…</h3>
        <p class="my-5">
          I’m <span class="span-1"> Shahab </span> , a {{ ageCalculator }}
          old <span class="span-2">self-taught </span> professional
          <span class="span-1"> Software developer </span> with
          <span class="span-2">{{ experienceCalculator }}</span> years of
          experience in developing
          <span class="span-2">responsive web apps and websites</span>. <br>
          Passionate about creating <span class="span-2">seamless</span> user experiences, 
          committed to completing tasks with <span class="span-2"> honesty</span>.
        </p>
        <p>
          Driven by a constant desire to <span class="span-2"> learn more</span>, do more,
          and <span class="span-2"> be more</span>, always exploring <span class="span-2"> new technologies </span> and embracing challenges. <br> I’m also a firm
          <span class="span-2"> believer </span>that we should
          <span class="span-1"> never settle.</span>
        </p>

        <h3>My current <span class="span-1"> TOOLS </span> are: <br /></h3>
        <span class="span-3">
          <ul class="icons-list">
            <li v-for="(icon, index) in icons1" :key="index">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    data-cursor-hover
                    v-bind="attrs"
                    v-on="on"
                    :class="icon.color"
                    >mdi-{{ icon.name }}</v-icon
                  >
                </template>
                <span>{{ icon.tooltip }}</span>
              </v-tooltip>
            </li>
          </ul>
          <!-- <br /> -->
          <!-- Basic knowledge of <br /> -->
          <ul class="icons-list">
            <li v-for="(icon, index) in icons2" :key="index">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    data-cursor-hover
                    v-bind="attrs"
                    v-on="on"
                    :class="icon.color"
                    >mdi-{{ icon.name }}</v-icon
                  >
                </template>
                <span>{{ icon.tooltip }}</span>
              </v-tooltip>
            </li>
          </ul>
        </span>
        <div class="know-more">
          <span>
            <router-link data-cursor-hover to="/about-shahab">
              Know More
              <v-icon>mdi-arrow-top-right-thin</v-icon>
            </router-link>
          </span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      icons1: [
        { name: "language-html5", color: "html", tooltip: "HTML" },
        { name: "language-css3", color: "css", tooltip: "CSS" },
        { name: "sass", color: "scss", tooltip: "SCSS/SASS/LESS" },
        {
          name: "language-javascript",
          color: "javascript",
          tooltip: "Javascript",
        },
        { name: "vuejs", color: "vuejs", tooltip: "Vue" },
        { name: "nuxt", color: "nuxt", tooltip: "Nuxt" },
        { name: "react", color: "react", tooltip: "React" },
        { name: "vuetify", color: "vuetify", tooltip: "Vuetify" },
        { name: "bootstrap", color: "bootstrap", tooltip: "Bootstrap" },
        { name: "github", color: "github", tooltip: "Github" },
      ],
      icons2: [
        { name: "nodejs", color: "nodejs", tooltip: "Node" },
        {
          name: "language-typescript",
          color: "typescript",
          tooltip: "Typescript",
        },
        { name: "tailwind", color: "tailwind", tooltip: "Tailwind" },
        { name: "firebase", color: "firebase", tooltip: "Firebase" },
      ],
    };
  },
  computed: {
    // Instead of updating age and experience again and again each year, created a computed property which will do the work for me.
    ageCalculator() {
      const currentDate = new Date();
      const start = new Date("1998-04-15");

      // Calculate the difference in years, months, and days
      let years = currentDate.getUTCFullYear() - start.getUTCFullYear();
      let months = currentDate.getUTCMonth() - start.getUTCMonth();
      const days = currentDate.getUTCDate() - start.getUTCDate();

      // Adjust negative months
      if (months < 0 || (months === 0 && days < 0)) {
          years--;
          months += (months < 0) ? 12 : 0;
      }

      return `${years} years`;
    },
    experienceCalculator() {
      const currentDate = new Date();
      const start = new Date("2021-10-11");

      // Calculate the difference in years and months.
      let years = currentDate.getUTCFullYear() - start.getUTCFullYear();
      let months = currentDate.getUTCMonth() - start.getUTCMonth();
      const days = currentDate.getUTCDate() - start.getUTCDate();

      // Adjust negative months
      if (months < 0 || (months === 0 && days < 0)) {
          years--;
          months += (months < 0) ? 12 : 0;
      }

      return months == 0 ? `${years}`:`${years}.${months + 1}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  height: 100%;

  @media (max-width: 400px) {
    height: auto;
  }
}

.span-1 {
  background-color: $yellow;
  color: black;
  display: inline-block;
  transform: rotate(-2deg);
  font-weight: 500;
  @media (max-width: 400px) {
    font-weight: 400;
  }
}

.span-2 {
  font-weight: 600;
  @media (max-width: 400px) {
    font-weight: 500;
  }
}

.span-3 {
  font-family: Poppins;
  font-size: 30;
  font-weight: 600;
  color: $yellow;
  @media (max-width: 400px) {
    font-size: 22px;
    font-weight: 500;
  }
}

.links {
  color: white;
}

p {
  font-size: 22px;
  font-weight: 300;
  line-height: 1.8;

  @media (max-width: 400px) {
    font-size: 16px;
    font-weight: 200;
    line-height: 1.6;
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

h3 {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  margin: 60px 0px 40px 0px;

  @media (max-width: 768px) {
    margin: 25px 0px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
    font-weight: 300;
  }
}

.know-more {
  text-align: right;
  margin-top: 15px;

  @media (max-width: 400px) {
    text-align: center;
    margin-top: 25px;
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

.icons-list {
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: center;

  @media (max-width: 400px) {
    padding: 0px;
  }

  &:last-child {
    margin-top: 25px;
  }

  .v-icon.v-icon {
    margin: 0px 10px;
    font-size: 40px;

    @media (max-width: 400px) {
      font-size: 28px;
      margin: 0px 2px;
    }

    &:hover {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      perspective: 1000px;
    }

    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }
      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: translate3d(-2px, 0, 0);
      }
      40%,
      60% {
        transform: translate3d(2px, 0, 0);
      }
    }
  }
}

.html {
  color: #ff0000;
}

.css {
  color: #2965f1;
}

.scss {
  color: #cc6699;
}

.javascript {
  color: #f0db4f;
}

.vuejs {
  color: #42b883;
}

.vuetify {
  color: #2196f3;
}

.bootstrap {
  color: #563d7c;
}

.github {
  color: $white;
}

.react {
  color: #61dbfb;
}

.nodejs {
  color: #3c873a;
}

.typescript {
  color: #007acc;
}

.tailwind {
  color: #3490dc;
}

.nuxt {
  color: #41b883;
}

.firebase {
  color: #ffcb2b;
}
</style>
