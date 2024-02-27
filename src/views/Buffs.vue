<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../components/Banner.vue'
import CarouselCards from '../components/CarouselCards.vue'
import Features from '../components/Features.vue'
import Newsletter from '../components/Newsletter.vue'
import NumberedFeatures from '../components/NumberedFeatures.vue'
import BuffFeatures from '../components/BuffFeatures.vue'
import IconedFeatures from '../components/IconedFeatures.vue'
import FAQ from '../components/FAQ.vue'
import ToBuffMarketplace from '../components/ToBuffMarketplace.vue'

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    Banner,
    CarouselCards,
    Features,
    Newsletter,
    NumberedFeatures,
    BuffFeatures,
    IconedFeatures,
    FAQ,
    ToBuffMarketplace,
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
          component: 'buff-features',
          name: 'EarlyBirdGetsTheBuff',
          data: {
            sectionClass: 'py-5',
            left: {
              title: 'Early Bird Gets the Buff',
              content: '<a href="#">Apply as early as four (4) months before your event.</a> Our Buff Coordinators will contact you within 3-5 working days."',
              cta: {
                url: '',
                text: 'Apply Now'
              }
            },
            right:{
              title: 'We buff up any event for the youth!',
              features: [
                {
                  title: 'Online & Offline Esports Tournaments',
                },
                {
                  title: 'Club Events (e.g. Recruitment Week, General Assemblys etc.)',
                },
                {
                  title: 'Academic Celebrations (e.g. Foundation Days & College Weeks)',
                },
                {
                  title: 'City-wide or Region-wide Festivals (e.g. Fiestas)  ',
                },
              ]
            }
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
        {
          component: 'iconed-features',
          name: 'EventsHappenAllYearNationwide',
          data: {
            sectionClass: 'pb-5',
            title: 'Events Happen All Year Nationwide',
            features: [
              {
                title: '+150 Clubs Seeded',
              },
              {
                title: '~XXX Events Supported',
              },
              {
                title: '+150 Scholars Supported',
              },
              {
                title: '+300 Teams Competed',
              },
            ]
          }
        },
        {
          component: 'faq',
          name: 'BuffFAQ',
          data: {
            sectionClass: 'pb-5',
            image: 'https://picsum.photos/500/614',
            title: 'Frequently Asked Questions',
            faqs: [
              {
                question: 'Lorem ipsum dolor sit amet?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
              },
              {
                question: 'Lorem ipsum dolor sit amet?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
              },
              {
                question: 'Lorem ipsum dolor sit amet?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
              },
              {
                question: 'Lorem ipsum dolor sit amet?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
              },
              {
                question: 'Lorem ipsum dolor sit amet?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
              },
            ]
          }
        },
        {
          component: 'buff-marketplace',
          name: 'BuffMarketplace',
          data: {
            sectionClass: 'py-5',
            title: 'We have limited buffs per month.',
            content: '<a>Accepting events happening between March and June 2024.</a> Our Buff Coordinators will contact you within 3-5 working days.',
          }
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
      <BuffFeatures v-if="section.component === 'buff-features'" :section-id="section.name" :data="section.data" />
      <IconedFeatures v-if="section.component === 'iconed-features'" :section-id="section.name" :data="section.data" />
      <FAQ v-if="section.component === 'faq'" :section-id="section.name" :data="section.data" />
      <ToBuffMarketplace v-if="section.component === 'buff-marketplace'" :section-id="section.name" :data="section.data" />
    </div>
  </main>
</template>
