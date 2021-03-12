<template>
  <v-row align="center" justify="center">
    <v-spacer />
    <v-col cols="8">
      <v-card
        class="d-flex justify-center mb-6"
        flat
        tile
        style="background: #fcfaed"
      >
        <div id="nav">
          <v-btn to="/" style="background: #dfd9c8">Home</v-btn>
          <v-btn
            href="https://www.etsy.com/shop/LeafandBerry"
            style="background: #dfd9c8"
            >Shop</v-btn
          >
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" style="background: #dfd9c8">
                Gallery
              </v-btn>
            </template>
            <v-list v-for="item in gallery" :key="item.id">
              <v-list-item>
                <v-btn v-bind:to="item.route" style="background: #dfd9c8">{{
                  item.title
                }}</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn to="/about" style="background: #dfd9c8">About</v-btn>
        </div>
      </v-card>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
   computed: mapState({
    gallery: 'galleries',
  }),
};
</script>

<style lang="css">
</style>
