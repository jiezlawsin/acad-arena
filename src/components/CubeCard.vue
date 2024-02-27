<template>
  <div class="cube-card">
    <div class="card-image">
      <img :src="item.backgroundImage" alt="">
      <span class="tag" v-if="item.tag">{{  item.tag  }}</span>
    </div>
    <div class="card-footer" v-if="item.header">
      <div class="card-title">
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 5.25C5.82031 5.25 7.5 6.92969 7.5 9C7.5 11.1094 5.82031 12.75 3.75 12.75C1.64062 12.75 0 11.1094 0 9V5.25C0 2.51562 2.22656 0.25 5 0.25C5.66406 0.25 6.25 0.835938 6.25 1.5C6.25 2.20312 5.66406 2.75 5 2.75C3.59375 2.75 2.5 3.88281 2.5 5.25V5.48438C2.89062 5.36719 3.28125 5.25 3.75 5.25ZM13.75 5.25C15.8203 5.25 17.5 6.92969 17.5 9C17.5 11.1094 15.8203 12.75 13.75 12.75C11.6406 12.75 10 11.1094 10 9V5.25C10 2.51562 12.2266 0.25 15 0.25C15.6641 0.25 16.25 0.835938 16.25 1.5C16.25 2.20312 15.6641 2.75 15 2.75C13.5938 2.75 12.5 3.88281 12.5 5.25V5.48438C12.8906 5.36719 13.2812 5.25 13.75 5.25Z" fill="url(#paint0_linear_856378_3865)"/>
          <defs>
          <linearGradient id="paint0_linear_856378_3865" x1="-9.58065e-07" y1="1.22034" x2="28" y2="1.22034" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9030CF"/>
          <stop offset="1" stop-color="#78C3FF"/>
          </linearGradient>
          </defs>
        </svg>
        {{  item.header  }}
      </div>
      <div class="card-content">
        <div class="card-name">{{  item.name  }}</div>
        <div class="card-description" v-html="item.content"></div>
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
