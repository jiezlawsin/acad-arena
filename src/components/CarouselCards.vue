<template>
  <section :id="sectionId" class="carousel-cards-section" :class="{
    hasBg: hasBackground,
    'py-5': !noTopPadding,
    'pb-5': noTopPadding,
  }">
    <div class="container">
      <div v-if="campuses">
        <div class="small-title">CAMPUSES WE'VE SUPPORTED</div>
        <div class="campuses" id="campusesSlides">
          <!-- <div class="campus-slide" v-for="campus in campuses"> -->
          <div class="campus-slide"  v-for="n in Array.from({ length: 68 }, (_, i) => i)" :key="n">
            <div class="campus-image">
              <!-- {{ n + 1 }} -->
              <img :src="`/images/campus_logo-min/${n+1}-min.png`"/>
            </div>
          </div>
        </div>
      </div>
      <h2 class="section-title" :class="titleClass ? titleClass : ''">
        <img v-if="carousel.carouselType === 'program-card'" :src="titleIcon" />
        {{ title }}
      </h2>
      <p class="section-description content" v-if="description" v-html="description"
        :class="titleClass ? titleClass : ''"></p>
      <div class="slick-carousel" :class="sectionId + '-slick'">
        <div v-for="item in cards" class="card">
          <ProgramCard :item="item" v-if="carousel.carouselType === 'program-card'" />
          <CubeCard :item="item" v-if="carousel.carouselType === 'cube-card'" />
          <StoryCard :item="item" v-if="carousel.carouselType === 'story-card'" />
          <BuffCard :item="item" v-if="carousel.carouselType === 'buff-card'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import $ from "jquery";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import ProgramCard from "./ProgramCard.vue";
import StoryCard from "./StoryCard.vue";
import CubeCard from "./CubeCard.vue";
import BuffCard from "./BuffCard.vue";

export default {
  props: {
    sectionId: {
      type: String,
      required: true,
    },
    hasBackground: {
      type: Boolean,
      required: false,
      default: false,
    },
    carousel: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    titleClass: {
      type: String,
      required: false,
    },
    titleIcon: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    noTopPadding: {
      type: Boolean,
      required: false,
      default: false,
    },
    campuses: {
      type: Object,
      required: false
    },
    cards: {
      type: Object,
      required: true,
    },
    cta: {
      type: Object,
      required: false,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    ProgramCard,
    StoryCard,
    CubeCard,
    BuffCard,
  },
  mounted() {
    console.log(this.carousel.carouselType);
    $("#" + this.sectionId + " #campusesSlides").slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      });
    if (this.carousel.carouselType === "program-card") {
      $("." + this.sectionId + "-slick").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: true,
              variableWidth: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    if (this.carousel.carouselType === "buff-card") {
      $("." + this.sectionId + "-slick").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: true,
              variableWidth: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    if (this.carousel.carouselType === "cube-card") {
      $("." + this.sectionId + "-slick").slick({
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
            },
          },
        ],
      });
    }
    if (this.carousel.carouselType === "story-card") {
      $("." + this.sectionId + "-slick").slick({
        infinite: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              dots: true,
              infinite: true,
              variableWidth: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }

    let maxHeight = 0;
    $('.slick-slide .card-text-content').css('height', 'auto');
    $('.slick-slide .card-text-content').each(function() {
      const slideHeight = $(this).outerHeight();
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight;
      }
    });
    $('.slick-slide .card-text-content').css('height', maxHeight + 'px');

  },
};
</script>
