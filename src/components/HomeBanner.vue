<template>
  <section :id="sectionId" class="home-banner-section">
    <div id="home-banner-image-slide" class="home-banner-image-slide"
      :style="{ backgroundImage: `url(${currentBackground})` }"></div>
    <div class="container container-fluid">
      <div class="flex">
        <div class="home-banner-section__text-content">
          <h1 class="home-banner-section__heading">
            {{ banner.header }}
            <span class="highlight-container">
              <span v-for="(item, idx) in banner.images" :key="idx" class="highlight"
                :class="{ 'text-in': currentIndex === idx, 'text-out': exitingIndex === idx }" :data-img="item.image">
                {{ item.text }}.
              </span>
            </span>
          </h1>
          <p class="home-banner-section__description">{{ banner.description }}</p>
          <div class="home-banner-section__action">
            <a target="true" href="#" class="btn btn-lg btn-gradient">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  props: {
    sectionId: {
      type: String,
      required: true,
    },
    banner: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const currentBackground = ref(props.banner.images[0]?.image || "");
    const currentIndex = ref(0);
    const exitingIndex = ref(-1);
    const textInTimer = 5000;
    const textOutTimer = 4800;

    function animateText() {
      console.log(currentIndex.value);
      currentBackground.value = props.banner.images[currentIndex.value].image;

      setTimeout(() => {
        exitingIndex.value = currentIndex.value;
      }, textOutTimer);

      setTimeout(() => {
        currentIndex.value = (currentIndex.value + 1) % props.banner.images.length;
        animateText();
      }, textInTimer);
    }

    onMounted(() => {
      animateText();
    });

    return {
      currentBackground,
      currentIndex,
      exitingIndex,
    };
  },
};
</script>