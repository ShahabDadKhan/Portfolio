<template>
  <v-container id="my-self">
    <v-row class="mb-16" align="center" justify="center">
      <div class="back-icon">
            <v-icon @click="$router.go(-1)">mdi-arrow-top-right-thin</v-icon>
      </div>
      <v-col class="text-center brief-div">
          <h1 class="my-2">Brief About Myself</h1>
        </v-col>
      <v-col cols="12" class="text-center">
        <p class="my-5">
          <span class="span-2">
          In my college I came across programming world
          </span>
          & decided to start my journey into it so I looked for tutorials on
          youtube from which I only learned a little which made me developed
          some small projects with HTML & CSS which I myself never looked back
          to. I wasn’t learning much and improving, I felt stuck. <br />
        </p>
        <p class="my-5">
          After my college degree in <span class="span-2">"Mathematics"</span>,
          I gave my full preference to coding & learning about it. I started my
          journey as a programmer in 2020 when I enrolled in a
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
          <span class="span-1">love Javascript</span> , Which then I finally
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
          knowledge I gathered from the courses, google, youtube and people around me, you can check them on my
          <span class="span-2"> portfolio.</span>
        </p>

        <p>
         <span class="span-2">How do I take on my work?</span> <br>
         I'm honest, fair, active listener, open communicator and accountable who
         Work cooperatively and treat clients and coworkers with respect and dignity while valuing individual differences, encouraging new ideas and sharing information. <br>
         <!-- <span class="span-2">Commitment</span> to excellence - Demonstrate commitment to being creative, innovative, flexible and adaptable, focusing on quality solutions, continually improving and being a winner. -->
        </p>

        <p class="my-5">
          <span class="span-2">Do I only code?</span> <br>
          <span class="span-2">No,</span> Apart from my work, I spend time playing <span class="span-2"> Football</span>, <span class="span-2">Adventure traveling</span>, 
          <span class="span-2">Watching podcasts</span>, and doing day-to-day life activities.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed:{
    // Instead of updating age and experience again and again each year, created a function for that which will update it automatically.
    ageCalculator(){
      let today = new Date();
      let currentYear = today.getFullYear();
      let currentAge = currentYear - 1998
      return currentAge; 
    },
    experienceCalculator(){
      let today = new Date();
      let currentYear = today.getFullYear();
      let currentExperience = currentYear - 2021
      return currentExperience;
    }
  }
};
</script>

<style lang="scss" scoped>
.container:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-image: url('../assets/Img/Background/desktop.jpg');
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  background-attachment: fixed;
}

.brief-div {
  max-width: 85%;
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
    cursor: pointer;
    color: $yellow;

    .v-icon {
      color: $yellow;
      transform: rotate(0deg);
    }
  }
}
</style>
