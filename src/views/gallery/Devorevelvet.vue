
<template>
  <v-container fill-height fluid>
    <gallery-header :title="galleryItem.title" :subtitle="galleryItem.subtitle" />
    <gallery-description :description="galleryItem.description" />
    <gallery-images :images="galleryItem.images" />
  </v-container>
</template>

<script>
import GalleryHeader from "../../components/gallery/GalleryHeader"
import GalleryDescription from "../../components/gallery/GalleryDescription"
import GalleryImages from "../../components/gallery/GalleryImages"

export default {
  name: "devorevelvet",
  title: "Devore Velvet",
  components: {
    GalleryHeader,
    GalleryDescription,
    GalleryImages,
  },
  computed: {
    galleryItem() {
      return this.$store.getters.galleryItem("devorevelvet");
    },
  },
};
</script>