<template>
  <div class="card-item buff-card" :style="'background: ' + data?.colorTheme">
    <div class="card-image">
      <img :src="item.image ? item.image : data?.cardImage" alt="">
    </div>
    <div class="card-footer">
      <div class="card-text-content">
        <div class="card-category" v-if="data?.category || item.category">{{ item.category ? item.category :
          data?.category }}</div>
        <div class="card-title" v-if="data?.name || item.name">{{ item.name ? item.name : data?.name }}</div>
        <div class="card-description content"
          v-html="item.shortDescription ? item.shortDescription : data?.shortDescription"></div>
      </div>
      <div class="card-icons">
        <div v-for="cardIcon in data.cardIcons" class="card-icon">
          <img :src="cardIcon.icon">
          {{ cardIcon.name }}
        </div>
      </div>
      <div class="card-action">
        <a class="btn" v-if="item.url" :href="item.url ? item.url : '#'" :target="'_blank' ? item.external : ''">
          {{ item.cta }}
        </a>
        <a v-if="!item.url" :href="'buffs/' + item.buffId"
          @click.prevent="viewBuff(item.buffId ? item.buffId : item.id)">{{ item.cta ? item.cta :
            item.ctaBreaker.cta.cardCtaText }}
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
