<template>
  <div>
    <my-intro />
    <about-me />
    <my-portfolio />
  </div>
</template>

//
<script>
import AboutMe from "./AboutMe.vue";
import MyIntro from "./MyIntro.vue";
import MyPortfolio from "./MyPortfolio.vue";
export default {
  components: { MyIntro, AboutMe, MyPortfolio },
};

</script>