<template>
  <section :id="sectionId" class="home-banner-section">
    <div id="home-banner-image-slide" class="home-banner-image-slide"
      :style="{ backgroundImage: `url(${currentBackground})` }"></div>
    <div class="container container-fluid">
      <div class="flex">
        <div class="home-banner-section__text-content">
          <h1 class="home-banner-section__heading">
            {{ banner.header }}
            <span class="highlight-container">
              <span v-for="item in banner.images" class="highlight" :data-img="item.image">{{ item.text }}.</span>
            </span>
          </h1>
          <p class="home-banner-section__description">{{ banner.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import $ from "jquery";
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
  data() {
    return {
      currentBackground: "",
    }
  },

  mounted() {
    this.currentBackground = this.banner?.images[0].image;
    const txts = document.querySelector(".highlight-container").children,
      txtsLen = txts.length;
    let index = 0;
    const textInTimer = 5000,
      textOutTimer = 4800;

    function animateText() {
      // this.currentBackground = this.banner?.images[index].image;
      for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
      }
      txts[index].classList.add("text-in");
      let bg = $(txts[index]).data('img')
      console.log(bg);
      $('#home-banner-image-slide').css('background-image', `url(${bg})`);

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
