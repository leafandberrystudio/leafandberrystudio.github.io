<template>
  <v-row align="center" justify="center">
    <v-spacer />
    <v-col :cols="columns" >
        <v-img
        class="white--text"
        max-height="374"
        max-width="2288"
        src="../assets/header.webp"
      >
      <h1 class="text-center white--text">Leaf & Berry Studio</h1>
      </v-img>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
export default {
  props: ["columns"]
};
</script>

<style lang="css">
</style>
