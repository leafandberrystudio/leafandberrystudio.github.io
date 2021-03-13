<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-item link to="/">
          <v-list-tile-content>Home</v-list-tile-content>
        </v-list-item>
        <v-list-item link href="https://www.etsy.com/shop/LeafandBerry">
          <v-list-tile-content>Shop</v-list-tile-content>
        </v-list-item>
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item>
              <v-list-tile-content v-bind="attrs" v-on="on">
                Gallery
              </v-list-tile-content>
            </v-list-item>
          </template>
          <v-list>
            <v-list-item
              v-for="item in gallery"
              :key="item.id"
              link
              :to="item.route"
            >
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-list-item link to="/about">
          <v-list-tile-content>About</v-list-tile-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app extended src="../assets/header.webp" class="white--text">
      <v-app-bar-nav-icon
        dark
        class="hidden-sm-and-up"
        @click.stop="sidebar = !sidebar"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat plain to="/" class="white--text">Home</v-btn>

        <v-btn
          flat
          plain
          class="white--text"
          href="https://www.etsy.com/shop/LeafandBerry"
        >
          Shop
        </v-btn>

        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat plain v-bind="attrs" v-on="on" class="white--text">
              Gallery
            </v-btn>
          </template>
          <v-list style="background: #fcfaed">
            <v-list-item
              v-for="item in gallery"
              :key="item.id"
              link
              :to="item.route"
            >
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn flat plain to="/about" class="white--text"> About </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      appTitle: "Leaf & Berry Studio",
      sidebar: false,
    };
  },
  computed: mapState({
    gallery: "galleries",
  }),
};
</script>

<style lang="css">
</style>
