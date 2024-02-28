<template>
  <section :id="sectionId" class="buff-marketplace-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="title">{{  data.title }}</div>
          <div class="content" v-html="data.content"></div>
          <br>
          <a v-if="data.cta" :target="'_blank' ? data.cta.external : ''" :href="data.cta.url" class="btn btn-lg btn-gradient">
            <i class="bi bi-clipboard2-check-fill"></i>
            {{  data.cta.text }}
          </a>
          <a v-if="!data.cta" href="/buffs-marketplace" class="btn btn-lg btn-gradient">
            <i class="bi bi-clipboard2-check-fill"></i>
            Apply Now
          </a>
        </div>
        <div class="col-md-6">
          <div class="buff-marketplace-art">
            <img :src="data.image" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

export default {
  props: {
    sectionId: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
  },
};
</script>
