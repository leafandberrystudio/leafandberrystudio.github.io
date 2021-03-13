<template>
  <v-row no-gutters class="ma-0 pa-0">
    <v-col v-for="item in images" :key="item.id" cols="6" xl="2" lg="2" md="3" sm="4" xs="6" min-height="200px" class="ma-0 pa-0">
      <v-img :src="item.imageSrc" style="background: #fcfaed" contain="true" class="ma-0 pa-0" max-height="200px" max-width="100%">
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
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>