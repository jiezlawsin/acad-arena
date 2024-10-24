<script lang="ts">
import { defineComponent } from 'vue'
import HomeBanner from '../components/HomeBanner.vue'
import CTABreaker from '../components/CTABreaker.vue'
import CareersListing from '../components/CareersListing.vue'

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
          name: 'careers-listing',
          component: 'CareersListing',
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
            list: [
              {
                id: 'branding-workshop',
                name: 'Branding Workshop',
                tag: 'with overdrive studios',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                image: '/images/program2.jpg',
                schedule: 'Nov-Dec',
                participants: '40-200+',
                level: 'College',
                course: 'Design Major',
              },
              {
                id: 'branding-workshop',
                name: 'Branding Workshop',
                tag: 'with overdrive studios',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                image: '/images/program2.jpg',
                schedule: 'Nov-Dec',
                participants: '40-200+',
                level: 'College',
                course: 'Design Major',
              },
              {
                id: 'branding-workshop',
                name: 'Branding Workshop',
                tag: 'with overdrive studios',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                image: '/images/program2.jpg',
                schedule: 'Nov-Dec',
                participants: '40-200+',
                level: 'College',
                course: 'Design Major',
              },
              {
                id: 'branding-workshop',
                name: 'Branding Workshop',
                tag: 'with overdrive studios',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                image: '/images/program2.jpg',
                schedule: 'Nov-Dec',
                participants: '40-200+',
                level: 'College',
                course: 'Design Major',
              },
              {
                id: 'branding-workshop',
                name: 'Branding Workshop',
                tag: 'with overdrive studios',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                image: '/images/program2.jpg',
                schedule: 'Nov-Dec',
                participants: '40-200+',
                level: 'College',
                course: 'Design Major',
              },
              {
                id: 'branding-workshop',
                name: 'Branding Workshop',
                tag: 'with overdrive studios',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                image: '/images/program2.jpg',
                schedule: 'Nov-Dec',
                participants: '40-200+',
                level: 'College',
                course: 'Design Major',
              },
            ]
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
      <CareersListing v-if="section.component === 'careers-listing'" 
        :section-id="section.name" 
        :title="section.data?.title"
        :description="section.data?.description" 
        :categories="section.data?.categories" 
        :list="section.data?.list"/>
      <CTABreaker v-if="section.component === 'cta-breaker'" :section-id="section.name" :data="section.data" />
    </div>
  </main>
</template>
