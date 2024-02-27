<template>
  <section :id="sectionId" class="buff-marketplace-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="title">{{  data.title }}</div>
          <div class="content" v-html="data.content"></div>
          <br>
          <a href="/buffs-marketplace" class="btn btn-lg btn-gradient">
            <i class="bi bi-clipboard2-check-fill"></i>
            Apply Now
          </a>
        </div>
        <div class="col-md-6"></div>
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
