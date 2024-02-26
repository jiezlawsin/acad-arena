<template>
  <section :id="sectionId" class="carousel-cards-section py-5" :class="{'hasBg': hasBackground}">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <div class="slick-carousel">
        <div v-for="item in cards" class="card">
          <ProgramCard :item="item" v-if="carousel.carouselType === 'program-card'" />
          <StoryCard :item="item" v-if="carousel.carouselType === 'story-card'"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import $ from "jquery";
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import ProgramCard from './ProgramCard.vue'

export default {
  props: {
    sectionId: {
      type: String,
      required: true
    },
    hasBackground: {
      type: Boolean,
      required: false,
      default: false
    },
    carousel: {
      type: Object,
      required: true
    },
    title: {
      type: String,
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
    ProgramCard
  },
  mounted() {
    $('.slick-carousel').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            variableWidth: true,
            slidesToScroll: 1,
          }
        },
      ]
    });
      
  }
};

</script>
