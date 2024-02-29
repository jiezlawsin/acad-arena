<template>
  <section :id="sectionId" class="carousel-cards-section" :class="{'hasBg': hasBackground, 'py-5': !noTopPadding, 'pb-5': noTopPadding}">
    <div class="container">
      <h2 class="section-title" :class="titleClass ? titleClass : ''">{{ title }}</h2>
      <p class="section-description content" v-if="description" v-html="description"></p>
      <div class="slick-carousel" :class="sectionId + '-slick'">
        <div v-for="item in cards" class="card">
          <ProgramCard :item="item" v-if="carousel.carouselType === 'program-card'" />
          <CubeCard :item="item" v-if="carousel.carouselType === 'cube-card'"/>
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
import StoryCard from './StoryCard.vue'
import CubeCard from './CubeCard.vue'

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
    titleClass: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    noTopPadding: {
      type: Boolean,
      required: false,
      default: false
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
    StoryCard,
    CubeCard
  },
  mounted() {
    console.log(this.carousel.carouselType)
    if (this.carousel.carouselType === 'program-card') {
      $('.' + this.sectionId + '-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              variableWidth: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });
    }
    if (this.carousel.carouselType === 'cube-card') {
      $('.' + this.sectionId + '-slick').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: false,
              variableWidth: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });
    }
    if (this.carousel.carouselType === 'story-card') {
      $('.' + this.sectionId + '-slick').slick({
        infinite: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              infinite: true,
              variableWidth: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });
    }
    
  }
};

</script>
