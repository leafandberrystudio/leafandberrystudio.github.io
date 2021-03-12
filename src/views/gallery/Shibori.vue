
<template>
  <v-container fill-height fluid>
    <gallery-header :title="galleryItem.title" :subtitle="galleryItem.subtitle" />
    <gallery-description :description="galleryItem.arashiDescription" />
    <gallery-images :images="galleryItem.arashiImages" rows="1" />
    <gallery-description :description="galleryItem.intajimeDescription" />
    <gallery-images :images="galleryItem.intajimeImages" rows="1" />
    <gallery-description :description="galleryItem.naturalDescription" />
    <gallery-images :images="galleryItem.naturalImages" rows="1" />
  </v-container>
</template>

<script>
import GalleryHeader from "../../components/gallery/GalleryHeader"
import GalleryDescription from "../../components/gallery/GalleryDescription"
import GalleryImages from "../../components/gallery/GalleryImages"

export default {
  name: "shibori",
  title: "Shibori",
  components: {
    GalleryHeader,
    GalleryDescription,
    GalleryImages,
  },
  computed: {
    galleryItem() {
      return this.$store.getters.galleryItem("shibori");
    },
  },
};
</script>