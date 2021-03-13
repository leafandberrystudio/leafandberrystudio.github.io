<template>
  <v-row>
    <swiper class="swiper" :options="swiperOption" :style="cssVars">
      <swiper-slide v-for="item in images" :key="item.route">
        <v-card class="mx-auto" tile max-width="200">
          <v-img :src="item.imageSrc" style="background: #fcfaed" max-height="200" contain="true">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </v-row>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
    props: {
  images: {
    type: Array,
    default: ()=>[]
  }, 
  rows: {
      type: Number,
      default: ()=>2
  }
},
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    cssVars() {
      return {
        '--height': (this.rows * 250) + 'px'
      }
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: this.rows,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: var(--height);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  .swiper-slide {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 14px * 1.3 * 2;
    background-color: #fcfaed;
  }
}
</style>