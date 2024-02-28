<template>
  <section :id="sectionId" class="banner-swiper">
    <div class="slick-slider" :id="'slick' + sectionId">
      <img v-for="image in banners.images" :src="image">
    </div>
    <div class="banner-swiper-content container flex flex-justify-center flex-align-center flex-column">
      <h2 class="banner-swiper-header" v-if="banners.header">{{  banners.header  }}</h2>
      <div class="banner-swiper-html" v-if="banners.content" v-html="banners.content"></div>
      <a v-if="banners.ctaText" :href="banners.ctaLink" class="btn btn-gradient btn-lg" v-uf>{{ banners.ctaText }}</a>
    </div>
  </section>
</template>

<script lang="ts">
import $ from "jquery";
import 'swiper/css'
import 'swiper/css/pagination'
export default {
  props: {
    sectionId: {
      type: String,
      required: true
    },
    banners: {
      type: Object,
      required: true
    },
  },
  mounted() {
    $('#slick' + this.sectionId).slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }
};

</script>