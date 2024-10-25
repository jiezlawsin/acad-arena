<template>
  <section class="buffs-banner" :id="sectionId">
    <div class="buff-banner-background" :style="{ backgroundImage: `url(${currentBackground})` }"></div>
    <div class="container" id="buff-banner-cards-slick">
      <div class="buff-banner-card-slide">
        <div class="buff-banner-card" style="border-color: #FF7A7A">
          <div class="content">
            <div class="title">#SHAPPS Party Buff</div>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt
              ut labore et dolore.</div>
            <div class="action">
              <a href="#" target="_blank" style="color: #FF7A7A">
                October Cycle Open &nbsp;
                <img src="/images/icons/arrow-left.svg" alt="" class="icon">
              </a>
            </div>
          </div>
          <div class="image"></div>
        </div>
      </div>
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
  data() {
    return {
      currentBackground: "",
    }
  },
  mounted() {
    const bannerImages: any = this.banners.images;
    this.currentBackground = bannerImages[0].backgroundImage;

    $('#buff-banner-cards-slick').slick({
      dots: false,
      infinite: true,
      speed: 350,
      fade: false,
      cssEase: 'linear',
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
    });
    $("#buff-banner-cards-slick").on("beforeChange", (event: any, slick: any, currentSlide: any, nextSlide: string | number) => {
      this.currentBackground = bannerImages[nextSlide];
      console.log(this.currentBackground);
    });
  }
};

</script>