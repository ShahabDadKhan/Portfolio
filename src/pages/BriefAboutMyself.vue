<template>
  <v-container id="my-self">
    <v-row class="mb-16" align="center" justify="center">
      <div class="back-icon">
        <v-icon @click="$router.go(-1)">mdi-arrow-top-right-thin</v-icon>
      </div>
      <v-col class="text-center">
        <h1 class="my-2">Welcome to my professional journey!</h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <p class="my-5">
          In the early days of my academic life, I stumbled upon the
          <span class="span-2"> fascinating world of programming </span> during
          my college years. Intrigued by the potential of coding to
          <span class="span-2"> bring ideas to life</span>, I embarked on a
          self-taught journey, initially exploring HTML and CSS through online
          tutorials.
          <br />
        </p>
        <p class="my-10">
          The initial foray into coding ignited a spark, propelling me to delve
          deeper. Following my
          <span class="span-2">college degree in "Mathematics",</span> I made a
          conscious decision to dedicate myself to coding and its endless
          possibilities. In 2020, I took a significant step forward by enrolling
          in the
          <span class="span-2">
            <a
              class="links"
              title="Vue Fake 3D Image effect"
              target="_blank"
              data-cursor-hover
              href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
              >"Build Responsive Real-World Websites with HTML and CSS"</a
            ></span
          >
          course by the renowned educator,
          <span class="span-2">
            <a
              class="links"
              title="Vue Fake 3D Image effect"
              target="_blank"
              data-cursor-hover
              href="https://twitter.com/jonasschmedtman"
              >Jonas Schmedtmann</a
            ></span
          >. 
          <br>
        </p>

        <p>
          This marked the beginning of a transformative period where I
          immersed myself in additional courses, including
          <span class="span-2">
            <a
              class="links"
              title="Vue Fake 3D Image effect"
              target="_blank"
              data-cursor-hover
              href="https://www.udemy.com/course/advanced-css-and-sass/"
            >
              "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
            </a>
          </span>
          and
          <span class="span-2">
            <a
              class="links"
              title="Vue Fake 3D Image effect"
              target="_blank"
              data-cursor-hover
              href="https://www.udemy.com/course/the-complete-javascript-course/"
            >
              "The Complete JavaScript Course 2021: From Zero to Expert!"
            </a>
          </span>
          The enchanting world of JavaScript captured my interest, leading me to
          specialize further. I honed my skills through the
          <span class="span-2">
            <a
              class="links"
              title="Vue Fake 3D Image effect"
              target="_blank"
              data-cursor-hover
              href="https://www.udemy.com/course/vuejs-2-the-complete-guide/"
            >
              "Vue - The Complete Guide (w/ Router, Vuex, Composition API)"</a
            ></span
          >
          course, guided by the expertise of
          <span class="span-2">
            <a
              class="links"
              title="Vue Fake 3D Image effect"
              target="_blank"
              data-cursor-hover
              href="https://twitter.com/maxedapps"
            >
              Maximilian Schwarzmüller.</a
            ></span
          >
        </p>
        <p class="my-10">
          Recognizing the importance of <span class="span-2">practical application</span>, I supplemented my
          learning with a variety of <span class="span-2">personal projects</span>. These projects, crafted
          with knowledge acquired from courses, extensive research, and
          collaboration, can be explored in detail on my portfolio.
          <br />
          As a front-end software developer, I continue to evolve and embrace
          the dynamic landscape of web development. My journey is a <span class="span-2">testament to
          my passion for coding</span>, unwavering commitment to growth, and dedication
          to delivering seamless and innovative user experiences.
        </p>

        <p>
          <span class="span-2">How do I take on my work?</span> <br />
          I'm honest, fair, active listener, open communicator and accountable
          who Work cooperatively and treat clients and coworkers with respect
          and dignity while valuing individual differences, encouraging new
          ideas and sharing information. <br />
        </p>

        <p class="my-5">
          <span class="span-2">Do I only code?</span> <br />
          <span class="span-2">No,</span> Apart from my work, I spend time
          playing <span class="span-2"> Football</span>,
          <span class="span-2">Adventure traveling</span>,
          <span class="span-2">Watching podcasts</span>, and doing day-to-day
          life activities.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-image: url("../assets/Img/Background/desktop1.jpg");

  @media (max-width: 360px) {
    background-size: contain;
    background-image: url("../assets/Img/Background/mobile1.jpg");
  }
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  background-attachment: fixed;
}

.back-icon {
  display: flex;

  .v-icon {
    cursor: none;
    font-size: 50px;
    color: white;
    transform: rotate(-135deg);

    &:hover {
      color: $yellow;
    }
  }

  @media (max-width: 400px) {
    display: none;
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
    margin: 0px;
  }
}

h3 {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;

  @media (max-with: 400px) {
    font-size: 16px;
    font-weight: 300;
  }
}

.know-more {
  text-align: right;
  margin-top: 15px;

  .v-icon {
    color: white;
    transform: rotate(45deg);
  }

  span:hover {
    color: $yellow;

    .v-icon {
      color: $yellow;
      transform: rotate(0deg);
    }
  }
}
</style>
