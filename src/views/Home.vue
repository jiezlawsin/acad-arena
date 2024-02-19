<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination, Autoplay } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'

  export default defineComponent({
    name: 'home',
    title: 'Home',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        banners: [
          {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el metus et just aliquet Inter suscipit.',
            cta: 'CTA Here'
          },
          {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..',
            cta: 'CTA Here'
          },
          {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..',
            cta: 'CTA Here'
          },
        ],
        programs: [
          {
            tag: 'Lorem Ipsum',
            description: '<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
            cta: 'CTA Here'
          },
          {
            tag: 'LLL Ipsum',
            description: '<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
            cta: 'CTA Here'
          },
          {
            tag: 'SSS Ipsum',
            description: '<b>AAA ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
            cta: 'CTA Here'
          },
          {
            tag: 'SSS Ipsum',
            description: '<b>SDD ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
            cta: 'CTA Here'
          },
          {
            tag: 'Lorem Ipsum',
            description: '<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
            cta: 'CTA Here'
          },
        ]
      };
    },
    setup() {
      return {
        modules: [Pagination, Autoplay]
      }
    }
  })

</script>


<template>
  <main>
    <swiper class="swiper banner-swiper" style="height: 350px" :modules="modules" :pagination="{ clickable: true }" :autoplay="{ delay: 5500 }">
      <swiper-slide v-for="banner of banners" class="slide">
        <div class="banner-swiper-content container flex flex-justify-center flex-align-center flex-column">
            <div class="banner-swiper-html" v-html="banner.content"></div>
            <a href="#" class="btn btn-dark btn-lg">{{ banner.cta }}</a>
        </div>
      </swiper-slide>
    </swiper>
    <section id="OurPrograms" class="py-5">
      <div class="container">
        <h3>Our Programs</h3>
        <swiper
          class="swiper swiper-cards"
          :modules="modules"
          :space-between="30"
          :slides-per-view="3"
          :slides-per-group="3"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="item in programs" class="card">
            <div class="card-item">
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
    <section id="OurCompany" class="pt-0 py-5">
      <div class="container">
        <h3>Our Company</h3>
        <div class="row">
          <div class="col-md-6">
            <br>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem dolore quasi rem impedit necessitatibus iusto perferendis ratione dignissimos maiores ea porro quidem temporibus, deleniti aliquam molestias officia. Odit, eligendi.</p>
          </div>
          <div class="col-md-6">
            <div class="grid grid-stats">
              <div class="number">+123</div>
              <div class="name">Events Supported</div>
            </div>
            <div class="grid grid-stats">
              <div class="number">+123</div>
              <div class="name">Events Supported</div>
            </div>
            <div class="grid grid-stats">
              <div class="number">+123K</div>
              <div class="name">Events Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
