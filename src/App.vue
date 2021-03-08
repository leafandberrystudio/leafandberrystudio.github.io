<template>
  <v-app style="background: #fcfaed">
    <v-main>
      <v-container fill-height fluid>
        <Banner />
        <Menu />
        <v-row align="center" justify="center">
          <v-spacer />
          <v-col cols="8">
            <router-view />
          </v-col>
          <v-spacer />
        </v-row>
        <Footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Banner,
    Menu,
    Footer,
  },
};
</script>
