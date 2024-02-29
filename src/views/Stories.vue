<script lang="ts">
import { defineComponent } from 'vue'
import { StoriesList } from '../mock/stories'
import Newsletter from '../components/Newsletter.vue'
import $ from "jquery";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'buffMarketplace',
  title: 'Buff Marketplace',
  components: {
    Newsletter,
  },
  data() {
    return {
      stories: StoriesList.filter(story => !story.featured),
      featuredStory: StoriesList.find(story => story.featured),
      newsletter: {
        image: '/acad-arena/images/art-newsletter.png',
        title: 'Be part of the AA Student Pulse!',
        description: '<span class="text-gradient">Join our newsletter for exclusive and spicy content</span> or not if you’re boring.',
      },
    };
  },
  setup() {
    const router = useRouter();

    const goTo = (path: string) => {
      router.push(path);
    }

    return {
      goTo
    };
  },
  mounted() {
    console.log('stories', StoriesList)
    // $('.stories-grid').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 3,
    //   arrows: false,
    //   responsive: [
    //     {
    //       breakpoint: 700,
    //       settings: {
    //         infinite: true,
    //         variableWidth: false,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //       }
    //     },
    //   ]
    // });
  }
})
</script>


<template>
  <main class="stories-page">
    <div class="stories-section">
      <div class="container">
        <div class="story-card featured" v-if="featuredStory">
          <a class="image" :href="'/stories/' + featuredStory.id" @click.prevent="goTo('stories/' + featuredStory.id)">
            <img :src="featuredStory?.heroImage" alt="">
          </a>
          <div class="info">
            <a class="title" :href="'/stories/' + featuredStory.id" @click.prevent="goTo('stories/' + featuredStory.id)">{{  featuredStory?.title  }}</a>
            <div class="d-flex align-items-center">
              <span class="tag">{{  featuredStory?.tag  }}</span>
              <span class="date">{{  featuredStory?.date  }}</span>
            </div>
            <div class="content" v-html="featuredStory?.content"></div>
          </div>
        </div>
        <div class="stories-grid">
          <div class="story-card" v-for="story in stories">
            <a class="image" :href="'/stories/' + story.id" @click.prevent="goTo('stories/' + story.id)">
              <img :src="story.heroImage" alt="">
            </a>
            <div class="info">
              <a class="title" :href="'/stories/' + story.id" @click.prevent="goTo('stories/' + story.id)">{{  story.title  }}</a>
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
