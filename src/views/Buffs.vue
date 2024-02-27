<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../components/Banner.vue'
import CarouselCards from '../components/CarouselCards.vue'
import Features from '../components/Features.vue'
import Newsletter from '../components/Newsletter.vue'
import NumberedFeatures from '../components/NumberedFeatures.vue'
import BuffFeatures from '../components/BuffFeatures.vue'

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    Banner,
    CarouselCards,
    Features,
    Newsletter,
    NumberedFeatures,
    BuffFeatures
  },
  data() {
    return {
      sections: [
        {
          component: 'banner',
          name: 'BuffsBanner',
          height: '350px',
          banners: [
            {
              header: 'Learn by Doing',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el metus et just aliquet Inter suscipit.',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: '/acad-arena/src/assets/home/banner.jpg',
            }
          ]
        },
        {
          component: 'carousel-cards',
          name: 'WhoCanApply',
          title: 'Who Can Apply?',
          description: 'Pa-sponsor po? We gotchu whether online or offline, student or teacher, from Luzon, Visayas and Mindanao!',
          background: false,
          noTopPadding: false,
          carousel: {
            title: 'Join the #NotJustPlay Movement',
            carouselType: 'cube-card',
          },
          cards: [
            {
              tag: 'College or High School Students',
              backgroundImage: 'https://picsum.photos/200'
            },
            {
              tag: 'Teachers & Administrators',
              backgroundImage: 'https://picsum.photos/200'
            },
            {
              tag: 'NGOs or LGUs',
              backgroundImage: 'https://picsum.photos/200'
            },
          ],
        },
        {
          component: 'numbered-features',
          name: 'HowDoesItWork',
          data: {
            sectionClass: 'pb-5',
            title: 'How Does It Work',
            features: [
              {
                title: 'Find Your Match',
                description: 'Match your event with our buff requirements.'
              },
              {
                title: 'Apply for a Buff',
                description: 'Flex your event! Our buffs are limited.'
              },
              {
                title: 'Execute Your Event',
                description: 'Receive the buff & complete the requirements.'
              },
              {
                title: 'Send Your Report',
                description: 'Show & tell! We’ll celebrate with you.'
              },
            ]
          }
        },
        {
          component: 'carousel-cards',
          name: 'AvailableBuffs',
          title: 'Available Buffs',
          description: 'We have limited buffs per month! <a href="#">Check out our buffs marketplace for a full list.</a>',
          background: true,
          noTopPadding: false,
          carousel: {
            carouselType: 'program-card',
          },
          cards: [
            {
              tag: 'Online/Offline',
              title: 'UniPin MLBB Tournament Buff',
              content: '<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
              cta: 'CTA Here',
              backgroundImage: 'https://picsum.photos/602/383'
            },
            {
              tag: 'Offline Only',
              content: 'Lorem ipsum—dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
              cta: 'CTA Here',
              backgroundImage: 'https://picsum.photos/602/383'
            },
            {
              tag: 'Online Only',
              content: '<b>AAA ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
              cta: 'CTA Here',
              backgroundImage: 'https://picsum.photos/602/383'
            },
          ]
        },
      ],
    };
  },
})
</script>


<template>
  <main>
    <div v-for="section in sections">
      <Banner v-if="section.component === 'banner'" :section-id="section.name" :banners="section.banners" />
      <CarouselCards v-if="section.component === 'carousel-cards'" 
        :no-top-padding="section.noTopPadding"
        :has-background="section.background" 
        :description="section.description"  
        :title="section.title"  
        :title-class="section.titleClass" 
        :section-id="section.name" 
        :cards="section.cards" 
        :carousel="section.carousel" />
      <Features v-if="section.component === 'features'" :carousel="section.carousel" :section-id="section.name" :data="section.data" />
      <Newsletter v-if="section.component === 'newsletter'" :section-id="section.name" :newsletter="section.newsletter" />
      <NumberedFeatures v-if="section.component === 'numbered-features'" :section-id="section.name" :data="section.data" />
    </div>
  </main>
</template>
