<script lang="ts">
import { defineComponent } from 'vue'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import Banner from '../components/Banner.vue'

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    Banner
  },
  data() {
    return {
      sections: [
        {
          component: 'banner',
          name: 'HomeBanner',
          height: '350px',
          banners: [
            {
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el metus et just aliquet Inter suscipit.',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: ''
            },
            {
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el metus et just aliquet Inter suscipit.',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: ''
            },
            {
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el metus et just aliquet Inter suscipit.',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: ''
            },
          ]
        }
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
      ],
      testimonials: [
        {
          tag: 'Lorem Ipsum Dolor',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."'
        },
        {
          tag: 'Lorem Ipsum Dolor',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."'
        },
        {
          tag: 'Lorem Ipsum Dolor',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."'
        },
      ],
      news: [
        {
          tag: 'Lorem Ipsum Dolor',
          title: 'Lorem Ipsum Dolor Sit Amet',
          description: 'consectetur adipiscing elit'
        },
        {
          tag: 'Lorem Ipsum Dolor',
          title: 'Lorem Ipsum Dolor Sit Amet',
          description: 'consectetur adipiscing elit'
        },
        {
          tag: 'Lorem Ipsum Dolor',
          title: 'Lorem Ipsum Dolor Sit Amet',
          description: 'consectetur adipiscing elit'
        },
      ],
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
    <div v-for="section in sections">
      <Banner v-if="section.component === 'banner'" :section-id="section.name" :banners="section.banners" />
    </div>
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
          <div class="col-sm-6">
            <br>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem dolore quasi rem impedit necessitatibus iusto perferendis ratione dignissimos maiores ea porro quidem temporibus, deleniti aliquam molestias officia. Odit, eligendi.</p>
          </div>
          <div class="col-sm-6">
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
    <section id="Testimonials" class="py-5" style="background: #D9D9D9">
      <div class="container">
        <h3>Join the #NotJustPlay Movement</h3>
        <swiper
          class="swiper swiper-cards"
          :modules="modules"
          :space-between="30"
          :slides-per-view="3"
          :slides-per-group="3"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="item in testimonials" class="card card-testimonial">
            <div class="card-item">
              <div class="card-image">
                <span class="card-tag">{{ item.tag }}</span>
              </div>
              <div class="card-footer">
                <div class="card-description" v-html="item.content"></div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section id="Newsletter" class="py-5">
      <div class="container text-center">
        <h3>AA Bulletin</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum obcaecati eaque facilis, beatae rem voluptas? Deleniti nesciunt a nisi saepe quod labore repellat, libero in hic rem recusandae esse blanditiis.</p>
        <br>
        <a href="#" class="btn btn-dark btn-lg">CTA Here</a>
      </div>
    </section>
    <section id="News" class="py-5">
      <div class="container">
        <h3>News & Stories</h3>
        <swiper
          class="swiper swiper-cards"
          :modules="modules"
          :space-between="30"
          :slides-per-view="3"
          :slides-per-group="3"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="item in news" class="card card-news">
            <div class="card-item">
              <div class="card-image">
                <span class="card-tag">{{ item.tag }}</span>
              </div>
              <div class="card-footer">
                <div class="card-title" v-html="item.title"></div>
                <div class="card-description" v-html="item.description"></div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </main>
</template>
