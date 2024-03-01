<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../components/Banner.vue'
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
    Banner,
    CarouselCards,
    Features,
    Newsletter
  },
  data() {
    return {
      sections: [
        {
          component: 'banner',
          name: 'HomeBanner',
          banners: {
            type: 'content-carousel',
            images: [
              {
                image: '/images/HOME/IMG_8437.jpg',
                header: 'Upgrade Your Events',
                content: 'Perks available for your youth events. Limited slots per month',
                ctaText: 'Learn More',
                ctaLink: 'https://www.acadarena.com/buffs',
              },
            ], 
          }
        },
        {
          component: 'carousel-cards',
          name: 'OurPrograms',
          title: 'Our Programs',
          background: true,
          noTopPadding: false,
          carousel: {
            carouselType: 'program-card',
          },
          cards: [
            {
              image: '/images/HOME/program1.png',
              shortDescription: 'Buffs provide students with support through merch, prizes, and other cool stuff for tournaments and events.',
              tag: 'For Students',
              cta: 'Get Buffed',
              url: '/buffs',
            },
            {
              image: '/images/HOME/program2.png',
              shortDescription: 'Compete in weekly tournaments, join regional conferences, and represent your school in a nationwide league.',
              tag: 'For Students',
              cta: 'Queue Up',
              url: 'https://www.challengermode.com/s/AcadArenaPH',
              external: true
            },
            {
              image: 'images/HOME/program3.png',
              shortDescription: 'Join a network of student leaders. Build a community, learn to mount events, be part of something greater.',
              tag: 'For Students',
              cta: 'Take Part',
              url: '/alliance',
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
          noTopPadding: true,
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
          background: false,
          noTopPadding: true,
          carousel: {
            carouselType: 'story-card',
          },
          cards: [
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
      <Banner v-if="section.component === 'banner'" :section-id="section.name" :banners="section.banners" />
      <CarouselCards v-if="section.component === 'carousel-cards'" 
        :no-top-padding="section.noTopPadding"
        :has-background="section.background" 
        :title="section.title"  
        :title-class="section.titleClass" 
        :section-id="section.name" 
        :cards="section.cards" 
        :carousel="section.carousel" />
      <Features v-if="section.component === 'features'" :carousel="section.carousel" :section-id="section.name" :data="section.data" />
      <Newsletter v-if="section.component === 'newsletter'" :section-id="section.name" :newsletter="section.newsletter" />
      
    </div>
  </main>
</template>
