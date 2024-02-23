<template>
  <section :id="sectionId" class="carousel-section">
    <div class="container">
      <div class="section-header">
        <h2 class="title text-center">{{ carousel.title }}</h2>
      </div>
      <div class="swiper-container">
        <swiper class="swiper" 
        :slides-per-view="1.3"  
        :spaceBetween="20"
        :breakpoints="{
          '640': {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2.3,
            spaceBetween: 40,
          },
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules">
          <swiper-slide v-for="card of cards" class="card">
            <CubeCard v-if="carousel.carouselType === 'cube-card'" :item="card" />
            <ProgramCard v-if="carousel.carouselType === 'program-card'" :item="card" />
          </swiper-slide>
        </swiper>
      </div>
      <a v-if="cta" :href="cta.ctaLink">{{ cta.ctaText }}  <i class="bi bi-arrow-right"></i></a>
    </div>
    
  </section>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import ProgramCard from '../components/ProgramCard.vue'
import CubeCard from '../components/CubeCard.vue'
import StoryCard from '../components/StoryCard.vue'

export default {
  props: {
    sectionId: {
      type: String,
      required: true
    },
    carousel: {
      type: Object,
      required: true
    },
    cards: {
      type: Object,
      required: true
    },
    cta: {
      type: Object,
      required: false
    }
  },  
  components: {
    Swiper,
    SwiperSlide,
    ProgramCard,
    CubeCard,
    StoryCard,
  },
  setup() {
    return {
      modules: []
    }
  }
};

</script>
