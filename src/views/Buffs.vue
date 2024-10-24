<script lang="ts">
import { defineComponent } from "vue";
import Banner from "../components/Banner.vue";
import CarouselCards from "../components/CarouselCards.vue";
import Features from "../components/Features.vue";
import Newsletter from "../components/Newsletter.vue";
import NumberedFeatures from "../components/NumberedFeatures.vue";
import BuffFeatures from "../components/BuffFeatures.vue";
import IconedFeatures from "../components/IconedFeatures.vue";
import FAQ from "../components/FAQ.vue";
import ToBuffMarketplace from "../components/ToBuffMarketplace.vue";

export default defineComponent({
  name: "home",
  title: "Home",
  components: {
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
          component: "banner",
          name: "BuffsBanner",
          banners: {
            header: "Upgrade Your Events",
            content:
              "Perks available for your youth events. Limited slots per month.",
            images: [
              "images/BUFF/20240119_171544.jpg",
              "images/BUFF/326180047_697578868517103_4415535295206154481_n.jpg",
              "images/BUFF/339645481_139464098883945_2373496877623822038_n.jpg",
              "images/BUFF/IMG_1480.jpg",
            ],
          },
        },
        {
          component: "buff-features",
          name: "HowDoYouApply",
          data: {
            sectionClass: "py-5",
            left: {
              title: "How Do You Apply?",
              content:
                '<a >Apply as early as four (4) months before your event.</a> <br>Our Buff Coordinators will contact you within 3-5 working days."',
            },
            right: {
              // title: "We buff up any event for the youth!",
              features: [
                {
                  title: "Students, teachers, LGUs and NGOs can apply. ",
                  icon: '/images/icons/user-circle-check-colored.svg'
                },
                {
                  title: "Find a buff that matches your event. ",
                  icon: '/images/icons/magnifying-glass-colored.svg'
                },
                {
                  title: "Apply for a buff. We have limited slots per month.",
                  icon: '/images/icons/clipboard-colored.svg'
                },
                {
                  title: "Receive the buff and execute.",
                  icon: '/images/icons/receive-colored.svg'
                },
                {
                  title: "Send your report. Show and tell! ",
                  icon: '/images/icons/edit-colored.svg'
                },
              ],
            },
          },
        },
        {
          component: "carousel-cards",
          name: "AvailableBuffs",
          title: "Available Buffs",
          description:
            'We have limited buffs per month! <a href="/buffs-marketplace">Check out our buffs marketplace for a full list.</a>',
          noTopPadding: false,
          carousel: {
            carouselType: "buff-card",
          },
          cards: [
            {
              buffId: "shapps-pocky-party-buff",
              cta: "Apply Now",
            },
            {
              buffId: "shapps-pocky-party-buff",
              cta: "Apply Now",
            },
            {
              buffId: "shapps-pocky-party-buff",
              cta: "Apply Now",
            },
          ],
        },
        {
          component: "faq",
          name: "BuffFAQ",
          data: {
            sectionClass: "pb-5",
            image:
              "/images/BUFF/339645481_139464098883945_2373496877623822038_n.jpg",
            title: "Frequently Asked Questions",
            faqs: [
              {
                question:
                  "What kind of support can I get from AcadArena Buffs?",
                answer:
                  "Depending on the type of event you’re running, you may be eligible to receive digital prizes such as in-game currencies and skins, marketing support through social media campaigns and assets, or even physical merchandise such as shirts, event swag, and giveaways.",
              },
              {
                question:
                  "Are there any restrictions on the types of events or activities that qualify for AcadArena Buffs?",
                answer:
                  "All buffs will indicate the minimum requirements for each. What we do require for all Buffs is that the main participants or organizers of the event are students or the youth. Is your org running a teachers-day tournament? Pwede yan. Is the faculty of your college running a workshop for students? Pwedeng pwede.",
              },
              {
                question:
                  "My event is not gaming or esports-related. Can I still apply for a buff?",
                answer:
                  "Yes! We’ll be rolling out AcadArena Buffs that will be open to all types of events - run a cosplay competition, a themed fun run, a pop-culture quiz bee, a maid cafe, or a board game night - we’ll find ways to support it.",
              },
              {
                question: `Can I apply for AcadArena Buffs even if I'm not part of the Alliance Program?`,
                answer:
                  "Yes. AcadArena Buffs are now open for non-members of the Alliance Program. Students, teachers, local government units (LGUs), and non-governmental organizations (NGOs) that serve the youth, all of whom can benefit from event support. However, Alliance members will get priority in applications and have a guaranteed allocation of buffs.",
              },
              {
                question:
                  "Can I apply for AcadArena Buffs as an individual and not an org?",
                answer:
                  "Yes. You’ll still have to comply with all the requirements indicated in the Buff, so make sure you have a team (or a group of friends) ready to help you out. If you eventually become a club or organization, that’s great!",
              },
              {
                question: "Are the AcadArena Buffs guaranteed once I apply?",
                answer:
                  "Applications for AcadArena Buffs are all assessed by our Buff Coordinators. You must meet all the minimum requirements to be selected. There are also a limited number of Buffs per month so not everyone might be able to avail depending on the demand. If your event doesn’t get selected for a particular buff, we’ll recommend you to other buffs that you qualify for!",
              },
              {
                question: "What happens when my event gets accepted?",
                answer:
                  "All AcadArena Buffs will have clear requirements as to what the event organizers need to accomplish. If your event is eligible for a Buff, our Buff Coordinators will send you a more comprehensive briefer that will help you and your team fulfill the Buff requirements.",
              },
            ],
          },
        },
      ],
    };
  },
});
</script>

<template>
  <main>
    <div class="buffs-banner">
      <img src="" alt="">
      <div class="container">
        <div class="buff-banner-card" style="border-color: #FF7A7A">
          <div class="content">
            <div class="title">#SHAPPS Party Buff</div>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt
              ut labore et dolore.</div>
            <div class="action">
              <a href="#" target="_blank" style="color: #FF7A7A">
                October Cycle Open &nbsp;
                <img src="/images/icons/arrow-left.svg" alt="" class="icon">
              </a>
            </div>
          </div>
          <div class="image"></div>
        </div>
      </div>
    </div>
    <div class="how-do-you-apply">

    </div>
    <div v-for="section in sections">
      <!-- <Banner v-if="section.component === 'banner'" :section-id="section.name" :banners="section.banners" /> -->
      <CarouselCards v-if="section.component === 'carousel-cards'" :no-top-padding="section.noTopPadding"
        :has-background="section.background" :description="section.description" :title="section.title"
        :title-class="section.titleClass" :section-id="section.name" :cards="section.cards"
        :carousel="section.carousel" />
      <Features v-if="section.component === 'features'" :carousel="section.carousel" :section-id="section.name"
        :data="section.data" />
      <Newsletter v-if="section.component === 'newsletter'" :section-id="section.name"
        :newsletter="section.newsletter" />
      <NumberedFeatures v-if="section.component === 'numbered-features'" :section-id="section.name"
        :data="section.data" />
      <BuffFeatures v-if="section.component === 'buff-features'" :section-id="section.name" :data="section.data" />
      <IconedFeatures v-if="section.component === 'iconed-features'" :section-id="section.name" :data="section.data" />
      <FAQ v-if="section.component === 'faq'" :section-id="section.name" :data="section.data" />
      <ToBuffMarketplace v-if="section.component === 'buff-marketplace'" :section-id="section.name"
        :data="section.data" />
    </div>
  </main>
</template>
