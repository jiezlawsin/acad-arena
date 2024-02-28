import { defineComponent } from 'vue';

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
          height: '350px',
          banners: [
            {
              header: 'Lorem Ipsum Dolor',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing el metus et just aliquet Inter suscipit.',
              ctaText: 'CTA Here',
              ctaLink: '#',
              backgroundImage: '/src/assets/home/banner.jpg',
            }
          ]
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
              buffId: 'unipin-mlbb-tournament-buff',
              cta: 'CTA Here',
            },
            {
              buffId: 'unipin-mlbb-tournament-buff',
              cta: 'CTA Here',
            },
            {
              buffId: 'unipin-mlbb-tournament-buff',
              cta: 'CTA Here',
            },
          ]
        },
        {
          component: 'features',
          name: 'LearnByDoing',
          data: {
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
              header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim risus eget neque tincidunt, ut iaculis lorem.',
              name: 'Xavier "Xavie8k" Juan',
              tag: 'The Supportive Teacher',
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
              backgroundImage: 'https://picsum.photos/200'
            },
            {
              header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim risus eget neque tincidunt, ut iaculis lorem.',
              name: 'Xavier "Xavie8k" Juan',
              tag: 'The Supportive Teacher',
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
              backgroundImage: 'https://picsum.photos/200'
            },
            {
              header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim risus eget neque tincidunt, ut iaculis lorem.',
              name: 'Xavier "Xavie8k" Juan',
              tag: 'The Supportive Teacher',
              content: 'President of XCEED-Mindanao Xavier University-Ateneo de Cagayan',
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
            title: 'Scholarships will be back soon!',
            description: '<a href="#">Get the news first!</a> Subscribe to our newsletter or join our Discord Server.',
          },
        },
      ],
    };
  },
});
