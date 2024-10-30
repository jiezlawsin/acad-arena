<script lang="ts">
import { defineComponent } from 'vue'
import { BuffsList } from '../mock/buffs'
import { useRouter } from 'vue-router';
import BuffCard from '../components/BuffCard.vue'

export default defineComponent({
  name: 'buffMarketplace',
  title: 'Buff Marketplace',
  components: {
    BuffCard,
  },
  data() {
    return {
      buffs: BuffsList
    };
  },
  mounted() {
    console.log('BUFFS', BuffsList)
  }
})
</script>


<template>
  <main class="buffs-marketplace-page ">
    <div class="header-container container py-5">
      <h2 class="header-title line-height-1">Buffs Marketplace</h2>
      <p class="content">We have limited buffs per month! <a>Check back for new buffs per cycle.</a></p>
      <div class="buffs-list">
        <div class="card" v-for="buff in buffs">
          <BuffCard :item="buff" />
        </div>
      </div>
    </div>
    <div class="wanttogetprio-section">
      <div class="row">
        <div class="col col-lg-4 col-md-12">
          <div class="content">
            <h3>Want to get prio?</h3>
            <p>The more you learn, the more buffs you can unlock. Learn more about our other programs.</p>
            <a target="true" href="/alliance" class="btn btn-lg btn-gradient">Learn More</a>
          </div>
        </div>
        <div class="col col-lg-4 col-md-12">
          <img src="/images/buff-drawing2.png" alt="">
        </div>
        <div class="col col-lg-4 col-md-12">
          <div class="content">
            <p>Pre-book buffs and get priority as part of the AcadArena Alliance Program. Any student club can get
              accredited.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
