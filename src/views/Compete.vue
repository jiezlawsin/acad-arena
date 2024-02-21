<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../components/Banner.vue'
import HeaderBanner from '../components/HeaderBanner.vue'
import Carousel from '../components/Carousel.vue'
import Stories from '../components/Stories.vue'
import Newsletter from '../components/Newsletter.vue'

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    Banner,
    HeaderBanner,
    Carousel,
    Stories,
    Newsletter,
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
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
              backgroundImage: 'https://placekitten.com/317/317'
            },
            {
              header: 'Lorem ipsum dolor sit',
              name: 'Xavier "Xavie8k" Juan',
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
              backgroundImage: 'https://placekitten.com/317/317'
            },
            {
              header: 'Lorem ipsum dolor sit',
              name: 'Xavier "Xavie8k" Juan',
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
    </div>
  </main>
</template>
