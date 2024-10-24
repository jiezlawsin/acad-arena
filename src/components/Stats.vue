<template>
  <section :id="sectionId" class="stats-section">
    <div class="container">
      <div class="stat-container">
        <div class="stat" v-for="item in data">
          <div class="count">{{ item.stat }}</div>
          <div class="label">{{ item.name }}</div>
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
