<template>
  <section :id="sectionId" class="violator">
    <div class="container">
      <div class="d-flex justify-content-sm-between align-items-sm-start align-items-md-center">
        <div class="description">{{ data.description }}</div>
        <a v-if="data.cta" :href="data.cta.ctaLink">{{ data.cta.ctaText }}</a>
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
