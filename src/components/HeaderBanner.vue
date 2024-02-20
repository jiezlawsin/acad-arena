<template>
  <section :id="sectionId" class="header-banner py-5" :class="{ dark: banner.isDark }">
    <div class="container">
      <h3 class="text-center">{{  banner.header  }}</h3>  
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
    banner: {
      type: Object,
      required: true
    },
  },
};

</script>
