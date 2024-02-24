<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../components/Banner.vue'
import HeaderBanner from '../components/HeaderBanner.vue'
import Carousel from '../components/Carousel.vue'
import Stories from '../components/Stories.vue'
import Newsletter from '../components/Newsletter.vue'
import Features from '../components/Features.vue'
import Listing from '../components/Listing.vue'
import Timeline from '../components/Timeline.vue'
import Cards from '../components/Cards.vue'
import Violator from '../components/Violator.vue'

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    Banner,
    HeaderBanner,
    Carousel,
    Stories,
    Newsletter,
    Features,
    Listing,
    Timeline,
    Cards,
    Violator,
  },
  data() {
    return {
      sections: [
        {
          component: 'banner',
          name: 'CompeteBanner',
          banners: [
            {
              header: 'Lorem ipsum dolor sit',
              content: 'Lorem ipsum dolor sit amet',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: 'https://placekitten.com/640/360'
            },
            {
              header: 'Lorem ipsum dolor sit',
              content: 'Lorem ipsum dolor sit amet',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: 'https://placekitten.com/640/360'
            },
            {
              header: 'Lorem ipsum dolor sit',
              content: 'Lorem ipsum dolor sit amet',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: 'https://placekitten.com/640/360'
            },
          ]
        },
        {
          component: 'headerbanner',
          name: 'HeaderBannerComponent',
          banner: {
            header: 'Titles We Support',
            isDark: true,
          }
        },
        {
          component: 'features',
          name: 'FeaturesComponent',
          data: {
            title: 'Learn By Doing',
            description: '<p>Turn your hobby to something more—learn a new skill, bond with friends, add to your resume, a paid gig, your difference maker for your first job.</p><p>Here are departments who often partner wish us:</p>',
            features: [
              'Extracurricular Enrichment',
              'Sports Department', 
              'Alternative Learning Programs',
              'Internships & Placement',
            ]
          }
        },
        {
          component: 'listing',
          name: 'ListingComponent',
          data: {
            title: 'Learn By Doing',
            description: '<p>Turn your hobby to something more—learn a new skill, bond with friends, add to your resume, a paid gig, your difference maker for your first job.</p><p>Here are departments who often partner wish us:</p>',
            features: [
              {
                title: 'Lorem Ipsum Dolor Sit Amet',
                description: 'Lorem ipsum dolor sit amet.'
              },
              {
                title: 'Lorem Ipsum Dolor Sit Amet',
                description: 'Lorem ipsum dolor sit amet.'
              },
              {
                title: 'Lorem Ipsum Dolor Sit Amet',
                description: 'Lorem ipsum dolor sit amet.'
              },
              {
                title: 'Lorem Ipsum Dolor Sit Amet',
                description: 'Lorem ipsum dolor sit amet.'
              },
              {
                title: 'Lorem Ipsum Dolor Sit Amet',
                description: 'Lorem ipsum dolor sit amet.'
              },
            ]
          }
        },
        {
          component: 'timeline',
          name: 'TimelineComponent',
          data: {
            title: 'Learn By Doing',
            description: '<p>Turn your hobby to something more—learn a new skill, bond with friends, add to your resume, a paid gig, your difference maker for your first job.</p><p>Here are departments who often partner wish us:</p>',
            features: [
              {
                title: 'Lorem Ipsum Dolor Sit Amet',
                description: 'Lorem ipsum dolor sit amet.'
              },
              {
                title: 'Lorem Ipsum Dolor Sit Amet',
                description: 'Lorem ipsum dolor sit amet.'
              },
              {
                title: 'Lorem Ipsum Dolor Sit Amet',
                description: 'Lorem ipsum dolor sit amet.'
              },
              {
                title: 'Lorem Ipsum Dolor Sit Amet',
                description: 'Lorem ipsum dolor sit amet.'
              },
              {
                title: 'Lorem Ipsum Dolor Sit Amet',
                description: 'Lorem ipsum dolor sit amet.'
              },
            ]
          }
        },
        {
          component: 'cards',
          name: 'CardsComponent',
          data: {
            title: 'Who Can Apply',
            cards: [
              {
                title: 'Students',
                image: 'https://placekitten.com/317/317'
              },
              {
                title: 'Community Leader',
                image: 'https://placekitten.com/317/317'
              },
              {
                title: 'Teachers',
                image: 'https://placekitten.com/317/317'
              },
              {
                title: 'NGOs & LGUs',
                image: 'https://placekitten.com/317/317'
              },
            ]
          }
        },
        {
          component: 'carousel',
          name: 'CarouselComponent',
          carousel: {
            title: 'Join the #NotJustPlay Movement',
            carouselType: 'cube-card',
          },
          cards: [
            {
              header: 'Lorem ipsum dolor sit',
              name: 'Xavier "Xavie8k" Juan',
              tag: 'The Supportive Teacher',
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
              backgroundImage: 'https://placekitten.com/317/317'
            },
            {
              header: 'Lorem ipsum dolor sit',
              name: 'Xavier "Xavie8k" Juan',
              tag: 'The Supportive Teacher',
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
              backgroundImage: 'https://placekitten.com/317/317'
            },
            {
              header: 'Lorem ipsum dolor sit',
              name: 'Xavier "Xavie8k" Juan',
              tag: 'The Supportive Teacher',
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
              backgroundImage: 'https://placekitten.com/317/317'
            },
          ],
          cta: {
            ctaLink: '#',
            ctaText: 'Reach Out to Us'
          },
        },
        {
          component: 'stories',
          name: 'StoriesComponent',
          carousel: {
            title: 'News & Stories',
            carouselType: 'story-card',
          },
          cards: [
            {
              header: 'Lorem ipsum dolor sit',
              content: 'Lorem ipsum dolor sit amet',
              ctas: [
                {
                  ctaText: 'Apply now',
                  ctaLink: '',
                },
                {
                  ctaText: 'Learn more',
                  ctaLink: '',
                }
              ],
              backgroundImage: 'https://placekitten.com/602/383'
            },
            {
              header: 'Lorem ipsum dolor sit',
              content: 'Lorem ipsum dolor sit amet',
              ctas: [
                {
                  ctaText: 'Apply now',
                  ctaLink: '',
                },
                {
                  ctaText: 'Learn more',
                  ctaLink: '',
                }
              ],
              backgroundImage: 'https://placekitten.com/602/383'
            },
            {
              header: 'Lorem ipsum dolor sit',
              content: 'Lorem ipsum dolor sit amet',
              ctas: [
                {
                  ctaText: 'Apply now',
                  ctaLink: '',
                },
                {
                  ctaText: 'Learn more',
                  ctaLink: '',
                }
              ],
              backgroundImage: 'https://placekitten.com/602/383'
            },
          ],
          cta: {
            ctaLink: '#',
            ctaText: 'Reach Out to Us'
          },
        },
        {
          component: 'newsletter',
          name: 'NewsletterComponent',
          newsletter: {
            title: 'We are opening scholarships & classes soon!',
            description: 'Get the news first! Subscribe to our newsletter or join our Discord Server.',
          },
        },
        {
          component: 'violator',
          name: 'ViolatorComponent',
          data: {
            description: 'Deadline of Applications February 22, 2024',
            cta: {
              ctaText: 'Apply',
              ctaLink: '#'
            },
          },
        },
      ],
    };
  }
})
</script>

<template>
  <main>
    <div v-for="section in sections">
      <Banner v-if="section.component === 'banner'" :section-id="section.name" :banners="section.banners" />
      <HeaderBanner v-if="section.component === 'headerbanner'" :section-id="section.name" :banner="section.banner" />
      <Carousel v-if="section.component === 'carousel'" :section-id="section.name" :cards="section.cards" :carousel="section.carousel" />
      <Stories v-if="section.component === 'stories'" :section-id="section.name" :cards="section.cards" :carousel="section.carousel" />
      <Newsletter v-if="section.component === 'newsletter'" :section-id="section.name" :newsletter="section.newsletter" />
      <Features v-if="section.component === 'features'" :section-id="section.name" :data="section.data" />
      <Listing v-if="section.component === 'listing'" :section-id="section.name" :data="section.data" />
      <Timeline v-if="section.component === 'timeline'" :section-id="section.name" :data="section.data" />
      <Cards v-if="section.component === 'cards'" :section-id="section.name" :data="section.data" />
      <Violator v-if="section.component === 'violator'" :section-id="section.name" :data="section.data" />
    </div>
  </main>
</template>
