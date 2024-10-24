<template>
  <section :id="sectionId" class="stats-section">
    <div class="stat-container">
      <!-- Iterate through the data and animate each stat -->
      <div class="stat" v-for="(item, index) in data" :key="index">
        <div class="count">
          <!-- Use a unique ref for each rolling number based on index -->
          <span :ref="'rollingNumber' + index">{{ item.displayedStat }}{{ item.statPost }}</span>
        </div>
        <div class="label">{{ item.name }}</div>
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
    data: {
      type: Array, // Changed to Array since it's a list of items
      required: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.hasAnimated = this.data.map(() => false); // Initialize animation flags for each item
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    animateNumber(index) {
      let start = 0;
      let end = this.data[index].stat; // Use the stat from props
      let duration = 1500; // Total duration in milliseconds
      let step = 10; // Update every 10ms
      let lastFewNumbers = 3; // Slow down for the last 3 numbers
      let fastDuration = duration * 0.7; // 70% of the duration will be fast
      let slowDuration = duration * 0.3; // 30% for the last numbers

      // Fast phase: Animate from 0 to `targetNumber - lastFewNumbers`
      let current = start;
      let fastEnd = end - lastFewNumbers;
      let fastIncrement = fastEnd / (fastDuration / step);

      let fastTimer = setInterval(() => {
        current += fastIncrement;
        if (current >= fastEnd) {
          current = fastEnd;
          clearInterval(fastTimer);
          // After fast phase, start slow phase
          this.slowDownAnimation(index, current, end, slowDuration, step);
        }
        this.data[index].displayedStat = Math.floor(current);
      }, step);
    },
    slowDownAnimation(index, start, end, duration, step) {
      let range = end - start;
      let increment = range / (duration / step); // Smaller increment for slower animation

      let current = start;
      let slowTimer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(slowTimer);
        }
        this.data[index].displayedStat = Math.floor(current);
      }, step);
    },
    isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    onScroll() {
      this.data.forEach((item, index) => {
        let element = this.$refs['rollingNumber' + index][0]; // Access the element by its unique ref
        if (!this.hasAnimated[index] && this.isElementInViewport(element)) {
          this.animateNumber(index);
          this.hasAnimated[index] = true; // Mark as animated to avoid reruns
        }
      });
    }
  },
  data() {
    return {
      hasAnimated: [] // Track which stats have been animated
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.stat-container {
  display: flex;
  flex-wrap: wrap;
}

.stat {
  margin: 1rem;
  text-align: center;
}

.count {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
}

.label {
  font-size: 1.2rem;
  color: #555;
}
</style>
