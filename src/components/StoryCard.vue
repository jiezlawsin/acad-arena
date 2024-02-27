<template>
  <div class="story-card">
    <div class="card-image">
      <img :src="item.backgroundImage" alt="">
    </div>
    <div class="card-footer">
      <div class="card-title">{{  item.header  }}</div>  
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

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
  },
};
</script>
