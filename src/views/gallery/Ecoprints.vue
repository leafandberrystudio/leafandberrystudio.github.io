
<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <div id="comp-jx248s88" class="_1Z_nJ" data-testid="richTextElement">
        <h2 class="font_2" style="font-size: 30px; text-align: center">
          <span style="color: #2f2e2e"
            ><span style="font-size: 30px"
              ><span
                style="
                  font-family: wfont_eb4b72_afe4c0ec08c843ddaa502514031ba9bf,
                    wf_afe4c0ec08c843ddaa5025140, orig_prida_61;
                "
                >Eco Prints</span
              ></span
            ></span
          >
        </h2>

        <h2 class="font_2" style="font-size: 18px; text-align: center">
          <span style="color: #2f2e2e"
            ><span style="font-size: 18px"
              ><span style="font-family: cinzel, serif"
                >Botanical contact Prints Created&nbsp;with Nature's
                Pigments</span
              ></span
            ></span
          >
        </h2>
      </div>
    </v-row>
    <v-row align="center" justify="center">
      <div id="comp-jx5en18h" class="_1Z_nJ" data-testid="richTextElement">
        <p
          class="font_8"
          style="font-size: 18px; line-height: 1.3em; text-align: center"
        >
          <span style="color: #2f2e2e"
            ><span style="font-size: 18px"
              ><span style="font-family: caudex, serif"
                ><span style="letter-spacing: 0.03em"
                  >Eco printing is a delightful journey of&nbsp;discovery
                  -&nbsp;unlocking the&nbsp;magic of the colors
                  hidden&nbsp;within plants surrounding me. It teaches&nbsp;me
                  to look at the world in a new way, noticing&nbsp;the
                  small&nbsp;</span
                ></span
              ></span
            ></span
          >
        </p>

        <p
          class="font_8"
          style="font-size: 18px; line-height: 1.3em; text-align: center"
        >
          <span style="color: #2f2e2e"
            ><span style="font-size: 18px"
              ><span style="font-family: caudex, serif"
                ><span style="letter-spacing: 0.03em"
                  >details of my surroundings.
                </span></span
              ></span
            ></span
          >
        </p>

        <p
          class="font_8"
          style="font-size: 18px; line-height: 1.3em; text-align: center"
        >
          &nbsp;
        </p>

        <p
          class="font_8"
          style="font-size: 18px; line-height: 1.3em; text-align: center"
        >
          <span style="color: #2f2e2e"
            ><span style="font-size: 18px"
              ><span style="font-family: caudex, serif"
                ><span style="letter-spacing: 0.03em"
                  >I gather each individually for its unique shape&nbsp;and
                  dyeing properties.&nbsp;Prints reflect the&nbsp;leaf's unique
                  conditions, with pigments shifting based on time of year, soil
                  and weather conditions,&nbsp;and so much more, so that each
                  print is an irreproducible snapshot in time of nature's
                  bounty.</span
                ></span
              ></span
            ></span
          >
        </p>
      </div>
    </v-row>
    <v-row>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in images" :key="item.route">
          <v-card class="mx-auto" tile max-width="200">
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
          </v-card>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </v-row>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-slides-per-column",
  title: "Multi row slides layout",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          imageSrc: require("../../assets/ecoprints/ecoprints-gallery-1.webp"),
          title: "Title 1",
        },
        {
          id: 2,
          imageSrc: require("../../assets/ecoprints/ecoprints-gallery-2.webp"),
          title: "Title 2",
        },
        {
          id: 3,
          imageSrc: require("../../assets/ecoprints/ecoprints-gallery-3.webp"),
          title: "Title 3",
        },
        {
          id: 4,
          imageSrc: require("../../assets/ecoprints/ecoprints-gallery-4.webp"),
          title: "Title 4",
        },
        {
          id: 5,
          imageSrc: require("../../assets/ecoprints/ecoprints-gallery-5.webp"),
          title: "Title 5",
        },
        {
          id: 6,
          imageSrc: require("../../assets/ecoprints/ecoprints-gallery-6.webp"),
          title: "Title 6",
        },
        {
          id: 7,
          imageSrc: require("../../assets/ecoprints/ecoprints-gallery-7.webp"),
          title: "Title 7",
        },
      ],
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 2,
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
  height: 300px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 14px * 1.3 * 2;
    background-color: #fcfaed;
  }
}

.swiper {
  height: 430px;
  margin-left: auto;
  margin-right: auto;

  .swiper-slide {
    height: 200px;
  }
}
</style>