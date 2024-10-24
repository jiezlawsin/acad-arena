<template>
  <section :id="sectionId" class="careers-listing-section">
    <div class="container">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <ul>
        <li v-for="item in categories">{{ item }}</li>
      </ul>
      <div class="grid-container">
        
      </div>
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
};
</script>
