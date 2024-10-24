<template>
  <section :id="sectionId" class="cta-breaker-section">
    <div class="cta-container">
      <img src="../assets/images/jigsaw.png" alt="" />
      <div class="text">Help us improve buffs</div>
      <a class="cta btn">Feedback</a>
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
      type: Array, // Changed to Array since it's a list of items
      required: true
    }
  },
};
</script>
