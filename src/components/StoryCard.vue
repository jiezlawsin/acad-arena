<template>
  <div class="story-card">
    <div class="card-image" @click.prevent="goTo('stories/' + item.id)">
      <img :src="item.backgroundImage" alt="">
    </div>
    <div class="card-footer">
      <div class="card-title" @click.prevent="goTo('stories/' + item.id)">{{  item.header  }}</div>  
      <div class="card-description" v-if="item.content" v-html="item.content"></div>
      <div class="card-tag-date" v-if="item.tagDate">
        <div class="card-tag">{{ item.tagDate.tag }}</div>
        <div class="card-date">{{ item.tagDate.date }}</div>
      </div>
      <div class="card-cta" v-if="item.ctas">
        <a href="cta.ctaLink" v-for="cta of item.ctas">{{ cta.ctaText}}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
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
};
</script>
