<template>
    <v-row>
      <v-col
        class="text-center"
        style="display: flex;
              flex-direction: column;
              align-items: center;"
      >
        <h1>CONTACT ME</h1>
        <h3 class="my-10">
          If you want to <span class="span-2">talk</span>, you can
          <span class="span-2">find me</span> at: <br />
          <a class="mai-anchor" data-cursor-hover href="mailto:shahabkhandev@gmail.com">
         <span class="span-2">shahabkhandev@gmail.com</span>
          </a> 
        </h3>
        <div class="social-media">
          <ul class="icons-list">
            <li v-for="(icon, index ) in icons" :key="index">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <a :href="`https://${icon.link }`" target="_blank">
                  <v-icon data-cursor-hover v-bind="attrs"
                    v-on="on" :class="icon.color">mdi-{{ icon.name }}</v-icon>
                  </a>
                </template>
                <span>{{ icon.tooltip }}</span>
               </v-tooltip>
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
</template>

<script>
export default {
  data() {
    return {
      a: 0,
      b: 1,
      icons:[
        {name:'linkedin',color:'linkedin',tooltip:'Linkedin', link:'www.linkedin.com/in/shahab-dad-khan-10b414208/'},
        {name:'github',color:'github',tooltip:'Github', link:'github.com/ShahabDadKhan?tab=repositories'},
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.social-media {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
}

a {
  text-decoration: none;
  color: $white !important;
}

.divResume {
  width: 12%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid $yellow;
  border-radius: 15px;
  padding: 3px;
  margin: 25px 0px;
  @media (max-width: 768px) {
    width: 30%;
  }
}

.btnResume {
  list-style: none;
  text-decoration: none;
  color: white;

  &:hover {
    color: $yellow;
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
  font-style: italic;
  font-weight: 400;

  @media (max-width: 400px) {
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
  }
}

.span-2 {
  font-weight: 600;
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

    @media (max-width: 400px) {
      margin-top: 0px;
      margin-bottom: 25px;
    }
  }

  .v-icon.v-icon {
    margin: 0px 10px;
    font-size: 40px;

    @media (max-width: 400px) {
      font-size: 28px;
      margin: 0px 2px;
  }

    &:hover{
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

.github {
  color: $white;
}

.linkedin {
  color: #126d9f;
}

.twitter {
  color: #00acee;
}
</style>
