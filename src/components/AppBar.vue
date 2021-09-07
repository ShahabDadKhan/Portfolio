<template>
  <v-container fluid style="height:100px">
    <v-app-bar
      height="100px"
      style="box-shadow:0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
      app
      hide-on-scroll
      color="white"
    >
      <v-row>
        <v-col class="f1" offset-sm="1" md="1" sm="2" cols="10">
          <router-link to="/" class="links f1">
            FireBlogs
          </router-link>
        </v-col>

        <v-col
          align-self="start"
          class="f2"
          offset-sm="1"
          offset-md="5"
          offset-lg="6"
          md="4"
          sm="5"
          cols="8"
        >
          <router-link to="/" class="links">
            ABOUT ME
          </router-link>
          <router-link to="/blogs" class="links">
            PORTFOLIO
          </router-link>
          <router-link v-show="user" to="/creat-post" class="links">
            CONTACT
          </router-link>
          <router-link v-show="!user" to="/login" class="links">
            SIGN IN
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.links {
  text-decoration: none;
  padding: 0px 15px !important;
  &:hover,
  &:focus {
    color: #1eb8b8;
  }
  @media (max-width: 360px) {
    padding: 0px 5px !important;
  }
}

.f1 {
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 600px) {
    margin-top: 15px !important;
    margin-bottom: 0px !important;
  }
}
.f2 {
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 14px;
    font-weight: 500;
    margin: 0px 0px 25px 15px !important;
    padding: 0px;
  }
}
.f3 {
  font-size: 12px;
  font-weight: 500;
  @media (max-width: 600px) {
    margin-top: 15px !important;
    margin-bottom: 0px !important;
  }
}
</style>
