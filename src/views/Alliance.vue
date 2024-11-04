<script lang="ts">
import { defineComponent } from 'vue'
import HomeBanner from '../components/HomeBanner.vue'
import Banner from '../components/Banner.vue'
import CarouselCards from '../components/CarouselCards.vue'
import Features from '../components/Features.vue'
import Newsletter from '../components/Newsletter.vue'
import NumberedFeatures from '../components/NumberedFeatures.vue'
import BuffFeatures from '../components/BuffFeatures.vue'
import IconedFeatures from '../components/IconedFeatures.vue'
import FAQ from '../components/FAQ.vue'
import ToBuffMarketplace from '../components/ToBuffMarketplace.vue'
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
  name: 'alliance',
  title: 'Alliance',
  components: {
    HomeBanner,
    Banner,
    CarouselCards,
    Features,
    Newsletter,
    NumberedFeatures,
    BuffFeatures,
    IconedFeatures,
    FAQ,
    ToBuffMarketplace,
  },
  data() {
    return {
      sections: [
        {
          component: 'home-banner',
          name: 'HomeBanner',
          banner: {
            hideAction: true,
            hideTextAnimation: true,
            header: 'Level-up Your Student Communities.',
            description: 'Learn by doing and be part of a network of student clubs wanting to gamify their extracurriculars!',
            images: [
              {
                image: '/images/ALLIANCE/alliance-banner-1.jpg',
                text: 'Esports',
              },
              {
                image: '/images/ALLIANCE/alliance-banner-2.png',
                text: 'Gamehaus',
              },
              {
                image: '/images/ALLIANCE/alliance-banner-3.png',
                text: 'Reyun',
              },
              {
                image: '/images/ALLIANCE/alliance-banner-4.png',
                text: 'Anime',
              },
            ],
          }
        },
        // {
        //   component: 'banner',
        //   name: 'AllianceBanner',
        //   banners: {
        //     header: 'Learn by Doing',
        //     content: 'Make learning more fun. Join our communities by March 28!',
        //     images: [
        //       'images/ALLIANCE/IMG_1420.jpg',
        //       'images/ALLIANCE/339659836_1360017008090901_6741830183907613222_n.jpg',
        //       'images/ALLIANCE/331324007_1682201745532379_6426191550582191943_n.jpg',
        //     ], 
        //   }
        // },
        {
          component: 'carousel-cards',
          name: 'JoinTheAlliance',
          title: 'Our Services',
          titleClass: 'text-center',
          description: 'Any teacher or student can start a community or club in your campus! Get access to perks and resources to get into esports.',
          background: true,
          noTopPadding: false,
          carousel: {
            carouselType: 'program-card',
          },
          cards: [
          {
              name: 'FOR COLLEGE, JHS, & SHS COMMUNITIES',
              image: '/images/HOME/incubator.jpg',
              shortDescription: 'No club? No problem. Let’s help you set-up one in your campus.',
              tag: 'Alliance Incubator',
              cta: 'November Cycle Open',
              url: 'https://acadarenaedu.notion.site/1341c4eaf3128017b055fa5224cda252?pvs=105',
              external: true,
            },
            {
              name: 'FOR OFFICIAL COLLEGE, JHS & SHS CLUBS',
              image: '/images/ALLIANCE/Alliance Program.jpg',
              shortDescription: 'All official school clubs whether academic or hobby-clubs can join the Alliance!',
              tag: 'Alliance Program',
              cta: 'November Cycle Live',
              url: 'https://noteforms.com/forms/clubs-db-zzqppd-1',
              external: true
            },
            {
              name: 'FOR MODERATORS & EDUCATORS',
              image: 'images/HOME/BoostCamp.jpg',
              shortDescription: 'Want to be a champion in your campus? Be part of a PLC to reach your goals for your campus.',
              tag: 'Alliance for Teachers',
              cta: 'November Batch Open',
              url: 'https://acadarenaedu.notion.site/1341c4eaf31280a3beb3d40e38de226d?pvs=105',
              external: true
            },
            {
              name: 'FOR ALL',
              image: 'images/HOME/extracurricularservices.jpg',
              shortDescription: 'Just need help or advice in your current community? Ask away!',
              tag: 'Extracurricular Services',
              cta: 'Consult',
              url: 'https://acadarenaedu.notion.site/1341c4eaf31280c0bfded0ba5b4c6c61?pvs=105',
              external: true
            },
          ]
        },
        // {
        //   component: 'iconed-features',
        //   name: 'Last5Years',
        //   data: {
        //     sectionClass: 'pb-5 ',
        //     title: 'A Growing Community the Last 5 Years',
        //     features: [
        //       {
        //         title: '+150 Clubs Seeded',
        //       },
        //       {
        //         title: '+460 Events Supported',
        //       },
        //       {
        //         title: '+100 Scholars Supported',
        //       },
        //       {
        //         title: '+470 Teams Competed',
        //       },
        //     ]
        //   }
        // },
        {
          component: 'buff-features',
          name: 'ApplicationsOpen',
          data: {
            sectionClass: 'py-5 bg-light-gradient',
            left: {
              title: 'Why Join the Alliance?',
              content: 'Be closer to industry professionals, gain perks, and join a community of lifelong learners!',
              // cta: {
              //   url: '',
              //   text: 'Apply Now'
              // }
            },
            right:{
              title: 'Perks you unlock',
              features: [
                {
                  title: 'Priority slots for any AcadArena Event Buff',
                },
                {
                  title: 'Exclusive or priority slots to join Alliance Games',
                },
                {
                  title: 'Access to mentorship and learning resources',
                },
                {
                  title: 'City-wide or Region-wide Festivals (e.g. Fiestas)  ',
                },
              ]
            }
          }
        },
        {
          component: 'carousel-cards',
          name: 'WhatOurCommunitySays',
          title: 'What Our Community Says',
          // titleClass: 'text-center',
          class: 'py-5',
          hasBackground: false,
          noTopPadding: false,
          carousel: {
            carouselType: 'cube-card',
          },
          cards: shuffle(TestimonialsList),
        },
        // {
        //   component: 'carousel-cards',
        //   name: 'NewsAndStories',
        //   title: 'What Our Community Does',
        //   background: true,
        //   noTopPadding: false,
        //   carousel: {
        //     carouselType: 'story-card',
        //   },
        //   cards: [
        //   {
        //       id: 'mountain-dew-buffs-now-available-at-acad-arena-buffs-marketplace',
        //       header: 'Mountain Dew Buffs Now Available at AcadArena Buffs Marketplace',
        //       backgroundImage: '/images/story-mntdw.jpg',
        //       tagDate: {
        //         tag: 'News',
        //         date: 'Mar 4, 2024'
        //       }
        //     },
        //     {
        //       id: 'on-acad-arena-edu-word-from-the-ceo',
        //       header: 'On AcadArena Edu: Word from the CEO!',
        //       backgroundImage: '/images/AA Web Quote Template.png',
        //       tagDate: {
        //         tag: 'News',
        //         date: 'Feb 29, 2024'
        //       }
        //     },
        //   ],
        // },
        {
          component: 'faq',
          name: 'BuffFAQ',
          data: {
            sectionClass: 'pb-5',
            image: '/images/ALLIANCE/331324007_1682201745532379_6426191550582191943_n.jpg',
            title: 'Frequently Asked Questions',
            faqs: [
              {
                question: 'How can I be part of the Alliance Program?',
                answer: 'Registered or accredited student organizations in campuses across the Philippines are welcome to join the Alliance Program! Application cycles are regularly announced so make sure to get ready for when it opens.'
              },
              {
                question: 'Can I join the Alliance if I don’t have an org?',
                answer: 'You can apply for the Alliance Incubator program - we’ll help you to establish your own esports org in your university. We’ll provide you with the guidance and support you need to get started on your journey.'
              },
              {
                question: 'What are the benefits of joining the Alliance?',
                answer: 'There’s a lot! Alliance members get priority in buff applications and have a guaranteed allocation of buffs. You’ll also be our preferred partners for future campus events and programs that we roll out, as well as our existing programs like the Alliance Games and the AcadArena Awards.'
              },
              {
                question: 'I’m a teacher or administrator. Can I apply for the organization on our campus?',
                answer: 'Absolutely! Head over to our application page for teachers above and we’ll help get your students started.'
              },
              {
                question: 'Are there partnership packages available for schools?',
                answer: `Yes! We’re always on the lookout for supportive partners so we can provide students the best campus experience through special events, integrated extracurricular programs, and internship opportunities. Reach out to us <a href="https://bit.ly/AAEduSchoolPartners" target="_blank">here</a> and let's talk.`
              },
            ]
          }
        },
        // {
        //   component: 'buff-marketplace',
        //   name: 'ApplicationsOpen',
        //   data: {
        //     image: '/images/art-alliance.png',
        //     sectionClass: 'py-5',
        //     title: 'Level Up Your Community.',
        //     content: '<a>Deadline of applications is on March 28.</a> Our Alliance Coordinators will contact you within 3-5 working days.',
        //     cta: {
        //       url: 'https://bit.ly/AAEduAllianceApp',
        //       text: 'Apply Now',
        //       external: true
        //     }
        //   }
        // },
      ],
    };
  },
})
</script>


<template>
  <main>
    <div v-for="section in sections">
      <HomeBanner v-if="section.component === 'home-banner'" :section-id="section.name" :banner="section.banner" />
      <Banner v-if="section.component === 'banner'" :section-id="section.name" :banners="section.banners" />
      <CarouselCards v-if="section.component === 'carousel-cards'" 
        :no-top-padding="section.noTopPadding"
        :has-background="section.background" 
        :description="section.description"  
        :title="section.title"  
        :title-class="section.titleClass" 
        :section-id="section.name" 
        :cards="section.cards" 
        :carousel="section.carousel" />
      <Features v-if="section.component === 'features'" :carousel="section.carousel" :section-id="section.name" :data="section.data" />
      <Newsletter v-if="section.component === 'newsletter'" :section-id="section.name" :newsletter="section.newsletter" />
      <NumberedFeatures v-if="section.component === 'numbered-features'" :section-id="section.name" :data="section.data" />
      <BuffFeatures v-if="section.component === 'buff-features'" :section-id="section.name" :data="section.data" />
      <IconedFeatures v-if="section.component === 'iconed-features'" :section-id="section.name" :data="section.data" />
      <FAQ v-if="section.component === 'faq'" :section-id="section.name" :data="section.data" />
      <ToBuffMarketplace v-if="section.component === 'buff-marketplace'" :section-id="section.name" :data="section.data" />
    </div>
  </main>
</template>
