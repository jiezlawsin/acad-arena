<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../components/Banner.vue'

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    Banner
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
    </div>
  </main>
</template>