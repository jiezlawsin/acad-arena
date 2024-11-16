<template>
  <section :id="sectionId" class="careers-listing-section">
    <div class="container">
      <div class="heading-container">
        <img src="../assets/images/cheer.png" alt="">
        <h2 class="section-title">{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      
      <ul v-if="categories.length" class="categories">
        <li v-for="item in categories">
          <span class="pill">{{ item }}</span>
        </li>
      </ul>
      <div class="grid-container" v-if="list.length">
        <div v-for="item in list" class="card">
          <CareerCard :item="item" @click.prevent="goTo('/careers/' + item.id)"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CareerCard from "./CareerCard.vue";
import { useRouter } from "vue-router";

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
    CareerCard,
  },
  setup() {
    const router = useRouter();
    const goTo = (path) => {
      router.push(path);
    };

    return {
      goTo,
    };
  },
};
</script>
