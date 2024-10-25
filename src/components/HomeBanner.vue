<template>
  <section :id="sectionId" class="home-banner-section">
    <div class="container container-fluid">
      <div class="flex">
        <div class="home-banner-section__text-content">
          <h1 class="home-banner-section__heading">
            {{ banner.header }}
            <span class="highlight-container">
              <span v-for="item in banner.images" class="highlight">{{ item.text }}.</span>
            </span>
          </h1>
          <p class="home-banner-section__description">{{ banner.description }}</p>
        </div>
        <div class="home-banner-section__image-content">
          <div v-for="item in banner.images" class="home-banner-section__image">
            <img :src="item.image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// import $ from "jquery";
// Import Swiper Vue.js components
//  import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
  props: {
    sectionId: {
      type: String,
      required: true
    },
    banner: {
      type: Object,
      required: true
    },
  },

  mounted() {
    const txts = document.querySelector(".highlight-container").children,
      txtsLen = txts.length;
    let index = 0;
    const textInTimer = 3000,
      textOutTimer = 2800;

    function animateText() {
      for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
      }
      txts[index].classList.add("text-in");

      setTimeout(function () {
        txts[index].classList.add("text-out");
      }, textOutTimer)

      setTimeout(function () {

        if (index == txtsLen - 1) {
          index = 0;
        }
        else {
          index++;
        }
        animateText();
      }, textInTimer);
    }

    window.onload = animateText;
  }

};

</script>
