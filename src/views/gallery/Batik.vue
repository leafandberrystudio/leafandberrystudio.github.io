<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col>
        <h2>Batik Designs Hand Painted with Hot Wax</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="item in images"
        :key="item.route"
      >
        <v-img :src="item.imageSrc" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      //other datas
      images: [
        {
          id: 1,
          imageSrc: require("../../assets/batik/gallery-1.webp"),
          title: "Title 1",
        },
        {
          id: 2,
          imageSrc: require("../../assets/batik/gallery-2.webp"),
          title: "Title 2",
        },
      ],
    };
  },
};
</script>
