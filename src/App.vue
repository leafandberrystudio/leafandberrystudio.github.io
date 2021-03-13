<template>
  <v-app style="background: #fcfaed">
    <v-main>
        <Menu :columns="columns" />
      <v-container fill-height fluid>
        <!-- <Banner :columns="columns" /> -->
        <v-row align="center" justify="center">
          <v-spacer />
          <v-col :cols="columns">
            <router-view />
          </v-col>
          <v-spacer />
        </v-row>
        <Footer :columns="columns" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    // Banner,
    Menu,
    Footer,
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 500) {
        this.columns = 12
      } else {
        this.columns = 8
      }
    };
  },
  computed: {
    columns() {
      if (this.windowWidth < 500) {
        return 12
      } else {
        return 8
      }
    }
  }
};
</script>
