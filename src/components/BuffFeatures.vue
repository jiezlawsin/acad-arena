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
              <i v-if="!data.left.cta.icon" class="bi bi-check-lg"></i>
              <img v-if="data.left.cta.icon" :src="data.left.cta.icon" alt="">
              <div>
                {{ data.left.cta.text }}
              </div>
            </a>
          </div>
        </div>
        <div class="right col-md-6" v-if="data.right">
          <div class="title">{{ data.right?.title }}</div>
          <ul class="features">
            <li v-for="feature in data?.right?.features">
              <i v-if="!feature.icon" class="bi bi-check-lg"></i>
              <img v-if="feature.icon" :src="feature.icon" alt="">
              <div>
                {{ feature.title }}
              </div>
            </li>
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
