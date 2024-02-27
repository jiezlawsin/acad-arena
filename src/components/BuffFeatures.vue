<template>
  <section :id="sectionId" class="buff-features-section py-5">
    <div class="container">
      <div class="row">
        <div class="left col-md-6">
          <div class="title">{{ data.left.title }}</div>
          <div v-if="data.left.content" class="description" v-html="data.left.content"></div>
          <br>
          <div class="action" v-if="data.left.cta">
            <a :href="data.left.cta.url" target="_blank" class="btn btn-lg btn-gradient">
              <i class="bi bi-clipboard2-check-fill"></i>
              {{ data.left.cta.text }}
            </a>
          </div>
        </div>
        <div class="right col-md-6">
          <div class="title">{{ data.right.title}}</div>
          <ul class="features">
            <li v-for="feature in data.right.features"><i class="bi bi-check-lg"></i>{{  feature.title  }}</li>
          </ul> 
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
