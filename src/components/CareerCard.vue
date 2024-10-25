<template>
  <div class="card-item career-card">
    <div class="card-image">
      <img :src="item.cardImage" alt="">
    </div>
    <div class="card-footer">
      <div class="card-text-content">
        <div class="card-title">{{ item.name }}</div>
        <div class="card-tag">{{ item.tag }}</div>
        <div class="card-description content">{{ item.description }}</div>
      </div>
      <div class="card-icons">
        <div v-for="cardIcon in item.cardIcons" class="card-icon">
          <img :src="cardIcon.icon">
          {{ cardIcon.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { BuffsList } from '../mock/buffs'

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
  },
};
</script>
