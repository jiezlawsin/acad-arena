<template>
  <section :id="sectionId" class="numbered-features-section" :class="data.sectionClass">
    <div class="container">
        <h2 class="title text-center">{{ data.title }}</h2>
        <div class="description" v-if="data.description" v-html="data.description"></div>
        <ul class="features">
          <li v-for="(feature, index) in data.features">
            <div class="number">{{ index+1 }}</div>
            <div class="content">
              <div class="feature-title">{{ feature.title }}</div>
              <div class="feature-description">{{ feature.description }}</div>
            </div>
          </li>
        </ul> 
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
