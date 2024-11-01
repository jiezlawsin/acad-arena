<script lang="ts">
import { defineComponent } from 'vue'
import { BuffsList } from '../mock/buffs'
import { useRouter } from 'vue-router';
import CTABreaker from '../components/CTABreaker.vue'
import $ from "jquery";

export default defineComponent({
  name: 'buffView',
  title: 'BuffView',
  components: {
    CTABreaker,
  },
  data() {
    return {
      data: BuffsList.find(buff => buff.id === this.$route.params.id),
      ctaBreaker: {
        component: 'cta-breaker',
        name: 'CTABreaker',
        data: {
          text: 'Help us improve our buffs!',
          cta: {
            text: 'Feedback',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSfnTT7W5KP0D7z1Ojj27xDWPCP659DJ-GfZhsY_ewUiuXs_Cw/formrestricted'
          }
        }
      }
    };
  },
  mounted() {
    $('.hero-gallery-slides').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
    const router = useRouter();
    if (!this.data) {
      router.push('/notfound');
    }
    const eventCount = this.data?.eligibleEvents.length ?? 0;
    if (eventCount < 6) {
      const diff = 6 - eventCount;
      for (let i = 0; i < diff; i++) {
        this.data?.eligibleEvents.push({});
      }
    }
  }
})
</script>


<template>
  <main class="buffs-view-page">
    <div class="container buff-view-container">
      <!-- <div class="hero-banner">
        <img :src="data?.heroImage" alt="">
      </div> -->
      <div class="hero-gallery-slides">
        <div class="hero-gallery-image" v-for="image in data?.heroImages">
          <img :src="image">
        </div>
      </div>
      <div class="hero-gallery">
        <div class="main-image">
          <img :src="data?.heroImages[0]">
        </div>
        <div class="right-column">
          <div class="small-image">
            <img :src="data?.heroImages[1]">
          </div>
          <div class="small-image">
            <img :src="data?.heroImages[2]">
          </div>
          <div class="small-image">
            <img :src="data?.heroImages[3]">
          </div>
          <div class="small-image">
            <img :src="data?.heroImages[4]">
          </div>
        </div>
      </div>
      <h1>{{ data?.name }}</h1>
      <div class="sponsors" v-if="data?.sponsors">
        <span>powered by</span>
        <img style="max-height: 80px;" v-for="sponsor in data?.sponsors" :src="sponsor.logo" :alt="sponsor.name">
      </div>
      <div class="events">
        <div class="heading">Eligible Events</div>
        <div class="cards">
          <div class="event-card" :class="{ 'is-empty': !event.name }" v-for="event in data?.eligibleEvents">
            <div class="event-name">{{ event.name }}</div>
            <div class="event-description">{{ event.description }}</div>
            <div class="event-icon">
              <img :src="event.icon">
            </div>
          </div>
        </div>
      </div>
      <div class="description" v-html="data?.description"></div>
    </div>
    <div class="cta-breaker">
      <div class="container">
        <div class="wrapper">
          <div class="cta-card d-flex" :style="'border-color: ' + data?.colorTheme">
            <div class="image">
              <img :src="data?.ctaBreaker.image" alt="">
            </div>
            <div class="content">
              <div class="small-text" v-if="data?.ctaBreaker.smallText">{{ data?.ctaBreaker.smallText }}</div>
              <div class="big-text" v-if="data?.ctaBreaker.bigText">{{ data?.ctaBreaker.bigText }}</div>
              <div class="description" v-if="data?.ctaBreaker.description" v-html="data?.ctaBreaker.description"></div>
              <ul v-if="data?.ctaBreaker.list" class="list">
                <li v-for="item in data?.ctaBreaker.list"><i class="bi bi-check-lg"></i> <span v-html="item"></span>
                </li>
              </ul>
              <div class="action">
                <a :href="data?.ctaBreaker.cta.ctaLink" target="_blank" :style="'color: ' + data?.colorTheme">
                  {{ data?.ctaBreaker.cta.ctaText }} &nbsp;
                  <img src="/images/icons/arrow-left.svg" alt="" class="icon">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CTABreaker :section-id="'buff-view-cta'" :data="ctaBreaker.data" />
  </main>
</template>
