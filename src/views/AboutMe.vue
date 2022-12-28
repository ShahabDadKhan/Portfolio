<template>
  <v-container id="about-me">
    <v-row class="mb-16" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="my-2">ABOUT ME</h1>
        <h3 class="mb-10">
          If you’re <span class="span-2">wondering</span> who I am…
        </h3>
        <p class="my-5">
          I’m <span class="span-1"> Shahab </span> , a {{ ageCalculator }} years old <span class="span-2">self-taught </span>
          professional <span class="span-1"> Software developer </span> with <span class="span-2">{{experienceCalculator}}+</span> year 
          experience in developing <span class="span-2">responsive web apps and websites</span>.

          Curious and committed, completing the tasks at hand <span class="span-2">honestly</span>
          and <span class="span-2">passionately</span>.
        </p>
        <p>
          I always want to <span class="span-2"> learn more </span>, do more,
          and <span class="span-2"> be more.</span> I’m also a firm
          <span class="span-2"> believer </span>that we should
          <span class="span-1"> never settle.</span>
        </p>

        <h3 class="mt-15 my-10">
          My current <span class="span-1"> TOOLS </span> are: <br />
        </h3>
        <span class="span-3"
          >
          <ul class="icons-list">
            <li v-for="(icon, index ) in icons1" :key="index">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs"
                    v-on="on" :class="icon.color">mdi-{{ icon.name }}</v-icon>
                </template>
                <span>{{ icon.tooltip }}</span>
               </v-tooltip>
            </li>
          </ul>
          <br> Basic knowledge of <br>
          <ul class="icons-list">
            <li v-for="(icon, index ) in icons2" :key="index">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs"
                    v-on="on" :class="icon.color">mdi-{{ icon.name }}</v-icon>
                </template>
                <span>{{ icon.tooltip }}</span>
               </v-tooltip>
            </li>
          </ul>
          <!-- HTML - CSS/SASS/LESS - JAVASCRIPT - VUEJS - VUETIFY/BOOTSTRAP - GITHUB. -->
          <!-- - NODEJS - TYPESCRIPT - TAILWIND - NUXT - FIREBASE. -->
          </span>
          <div class="know-more">
            <span>
              <router-link to="/about-shahab">
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
  data(){
    return {
      icons1:[
        {name:'language-html5',color:'html',tooltip:'HTML'},
        {name:'language-css3',color:'css',tooltip:'CSS'},
        {name:'sass',color:'scss',tooltip:'SCSS/SASS/LESS'},
        {name:'language-javascript',color:'javascript',tooltip:'Javascript'},
        {name:'vuejs',color:'vuejs',tooltip:'Vue'},
        {name:'vuetify',color:'vuetify',tooltip:'Vuetify'},
        {name:'bootstrap',color:'bootstrap',tooltip:'Bootstrap'},
        {name:'github',color:'github',tooltip:'Github'}
      ],
      icons2:[
        {name:'react',color:'react',tooltip:'React'},
        {name:'nodejs',color:'nodejs',tooltip:'Node'},
        {name:'language-typescript',color:'typescript',tooltip:'Typescript'},
        {name:'tailwind',color:'tailwind',tooltip:'Tailwind'},
        {name:'nuxt',color:'nuxt',tooltip:'Nuxt'},
        {name:'firebase',color:'firebase',tooltip:'Firebase'}
      ]
    }
  },
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

  span {
    a {
      text-decoration: none;
      color: $white;
      
      &:hover {
        color: $yellow;
      }
    }
    
    &:hover {
    cursor: pointer;
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

  &:last-child {
    margin-top: 25px;
  }

  .v-icon.v-icon {
    margin: 0px 10px;
    font-size: 40px;

    &:hover{
      cursor: pointer;

      animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
      transform: translate3d(0, 0, 0);
      perspective: 1000px;
    }

    @keyframes shake {
      10%, 90% {
        transform: translate3d(-1px, 0, 0);
      }
      20%, 80% {
        transform: translate3d(2px, 0, 0);
      }
      
      30%, 50%, 70% {
        transform: translate3d(-2px, 0, 0);
      }
      40%, 60% {
        transform: translate3d(2px, 0, 0);
      } 
    }
  }
}


.html {
  color: #FF0000;
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
  color: #2196F3;
}

.bootstrap {
  color: #563d7c;
}

.github {
  color: $white;
}

.react {
  color:#61dbfb ;
}

.nodejs {
  color: #3C873A;
}

.typescript {
  color: #007acc;
}

.tailwind {
  color:#3490dc ;
}

.nuxt {
  color: #41b883;
}

.firebase {
  color: #FFCB2B;
}
</style>
