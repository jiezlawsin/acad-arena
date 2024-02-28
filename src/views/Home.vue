<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../components/Banner.vue'
import CarouselCards from '../components/CarouselCards.vue'
import Features from '../components/Features.vue'
import Newsletter from '../components/Newsletter.vue'

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
            header: 'Lorem Ipsum Dolor',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el metus et just aliquet Inter suscipit.',
            ctaText: 'CTA Here',
            ctaLink: '#',
            images: [
              '/src/assets/home/banner.jpg',
              'https://picsum.photos/1080'
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
              image: '/images/program2.jpg',
              description: 'Buffs provide students with support through merch, prizes, and other cool stuff for tournaments and events.',
              tag: 'For Students',
              cta: 'Get Buffed',
              url: '/buffs',
            },
            {
              image: '/images/program1.jpg',
              description: 'Compete in weekly tournaments, join regional conferences, and represent your school in a nationwide league.',
              tag: 'For Students',
              cta: 'Queue Up',
              url: 'https://www.challengermode.com/s/AcadArenaPH',
              external: true
            },
            {
              image: 'https://picsum.photos/200',
              description: 'Join a network of student leaders. Build a community, learn to mount events, be part of something greater.',
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
            image: '/images/art1.png',
            title: 'Learn by Doing',
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
          cards: [
            {
              header: 'Sobrang saya ng parents ko sa’kin, sabi pa nila [noon] “may dulot pala ang paglalaro mo.”',
              name: 'Chino “Shino” Engallado',
              tag: 'The Supportive Teacher',
              content: 'Globe AA Merit Scholarship - Competitive 2021<br>Holy Angel University',
              backgroundImage: 'https://picsum.photos/200'
            },
            {
              header: `With AA's support, I founded an org connecting student gamers, fostering personal growth and leadership.`,
              name: 'Renzel “RenzuKun” Laroza',
              tag: 'The Supportive Teacher',
              content: 'President of Tempest Gaming Society<br>Technological Institute of the Philippines - QC',
              backgroundImage: 'https://picsum.photos/200'
            },
            {
              header: 'Alliance turns gamers into achievers. Thanks to being a student gamer, I have been made into a student leader.',
              name: 'Therese “Iryzviel” Elizalde',
              tag: 'The Supportive Teacher',
              content: 'AA Student Leader of the Year 2022<br>Central Philippine University',
              backgroundImage: 'https://picsum.photos/200'
            },
          ],
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
          component: 'newsletter',
          name: 'NewsletterComponent',
          newsletter: {
            image: '/src/assets/images/art-newsletter.png',
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
