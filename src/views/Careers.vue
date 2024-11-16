<script lang="ts">
import { defineComponent } from 'vue'
import HomeBanner from '../components/HomeBanner.vue'
import CTABreaker from '../components/CTABreaker.vue'
import CareersListing from '../components/CareersListing.vue'
import { CareersList } from '../mock/careers'

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    HomeBanner,
    CTABreaker,
    CareersListing,
  },
  data() {
    return {
      sections: [
        {
          component: 'home-banner',
          name: 'CareersBanner',
          banner: {
            header: 'Boost Your Experience \n in',
            description: 'Everyone just needs a little boost. Discover yourself in new skills or double down on what you already know.',
            images: [
              {
                image: '/images/careers/ESPORTS.jpg',
                text: 'Esports', 
              },
              {
                image: '/images/careers/PSYCHOLOGY.jpg',
                text: 'Psychology',
              },
              {
                image: '/images/careers/DESIGN.jpg',
                text: 'Design',
              },
            ],
          }
        },
        {
          name: 'CareersListing',
          component: 'careers-listing',
          data: {
            title: 'Available BoostCamps',
            description: 'Different learning experiences for different learners.',
            categories: [
              'mentorships',
              'classes',
              'quizzes',
              'pitches',
              'research',
            ],
            list: CareersList
          }
        },
        {
          component: 'cta-breaker',
          name: 'CTABreaker',
          data: {
            text: 'Co-create Classes with Us!',
            cta: {
              text: 'Contact Us',
              href: 'https://acadarenaedu.notion.site/1401c4eaf312803bbb5bfeaa527fa1a8?pvs=105'
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
      <CareersListing v-if="section.component === 'careers-listing'" 
        :section-id="section.name" 
        :title="section.data?.title"
        :description="section.data?.description" 
        :categories="section.data?.categories" 
        :list="section.data?.list" />
      <CTABreaker v-if="section.component === 'cta-breaker'" :section-id="section.name" :data="section.data" />
    </div>
  </main>
</template>
