<script lang="ts">
import { defineComponent } from 'vue'
import { BuffsList } from '../mock/buffs'

export default defineComponent({
  name: 'buffView',
  title: 'BuffView',
  data() {
    return {
      data: BuffsList.find(buff => buff.id === this.$route.params.id)
    };
  },
  mounted() {
    const eventCount = this.data?.eligibleEvents.length ?? 0;
    if(eventCount < 6) {
      const diff = 6 - eventCount;
      for(let i = 0; i < diff; i++) {
        this.data?.eligibleEvents.push({});
      }
    }
  }
})
</script>


<template>
  <main class="buffs-view-page">
    <div class="container">
      <div class="hero-banner">
        <img :src="data?.heroImage" alt="">
      </div>
      <h1>{{ data?.name }}</h1>
      <div class="sponsors" v-if="data?.sponsors">
        <span>powered by</span>
        <img v-for="sponsor in data?.sponsors" :src="sponsor.logo" :alt="sponsor.name">
      </div>
      <div class="events">
        <div class="heading">Eligible Events</div>
        <div class="cards">
          <div class="event-card" :class="{'is-empty': !event.name}" v-for="event in data?.eligibleEvents">
            <div class="event-name">{{ event.name }}</div>
            <div class="event-description">{{ event.description }}</div>
          </div>
        </div>
      </div>
      <div class="description">{{ data?.description }}</div>
    </div>
    <div class="cta-breaker">
      <div class="container">
        <div class="wrapper d-flex">
          <div class="image w-50">
            <img :src="data?.ctaBreaker.image" alt="">
          </div>
          <div class="content w-50">
            <div class="small-text" v-if="data?.ctaBreaker.smallText">{{ data?.ctaBreaker.smallText }}</div>
            <div class="big-text" v-if="data?.ctaBreaker.bigText">{{ data?.ctaBreaker.bigText }}</div>
            <div class="description" v-if="data?.ctaBreaker.description" v-html="data?.ctaBreaker.description"></div>
            <ul v-if="data?.ctaBreaker.list" class="list">
              <li v-for="item in data?.ctaBreaker.list"><i class="bi bi-check-lg"></i> {{ item }}</li>
            </ul>
            <a :href="data?.ctaBreaker.cta.ctaLink" class="cta"><i class="bi bi-clipboard2-check-fill"></i> {{ data?.ctaBreaker.cta.ctaText }}</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
