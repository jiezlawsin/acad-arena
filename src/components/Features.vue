<template>
  <section :id="sectionId" class="features-section">
    <div class="container">
      <div class="section-header w-50">
        <h2 class="title">{{ data.title }}</h2>
        <div class="description" v-html="data.description"></div>
        <ul class="features">
          <li v-for="feature in data.features"><i class="bi bi-check-circle-fill"></i>{{  feature  }}</li>
        </ul>   
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
