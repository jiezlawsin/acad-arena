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
  methods: {
    setActiveTab(index: number) {
      this.data.activeTab = index;
    },
  },
  mounted() {
    const router = useRouter();
    if (!this.data) {
      router.push('/notfound');
    }
  }
})
</script>

<style scoped>
.tabs {
  width: 100%;
}

.tab-buttons {
  display: flex;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, #78C3FF, #9030CF) 1;
}

.tab-buttons button {
  padding: 6px 40px 8px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  font-size: 10px;
  color: #00174C;
  margin-bottom: -1px;
}

.tab-buttons button.active {
  border: 1px solid;
  border-image: linear-gradient(to right, #9030CF, #78C3FF) 1;
  border-bottom: none;
  background: white;
}

.tab-buttons button:first-child.active {
  border-left: none;
}

.tab-content {
  padding-block: 35px 90px;
}
</style>

<template>
  <main class="careers-view-page">
    <div class="container career-view-container">
      <a href="/careers" class="back">
        <img src="../assets/images/back-arrow.svg" alt="">
        BACK
      </a>
      <div class="hero">
        <img :src="data?.cardImage" alt="">
      </div>
      <div class="grid-content">
        <div class="content">
          <h1>{{ data?.name }}</h1>
          <div class="tag">{{ data?.tag }}</div>
          <hr>
          <div class="body">
            <h2>Leave a Legacy Through Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div class="tabs">
            <!-- Tab Buttons -->
            <div class="tab-buttons">
              <button
                :key="0"
                :class="{ active:  data.activeTab === 0 }"
                @click="setActiveTab(0)"
              >
                About
              </button>
              <button
                :key="1"
                :class="{ active:  data.activeTab === 1 }"
                @click="setActiveTab(1)"
              >
                Must Haves
              </button>
              <button
                :key="2"
                :class="{ active:  data.activeTab === 2 }"
                @click="setActiveTab(2)"
              >
                Schedule
              </button>
            </div>
        
            <!-- Tab Content -->
            <div class="tab-content">
              <div
                :key="0"
                v-show=" data.activeTab === 0"
              >
                <h3>What to Expect</h3>
                <hr>
                <h3>Learning Goals</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <hr>
                <h3>Show & Tell</h3>
              </div>
              <div
                :key="1"
                v-show=" data.activeTab === 1"
              >
                Content 2
              </div>
              <div
                :key="2"
                v-show=" data.activeTab === 2"
              >
                Content 3
              </div>
            </div>
          </div>
        </div>
        <div class="sticky-card">
          <div class="card-body">
            <div class="schedule">
              <div class="label">CLASSES WILL START ON</div>
              <div class="value">DEC 2024-MAR 2025</div>
            </div>
            <div class="schedule">
              <div class="label">APPLICATION PERIOD</div>
              <div class="value">OCT 2024-NOV 2024</div>
            </div>
            <a href="" class="link text-gradient">Ask a Question</a>
          </div>
          <a href="" class="card-cta btn">Apply Now</a>
        </div>
      </div>
    </div>
  </main>
</template>
