<template>
  <v-container id="about-me">
    <v-row class="mb-16" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="my-2">ABOUT ME</h1>
        <h3 class="mb-10">
          If you’re <span class="span-2">wondering</span> who I am…
        </h3>
        <p class="my-5">
          I’m <span class="span-1"> Shahab </span> , a 23 years old self-taught
          <span class="span-1"> Front-end </span> developer <br />
        </p>
        <p>
          <span class="span-2">
            In college I came across programming world
          </span>
          & decided to start my journey into it so I looked for tutorials on
          youtube but I only learned a little which made me developed some small
          projects with HTML & CSS which I myself never looked back to… So I
          wasn’t learning much and improving so, I felt stuck. <br />
        </p>
        <p class="my-5">
          After my college degree in <span class="span-2">"Maths"</span>, I gave
          my full preference to coding & learning about it. I started my journey
          as a programmer 1 year ago when I enrolled in a
          <span class="span-2">
            <a
              class="links"
              href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
            >
              Build Responsive Real-World Websites with HTML and CSS</a
            >
          </span>
          course by a phenomenal teacher
          <span class="span-2">
            <a class="links" href="https://twitter.com/jonasschmedtman"
              >Jonas Schmedtmann</a
            >
          </span>
          & went on enrolling for two more courses
          <span class="span-2">
            <a
              class="links"
              href="https://www.udemy.com/course/advanced-css-and-sass/"
            >
              Advanced CSS and Sass: Flexbox, Grid, Animations and More!</a
            >
          </span>
          <span class="span-2">
            <a
              class="links"
              href="https://www.udemy.com/course/the-complete-javascript-course/"
            >
              The Complete JavaScript Course 2021: From Zero to Expert!</a
            >
          </span>

          there I quickly started to
          <span class="span-1">love Javascript</span> , Which then i finally
          landing on
          <span class="span-2">
            <a
              class="links"
              href="https://www.udemy.com/course/vuejs-2-the-complete-guide/"
              >Vue - The Complete Guide (w/ Router, Vuex, Composition API)</a
            >
          </span>
          course by another master
          <span class="span-2">
            <a class="links" href="https://twitter.com/maxedapps"
              >Maximilian Schwarzmüller</a
            >
          </span>
          <br />
        </p>
        <p class="my-5">
          Because we know the best way to learn is to practice, I also did a
          bunch of <span class="span-2"> personal projects </span> with the
          knowledge I gathered from the courses, you can check them on my
          <span class="span-2"> portfolio.</span>
          <br />
          In my free time, I likes to play <span class="span-2">Fifa</span>,
          <span class="span-2">Read Books</span>, and play
          <span class="span-2">Football</span>,
          <span class="span-2">Cricket</span> &
          <span class="span-2">Carrom.</span>
        </p>
        <p>
          I always want to <span class="span-2"> learn more </span>, do more,
          and <span class="span-2"> be more.</span> I’m also a firm
          <span class="span-2"> believer </span>that we should
          <span class="span-1"> never settle.</span>
        </p>

        <h3 class="my-10">
          My current <span class="span-1"> stack </span> of
          <span class="span-1">technologies</span> are: <br />
        </h3>
        <span class="span-3"
          >HTML5 - CSS3 - JAVASCRIPT - SASS - VUEJS - VUEX - VUE ROUTER -
          VUETIFY - STYLED<br />
          COMPONENTS - FIREBASE - BABEL - GITHUB</span
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
  //   margin: 50px 0px;
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

  @media (max-with: 400px) {
    font-size: 16px;
    font-weight: 200;
    line-height: 1;
  }
}
h1 {
  font-family: Quicksand;
  font-size: 42px;
  font-weight: 600;
  color: $yellow;

  @media (max-with: 400px) {
    font-size: 12px !important;
    // font-weight: 00;
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
</style>
