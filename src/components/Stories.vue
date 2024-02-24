<template>
  <section :id="sectionId" class="carousel-section features-carousel">
    <div class="container">
      <div class="section-header">
        <h1 class="title">{{ carousel.title }}</h1>
        <div v-if="carousel.description" class="description">{{ carousel.description }}</div>
      </div>
      <div class="swiper-container">
        <swiper class="swiper" 
        :spaceBetween="40"
        :slides-per-view="1.4" 
        :breakpoints="{
          '1280': {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          '1441': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }" 
        :pagination="{
          clickable: true,
        }"
        :modules="modules">
          <swiper-slide v-for="card of cards" class="card">
            <StoryCard :item="card" />
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
    StoryCard,
  },
  setup() {
    return {
      modules: []
    }
  }
};

</script>
