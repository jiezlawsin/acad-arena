<template>
  <section :id="sectionId">
    <swiper class="swiper banner-swiper" style="height: 350px" :modules="modules" :pagination="{ clickable: true }" :autoplay="{ delay: 5500 }">
      <swiper-slide v-for="banner of banners" class="slide">
        <div class="banner-swiper-content container flex flex-justify-center flex-align-center flex-column">
          <h2 v-if="banner.header">{{  banner.header  }}</h2>
          <div class="banner-swiper-html" v-if="banner.content" v-html="banner.content"></div>
          <a v-if="banner.ctaText" :href="banner.ctaLink" class="btn btn-dark btn-lg" v-uf>{{ banner.ctaText }}</a>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script lang="ts">
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
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
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Autoplay]
    }
  }
};

</script>