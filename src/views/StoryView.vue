<script lang="ts">
import { defineComponent } from 'vue'
import { StoriesList } from '../mock/stories'
import { useRouter } from 'vue-router';
import Newsletter from '../components/Newsletter.vue'

export default defineComponent({
  name: 'storyView',
  title: 'StoryView',
  components: {
    Newsletter
  },
  data() {
    return {
      data: StoriesList.find(story => story.id === this.$route.params.id),
      stories: StoriesList.filter(story => story.id !== this.$route.params.id),
      newsletter: {
        image: '/images/art-scholar.png',
        title: 'Be part of the AA Student Pulse!',
        description: '<span class="text-gradient">Join our newsletter for exclusive and spicy content</span> or not if you’re boring.',
      },
    };
  },
  mounted() {
    const router = useRouter();
    if (!this.data) {
      router.push('/notfound');
    }
  }
})
</script>


<template>
  <main class="stories-page">
    <div class="container">
      <div class="hero-banner">
        <img :src="data?.heroImage" alt="">
      </div>
      <h1>{{ data?.title }}</h1>
      <div class="d-flex align-items-center">
        <span class="tag">{{  data?.tag  }}</span>
        <span class="date">{{  data?.date  }}</span>
      </div>
      <div class="content" v-html="data?.content"></div>
      <div class="stories-section">
        <div class="stories-grid">
          <div class="story-card" v-for="story in stories">
            <a class="image" :href="'/stories/' + story.id">
              <img :src="story.heroImage" alt="">
            </a>
            <div class="info">
              <a class="title" :href="'/stories/' + story.id">{{  story.title  }}</a>
              <div class="d-flex align-items-center">
                <span class="tag">{{  story.tag  }}</span>
                <span class="date">{{  story.date  }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Newsletter :section-id="'newsletter'" :newsletter="newsletter" />    
  </main>
</template>
