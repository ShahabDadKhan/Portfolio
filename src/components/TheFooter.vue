<template>
  <v-container id="the-footer" class="my-16">
    <contact-me></contact-me>
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center text-center">
        <img src="../assets/Img/SDK-blackSmall.jpg">
        <h1>SHAHAB DAD KHAN</h1>
        <h4>SOFTWARE DEVELOPER</h4>
        <p class="mt-8">COPYRIGHT&copy;2023,SHAHAB</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactMe from '../views/ContactMe.vue';
export default {
  components: { ContactMe },
  };
</script>
<style lang="scss" scoped>

.container {
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction: column;
  }
}
img {
  width: 250px;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 400px) {
    width: 150px;
  }
}

.row:first-child {
  order: 1;

  @media (max-width: 400px) {
    order: 0;
  }
}

h1 {
  font-family: Quicksand;
  font-size: 16px;
  font-weight: 600;
  margin: 0px 2px 0px 0px;
  //   color: $yellow;
}
h4 {
  font-family: Poppins;
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
}
</style>
