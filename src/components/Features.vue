<template>
  <section :id="sectionId" class="features-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6 co-sm-12">
          <h2 class="title">{{ data.title }}</h2>
          <div class="description" v-html="data.description"></div>
          <ul class="features">
            <li v-for="feature in data.features"><i class="bi bi-check-lg"></i>{{  feature  }}</li>
          </ul> 
        </div>
        <div class="col-lg-7 col-md-6 col-sm-12">
          <div class="features-art">
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
