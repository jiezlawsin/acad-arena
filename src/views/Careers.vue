<script lang="ts">
import { defineComponent } from 'vue'
import HomeBanner from '../components/HomeBanner.vue'
import CTABreaker from '../components/CTABreaker.vue'

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    HomeBanner,
    CTABreaker,
  },
  data() {
    return {
      sections: [
        {
          component: 'home-banner',
          name: 'HomeBanner',
          banner: {
            header: 'Level-Up Your Extracurriculars \n in',
            description: 'AcadArena Edu gamifies your extracurriculars inside and outside of school! Get cool loot for your campus events, join competitions and make friends with the same hobby!',
            images: [
              {
                image: '/images/HOME/IMG_8437.jpg',
                text: 'Esports',
              },
              {
                image: '/images/HOME/IMG_0355.jpg',
                text: 'Gamehaus',
              },
              {
                image: '/images/HOME/IMG_9935.jpg',
                text: 'Reyun',
              },
            ],
          }
        },
        {
          component: 'cta-breaker',
          name: 'CTABreaker',
          data: {
            text: 'Help us improve our buffs',
            cta: {
              text: 'Feedback',
              href: '/careers'
            }
          }
        }
      ],
    };
  },
})
</script>


<template>
  <main>
    <div v-for="section in sections">
      <HomeBanner v-if="section.component === 'home-banner'" :section-id="section.name" :banner="section.banner" />
      <CTABreaker v-if="section.component === 'cta-breaker'" :section-id="section.name" :data="section.data" />
    </div>
  </main>
</template>
