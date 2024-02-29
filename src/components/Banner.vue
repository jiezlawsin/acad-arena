<template>
  <section :id="sectionId" class="banner-swiper">
    <div class="slick-slider" :class="{'content-inside': banners?.type === 'content-carousel'}" :id="'slick' + sectionId">
      <img v-if="banners?.type != 'content-carousel'" v-for="image in banners.images" :src="image">
      <div v-if="banners.type === 'content-carousel'" v-for="image in banners.images" class="banner-swiper-content ">
        <img :src="image.image">
        <div class="container flex flex-justify-center flex-align-center flex-column">
          <h2 class="banner-swiper-header" v-if="image.header">{{  image.header  }}</h2>
          <div class="banner-swiper-html" v-if="image.content" v-html="image.content"></div>
          <a v-if="image.ctaText" :href="image.ctaLink" class="btn btn-gradient btn-lg" v-uf>{{ image.ctaText }}</a>
        </div>
      </div>
    </div>
    <div v-if="banners?.type !== 'content-carousel'" class="banner-swiper-content container flex flex-justify-center flex-align-center flex-column">
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
      dots: this.banners.type === 'content-carousel' ? true : false,
      infinite: true,
      speed: this.banners.type === 'content-carousel' ? 300 : 800,
      fade: this.banners.type === 'content-carousel' ? false : true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 8000,
    });
  }
};

</script>