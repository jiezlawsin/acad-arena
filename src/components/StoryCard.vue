<template>
  <div class="story-card">
    <div class="card-image">
      <img :src="item.backgroundImage" alt="">
    </div>
    <div class="card-footer">
      <h4 class="card-title">{{  item.header  }}</h4>  
      <div class="card-description" v-html="item.content"></div>
      <div class="card-cta">
        <a href="cta.ctaLink" v-for="cta of item.ctas">{{ cta.ctaText}}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
  },
};
</script>
