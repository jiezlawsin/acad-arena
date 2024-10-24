<script lang="ts">
import { defineComponent } from 'vue'
import HomeBanner from '../components/HomeBanner.vue'
import CarouselCards from '../components/CarouselCards.vue'
import Features from '../components/Features.vue'
import Newsletter from '../components/Newsletter.vue'
import { TestimonialsList } from '../mock/testimonials'

function shuffle(array: any) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default defineComponent({
  name: 'home',
  title: 'Home',
  components: {
    HomeBanner,
    CarouselCards,
    Features,
    Newsletter
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
          component: 'carousel-cards',
          name: 'OurPrograms',
          title: 'Our Programs',
          titleClass: 'text-center',
          titleIcon: '/images/HOME/sparkle.png',
          description: 'Turn your hobby to something more—learn a new skill, mount an event, add to your resume, get a paid gig, secure the difference maker for your first job.',
          background: false,
          noTopPadding: false,
          carousel: {
            carouselType: 'program-card',
          },
          cards: [
            {
              name: 'FOR HS & COLLEGE CLUBS',
              image: '/images/HOME/program1.png',
              shortDescription: 'Get accredited in our student club network and get perks!',
              tag: 'AcadArena Alliance',
              cta: 'Apply Now',
              url: '/alliance',
            },
            {
              name: 'FOR HS & COLLEGE CLUBS',
              image: '/images/HOME/program2.png',
              shortDescription: 'Get loot and freebies for the campus event of your dreams.',
              tag: 'AcadArena Buffs',
              cta: 'October Cycle Live',
              url: '/buffs',
            },
            {
              name: 'FOR HS & COLLEGE ESPORTS TEAMS',
              image: 'images/HOME/program3.png',
              shortDescription: 'Compete in our weekly rotating esports titles against fellow students.',
              tag: 'AcadArena Aces',
              cta: 'Join Tournaments',
              url: 'https://www.challengermode.com/s/AcadArenaPH',
              external: true
            },
            {
              name: 'FOR ALL LEARNERS',
              image: 'images/HOME/program3.png',
              shortDescription: 'Apply in our mentorship cycles for psychology, design & production.',
              tag: 'AcadArena BoostCamp',
              cta: 'Explore Mentorships',
              url: '/careers',
            },
          ]
        },
        {
          component: 'features',
          name: 'LearnByDoing',
          data: {
            image: '/images/art-learn-by-doing.png',
            title: 'Learn by Doing',
            description: '<p>Turn your hobby to something more—learn a new skill, mount an event, add to your resume, get a paid gig, secure the difference maker for your first job.</p><p>Here are departments who often partner wish us:</p>',
            features: [
              'Extracurricular Enrichment',
              'Sports Department', 
              'Alternative Learning Programs',
              'Internships & Placement',
            ]
          }
        },
        {
          component: 'carousel-cards',
          name: 'NotJustPlayMovement',
          title: 'Join the #NotJustPlay Movement',
          titleClass: 'text-center',
          class: 'pb-5',
          noTopPadding: false,
          carousel: {
            title: 'Join the #NotJustPlay Movement',
            carouselType: 'cube-card',
          },
          cards: shuffle(TestimonialsList),
        },
        {
          component: 'carousel-cards',
          name: 'NewsAndStories',
          title: 'News & Stories',
          background: true,
          noTopPadding: false,
          carousel: {
            carouselType: 'story-card',
          },
          cards: [
            {
              id: 'mountain-dew-buffs-now-available-at-acad-arena-buffs-marketplace',
              header: 'Mountain Dew Buffs Now Available at AcadArena Buffs Marketplace',
              backgroundImage: '/images/story-mntdw.jpg',
              tagDate: {
                tag: 'News',
                date: 'Mar 4, 2024'
              }
            },
            {
              id: 'on-acad-arena-edu-word-from-the-ceo',
              header: 'On AcadArena Edu: Word from the CEO!',
              backgroundImage: '/images/AA Web Quote Template.png',
              tagDate: {
                tag: 'News',
                date: 'Feb 29, 2024'
              }
            },
          ],
        },
        {
          component: 'newsletter',
          name: 'NewsletterComponent',
          newsletter: {
            image: '/images/art-scholar.png',
            title: 'Scholarships will be back soon!',
            description: '<a href="#">Get the news first!</a> Subscribe to our newsletter or join our Discord Server.',
          },
        },
      ],
    };
  },
})
</script>


<template>
  <main>
    <div v-for="section in sections">
      <HomeBanner v-if="section.component === 'home-banner'" :section-id="section.name" :banner="section.banner" />
      <CarouselCards v-if="section.component === 'carousel-cards'" 
        :no-top-padding="section.noTopPadding"
        :has-background="section.background" 
        :title="section.title ?? ''"  
        :titleIcon="section.titleIcon"  
        :description="section.description"  
        :title-class="section.titleClass" 
        :section-id="section.name" 
        :cards="section.cards" 
        :carousel="section.carousel ?? {}" />
      <Features v-if="section.component === 'features'" :carousel="section.carousel" :section-id="section.name" :data="section.data" />
      <Newsletter v-if="section.component === 'newsletter'" :section-id="section.name" :newsletter="section.newsletter" />
      
    </div>
  </main>
</template>
