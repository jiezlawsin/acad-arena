<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../components/Banner.vue'
import HeaderBanner from '../components/HeaderBanner.vue'

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    Banner,
    HeaderBanner,
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
              backgroundImage: ''
            },
            {
              header: 'Lorem ipsum dolor sit',
              content: 'Lorem ipsum dolor sit amet',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: ''
            },
            {
              header: 'Lorem ipsum dolor sit',
              content: 'Lorem ipsum dolor sit amet',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: ''
            },
          ]
        },
        {
          component: 'headerbanner',
          name: 'HeaderBannerComponent',
          banner: {
            header: 'Titles We Support',
            isDark: false,
          }
        }
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
    </div>
  </main>
</template>
