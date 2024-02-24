<template>
  <section :id="sectionId" class="listing-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 co-sm-12">
          <div class="section-header">
            <h2 class="title">{{ data.title }}</h2>
            <div class="description" v-html="data.description"></div>
          </div>
          <ul class="features">
            <li v-for="feature in data.features">
              <i class="bi bi-check-circle-fill"></i>
              <div>
                <div class="title">{{  feature.title  }}</div>
                <div class="description">{{  feature.description  }}</div>
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
