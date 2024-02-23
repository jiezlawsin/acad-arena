<template>
  <div class="card-item">
    <div class="card-image">
      <img :src="item.backgroundImage" alt="">
    </div>
    <div class="card-footer">
      <div class="card-description" v-html="item.content"></div>
      <div class="card-action">
        <span class="card-tag">{{ item.tag }}</span>
        <a href="#">{{ item.cta}} 
          <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.9142 16.9031C35.6952 16.1221 35.6952 14.8557 34.9142 14.0747L22.1863 1.34676C21.4052 0.565707 20.1389 0.565707 19.3578 1.34676C18.5768 2.1278 18.5768 3.39413 19.3578 4.17518L30.6716 15.4889L19.3578 26.8026C18.5768 27.5836 18.5768 28.85 19.3578 29.631C20.1389 30.4121 21.4052 30.4121 22.1863 29.631L34.9142 16.9031ZM0.639893 17.4889H17.0699V13.4889H0.639893V17.4889ZM17.0699 17.4889H33.5V13.4889H17.0699V17.4889Z" fill="url(#paint0_linear_856378_4113)"/>
            <defs>
            <linearGradient id="paint0_linear_856378_4113" x1="4" y1="13.4889" x2="23.5" y2="13.4889" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9030CF"/>
            <stop offset="1" stop-color="#78C3FF"/>
            </linearGradient>
            </defs>
          </svg>
        </a>
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
