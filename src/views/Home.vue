<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-spacer />
      <v-col cols="8">
        <h1 class="text-center">
          Creating one-of-a-kind accessories with nature's bounty!
        </h1>
      </v-col>
      <v-spacer />
    </v-row>

    <v-row align="center" justify="left">
      <div v-for="item in items" :key="item.route">
        <v-col>
          <v-card class="mx-auto" tile max-width="200" v-bind:to="item.route">
            <v-img
              class="white--text align-end"
              max-height="241"
              max-width="241"
              v-bind:src="item.source"
            ></v-img>
            <v-card-title class="text-center " style="background: #e4dccb">{{
              item.name
            }}</v-card-title>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    items: [
      {
        route: "/eco-prints",
        name: "Eco Prints",
        source: require("../assets/ecoprints/menu.webp"),
      },
      {
        route: "/medium-prints",
        name: "Medium Prints",
        source: require("../assets/mediumprints/menu.webp"),
      },
      {
        route: "/devore-velvet",
        name: "Devore Velvet",
        source: require("../assets/devorevelvet/menu.webp"),
      },
      {
        route: "/sun-prints",
        name: "Sun Prints",
        source: require("../assets/sunprints/menu.webp"),
      },
      {
        route: "/cyanotypes",
        name: "Cyanotypes",
        source: require("../assets/cyanotypes/menu.webp"),
      },
      {
        route: "/shibori",
        name: "Shibori",
        source: require("../assets/shibori/menu.webp"),
      },
      {
        route: "/jewelry",
        name: "Jewelry",
        source: require("../assets/jewelry/menu.webp"),
      },
      {
        route: "/knitting",
        name: "Knitting",
        source: require("../assets/knitting/menu.webp"),
      },
      {
        route: "/batik",
        name: "Batik",
        source: require("../assets/batik/menu.webp"),
      },
    ],
  }),
};
</script>
