<template>
  <div class="card-item">
    <div class="card-image">
      <img :src="item.backgroundImage" alt="">
    </div>
    <div class="card-footer">
      <div class="card-description" v-html="item.content"></div>
      <div class="card-action">
        <span class="card-tag">{{ item.tag }}</span>
        <a href="#">{{ item.cta}} <i class="bi bi-arrow-right"></i></a>
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
