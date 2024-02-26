<script lang="ts">
import { defineComponent } from 'vue'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import Banner from '../components/Banner.vue'
import CarouselCards from '../components/CarouselCards.vue'
import Features from '../components/Features.vue'

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    Banner,
    CarouselCards,
    Features
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
              header: 'Lorem Ipsum Dolor',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el metus et just aliquet Inter suscipit.',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: '/acad-arena/src/assets/home/banner.jpg',
            }
          ]
        },
        {
          component: 'carousel-cards',
          name: 'OurPrograms',
          title: 'Our Programs',
          background: true,
          carousel: {
            carouselType: 'program-card',
          },
          cards: [
            {
              tag: 'Lorem Ipsum',
              content: '<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
              cta: 'CTA Here'
            },
            {
              tag: 'LLL Ipsum',
              content: '<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
              cta: 'CTA Here'
            },
            {
              tag: 'SSS Ipsum',
              content: '<b>AAA ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
              cta: 'CTA Here'
            },
            {
              tag: 'SSS Ipsum',
              content: '<b>SDD ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
              cta: 'CTA Here'
            },
            {
              tag: 'Lorem Ipsum',
              content: '<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
              cta: 'CTA Here'
            },
          ]
        },
        {
          component: 'features',
          name: 'FeaturesComponent',
          data: {
            title: 'Learn by Doing',
            description: '<p>Turn your hobby to something more—learn a new skill, bond with friends, add to your resume, a paid gig, your difference maker for your first job.</p><p>Here are departments who often partner wish us:</p>',
            features: [
              'Extracurricular Enrichment',
              'Sports Department', 
              'Alternative Learning Programs',
              'Internships & Placement',
            ]
          }
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
      <CarouselCards v-if="section.component === 'carousel-cards'" :has-background="section.background" :title="section.title"  :section-id="section.name" :cards="section.cards" :carousel="section.carousel" />
      <Features v-if="section.component === 'features'" :carousel="section.carousel" :section-id="section.name" :data="section.data" />
    </div>
    <!-- <section id="OurCompany" class="pt-0 py-5">
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
    </section> -->
  </main>
</template>
