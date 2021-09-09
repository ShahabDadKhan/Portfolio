<template>
  <v-container id="contect-me" class="mt-16">
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
          shahabkhan681@gmail.com
        </h3>
        <!-- <p>shahabkhan681@gmail.com</p> -->
        <div class="divResume">
          <!-- <v-btn> -->
          <a
            href="../assets/ShahabResume.pdf"
            class="btnResume"
            download="Resume"
          >
            <!-- <v-icon class="mr-2 white--text">mdi-download</v-icon> -->
            Resume
          </a>
          <!-- <v-img src="../assets/ShahabResume.pdf"></v-img> -->
          <!-- </v-btn> -->
        </div>
        <div>
          <v-btn
            small
            fab
            href="https://github.com/ShahabDadKhan?tab=repositories"
          >
            <v-icon large>mdi-github</v-icon>
          </v-btn>
          <v-btn
            small
            fab
            href="https://www.linkedin.com/in/shahab-dad-khan-10b414208/"
          >
            <v-icon large>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn small fab href="https://twitter.com/ShahabDadKhan">
            <v-icon large>mdi-twitter</v-icon>
          </v-btn>
          <v-btn small fab href="https://www.instagram.com/shahabdadkhan/">
            <v-icon large>mdi-instagram</v-icon>
          </v-btn>
          <v-btn fab href="https://touch.facebook.com/shahab.khan.1800">
            <v-icon large>mdi-facebook</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
}

.btnResume {
  list-style: none;
  text-decoration: none;
  color: white;

  &:hover {
    color: $yellow;
  }
}
.v-btn {
  background-color: black !important;
  color: white;
  margin: 0px 20px 0px 0px;

  @media (max-width: 400px) {
    margin: 0px 1px 0px 0px;
  }

  &:hover {
    color: $yellow;
  }

  &:nth-of-type(5) {
    margin: 0px 0px 0px 0px;
  }
}

h1 {
  font-family: Quicksand;
  font-size: 42px;
  font-weight: 600;
  color: $yellow;
}

h3 {
  font-family: Poppins;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  //   color: $yellow;
  @media (max-width: 400px) {
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
  }
}

.span-2 {
  font-weight: 600;
}

// p {
//   font-size: 26px;
//   font-weight: 500;
//   margin: 60px 0px 30px 0px;
//   @media (max-width: 300px) {
//     font-size: 6px;
//     font-weight: 100;
//   }
// }
</style>
