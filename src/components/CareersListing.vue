<template>
  <section :id="sectionId" class="careers-listing-section">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <p>{{ description }}</p>
      <ul v-if="categories.length" class="categories">
        <li v-for="item in categories">
          <span class="pill">{{ item }}</span>
        </li>
      </ul>
      <div class="grid-container" v-if="list.length">
        <div v-for="item in list">
          <!-- <BuffCard :item="item" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BuffCard from "./BuffCard.vue";

export default {
  props: {
    sectionId: {
      type: String,
      required: true
    },
    title: {
      type: String, 
      required: true
    },
    description: {
      type: String, 
      required: true
    },
    categories: {
      type: Array, // Changed to Array since it's a list of items
      required: true
    },
    list: {
      type: Array, // Changed to Array since it's a list of items
      required: true
    },
  },
  components: {
    BuffCard,
  },
};
</script>
