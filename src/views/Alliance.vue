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
  name: 'alliance',
  title: 'Alliance',
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
          name: 'AllianceBanner',
          banners: {
            header: 'Lorem Ipsum Dolor',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el metus et just aliquet Inter suscipit.',
            ctaText: 'CTA Here',
            ctaLink: '#',
            images: [
              'https://picsum.photos/1080/?blur=2&random=3&grayscale',
              'https://picsum.photos/1080/?blur=2&random=4&grayscale'
            ], 
          }
        },
        {
          component: 'carousel-cards',
          name: 'JoinTheAlliance',
          title: 'Join the Alliance',
          description: 'Any teacher or student can start a community or club in your campus! Get access to perks and resources to get into esports.',
          background: true,
          noTopPadding: false,
          carousel: {
            carouselType: 'program-card',
          },
          cards: [
          {
              image: '/acad-arena/images/program2.jpg',
              description: 'No club? No problem. We will help you set up a community that may become a club someday.',
              tag: 'For Students',
              cta: 'Start Here',
              url: 'https://www.challengermode.com/s/AcadArenaPH',
              external: true
            },
            {
              image: '/acad-arena/images/program1.jpg',
              description: 'Eng club, anime club, CS, IT etc. All official school clubs can join the Alliance.',
              tag: 'For Clubs',
              cta: 'Join Here',
              url: 'https://www.challengermode.com/s/AcadArenaPH',
              external: true
            },
            {
              image: 'https://picsum.photos/200',
              description: 'Aspiring esports club advisers, student team coaches, or a supportive OSA - we’re here to help.',
              tag: 'For Teachers',
              cta: 'Partner Up',
              url: 'https://www.challengermode.com/s/AcadArenaPH',
              external: true
            },
          ]
        },
        {
          component: 'iconed-features',
          name: 'Last5Years',
          data: {
            sectionClass: 'pb-5 ',
            title: 'A Growing Community the Last 5 Years',
            features: [
              {
                title: '+150 Clubs Seeded',
              },
              {
                title: '+460 Events Supported',
              },
              {
                title: '+100 Scholars Supported',
              },
              {
                title: '+470 Teams Competed',
              },
            ]
          }
        },
        {
          component: 'buff-features',
          name: 'ApplicationsOpen',
          data: {
            sectionClass: 'py-5 bg-light-gradient',
            left: {
              title: 'Applications Open till March 28!',
              content: '<a>Apply before the crushing weight of exams.</a> Our Alliance Coordinators will contact you within 3-5 working days."',
              cta: {
                url: '',
                text: 'Apply Now'
              }
            },
            right:{
              title: 'Perks you unlock',
              features: [
                {
                  title: 'Priority slots for any AcadArena Event Buff',
                },
                {
                  title: 'Exclusive or priority slots to join Alliance Games',
                },
                {
                  title: 'Access to mentorship and learning resources',
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
          name: 'WhatOurCommunitySays',
          title: 'What Our Community Says',
          // titleClass: 'text-center',
          class: 'py-5',
          hasBackground: false,
          noTopPadding: false,
          carousel: {
            carouselType: 'cube-card',
          },
          cards: [
            {
              header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim risus eget neque tincidunt, ut iaculis lorem.',
              name: 'Xavier "Xavie8k" Juan',
              tag: 'The Supportive Teacher',
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
              backgroundImage: 'https://picsum.photos/200'
            },
            {
              header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim risus eget neque tincidunt, ut iaculis lorem.',
              name: 'Xavier "Xavie8k" Juan',
              tag: 'The Supportive Teacher',
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
              backgroundImage: 'https://picsum.photos/200'
            },
            {
              header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim risus eget neque tincidunt, ut iaculis lorem.',
              name: 'Xavier "Xavie8k" Juan',
              tag: 'The Supportive Teacher',
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
              backgroundImage: 'https://picsum.photos/200'
            },
          ],
        },
        {
          component: 'carousel-cards',
          name: 'NewsAndStories',
          title: 'What Our Community Does',
          background: false,
          noTopPadding: true,
          carousel: {
            carouselType: 'story-card',
          },
          cards: [
            {
              header: 'New scholarship offers! Apply now!',
              backgroundImage: 'https://picsum.photos/602/383',
              tagDate: {
                tag: 'Adulting',
                date: 'June 23, 2024'
              }
            },
            {
              header: 'New scholarship offers! Apply now!',
              backgroundImage: 'https://picsum.photos/602/383',
              tagDate: {
                tag: 'Adulting',
                date: 'June 23, 2024'
              }
            },
            {
              header: 'New scholarship offers! Apply now!',
              backgroundImage: 'https://picsum.photos/602/383',
              tagDate: {
                tag: 'Adulting',
                date: 'June 23, 2024'
              }
            },
          ],
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
          name: 'ApplicationsOpen',
          data: {
            image: '/acad-arena/images/art4.png',
            sectionClass: 'py-5',
            title: 'Level Up Your Community.',
            content: '<a>Deadline of applications is on March 28.</a> Our Alliance Coordinators will contact you within 3-5 working days."',
            cta: {
              url: '',
              text: 'Apply Now',
              external: true
            }
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
