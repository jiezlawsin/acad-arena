<template>
  <div class="card-item buff-card">
    <div class="card-image">
      <img :src="item.image ? item.image : data?.cardImage" alt="">
    </div>
    <div class="card-footer">
      <div class="card-title no-margin" v-if="data?.name || item.name">{{ item.name ? item.name : data?.name }}</div>
      <div class="card-description content" v-html="item.description ? item.description : data?.description"></div>
      <div class="card-action">
        <span class="card-tag">{{ item.tag ? item.tag : data?.tag }}</span>
        <a 
        v-if="item.url"
        :href="item.url ? item.url : '#'" 
        :target="'_blank' ? item.external : ''">{{ item.cta }}
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
        <a 
        v-if="!item.url"
        :href="'#'" 
        @click.prevent="viewBuff(item.buffId ? item.buffId : item.id)">{{ item.cta ? item.cta : item.ctaBreaker.cta.ctaText }} 
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
import { useRouter } from 'vue-router';
import { BuffsList } from '../mock/buffs'

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      data: BuffsList.find(buff => buff.id === this.item.buffId || buff.id === this.item.id)
    };
  },
  setup() {
    const router = useRouter();

    const viewBuff = (id: string) => {
      router.push('/buffs/' + id);
    }
    
    return {
      viewBuff
    };
  },
};
</script>
