<script lang="ts">
import { defineComponent } from 'vue'
import { CareersList } from '../mock/careers'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'careerView',
  title: 'CareerView',
  data() {
    return {
      data: CareersList.find(career => career.id === this.$route.params.id)
    };
  },
  mounted() {
    const router = useRouter();
    if (!this.data) {
      router.push('/notfound');
    }
  }
})
</script>


<template>
  <main class="careers-view-page">
    <div class="container career-view-container">
      <div class="content">
        <h1>{{ data?.name }}</h1>
        <div class="tag">{{ data?.tag }}</div>
        <hr>
      </div>
      <div class="sticky-card">
        <div class="card-body"></div>
        <a href="" class="card-cta btn">Apply Now</a>
      </div>
    </div>
  </main>
</template>
