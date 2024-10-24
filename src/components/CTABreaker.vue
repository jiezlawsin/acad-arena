<template>
  <section :id="sectionId" class="cta-breaker-section">
    <div class="cta-container">
      <img src="../assets/images/jigsaw.png" alt="" />
      <div class="text">{{ data.text }}</div>
      <a class="cta btn" :href="data.href">{{ data.text }}</a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionId: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
};
</script>
