<template>
  <section :id="sectionId" class="py-5">
    <div class="container">
      <h3>{{ title }}</h3>
      <swiper
        class="swiper swiper-cards"
        :modules="modules"
        :space-between="30"
        slides-per-view="auto"
        :slides-per-group="3"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="item in cards" class="card" style="width: 300px">
          <div class="card-item" >
            <div class="card-image">
              <span class="card-tag">{{ item.tag }}</span>
            </div>
            <div class="card-footer">
              <div class="card-description" v-html="item.description"></div>
              <div class="card-action">
                <a href="#">{{ item.cta}} <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
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
    title: {
      type: String,
      required: true
    },
    cards: {
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