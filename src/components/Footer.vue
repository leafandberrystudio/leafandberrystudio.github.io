<template>
  <v-row align="center" justify="center">
    <v-spacer />
    <v-col :cols="columns" style="background: #e8e2d2">
      <v-row align="center" justify="left">
        <v-col cols="8"> Contact: </v-col>
      </v-row>
      <v-row align="center" justify="left">
        <v-col cols="8"> Julie Mitchell leafandberrystudio@gmail.com </v-col>
      </v-row>
      <v-row align="center" justify="left">
        <v-col cols="8"> © 2021 by Leaf & Berry. </v-col>
      </v-row>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
export default {
  props: ["columns"],
};
</script>

<style lang="css"></style>
