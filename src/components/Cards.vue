<template>
  <section :id="sectionId" class="cards-section">
    <div class="container">
      <div class="section-header">
        <h2 class="title text-center">{{ data.title }}</h2>
      </div>
      <div class="cards">
        <div class="image-card" v-for="card in data.cards">
          <img :src="card.image" alt="">
          <span class="tag">{{  card.title  }}</span>
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
    }
  },  
};

</script>
