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
hr {
  margin-block: 30px;
}

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
  margin-block: 35px;
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
          <div class="tag">
            <span class="name">{{ data?.tag.label }}</span>
            <span class="logo"><img :src="data?.tag.logo" /></span>
            <span class="description" v-if="data?.tag">{{ data?.tag.description }}</span>
          </div>
          <hr>
          <div class="body">
            <h2>{{ data?.highlight.title }}</h2>
            <div v-if="data?.highlight.body" v-html="data?.highlight.body"></div>
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
            </div>
        
            <!-- Tab Content -->
            <div class="tab-content">
              <div
                :key="0"
                v-show=" data.activeTab === 0"
              >
                <h3>What to Expect</h3>
                <div class="with-icon-box" v-for="card in data?.aboutCards">
                  <span class="icon-box">
                    <img :src="card.icon" />
                    {{ card.name }}
                  </span>
                  <span class="description" v-html="card.description"></span>
                </div>
              </div>
              <div
                :key="1"
                v-show=" data.activeTab === 1"
              >
                <h3>Requirements</h3>
                <div class="with-icon-box" v-for="req in data?.requirementCards">
                  <span class="icon-box">
                    <img :src="req.icon" />
                    {{ req.name }}
                  </span>
                  <span class="description" v-html="req.description"></span>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="goals">
            <h3>{{data?.goal.title}}</h3>
            <div v-if="data?.goal.body" v-html="data?.goal.body"></div>
          </div>
        </div>
        <div class="sticky-card">
          <div class="card-body">
            <div class="schedule">
              <div class="label">CLASSES WILL START ON</div>
              <div class="value">{{ data?.classSchedule }}</div>
            </div>
            <div class="schedule">
              <div class="label">APPLICATION PERIOD</div>
              <div class="value">{{ data?.applicationSchedule }}</div>
            </div>
            <a href="" class="link text-gradient">Ask a Question</a>
          </div>
          <a href="" class="card-cta btn">Apply Now</a>
        </div>
      </div>
    </div>
  </main>
</template>
