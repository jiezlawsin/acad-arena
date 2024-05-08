<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'compete',
  title: 'Compete',
  mounted() {
    window.location.href = "https://www.challengermode.com/s/AcadArenaPH";
  }
})
</script>


<template>
  <main class="under-construction-page">
    <div>
      Redirecting to ChallengerMode
    </div>
    <div class="logo"><img src="../assets/images/logo-colored.png" alt=""></div>
  </main>
</template>

<style>
.under-construction-page + * {
  display: none !important;
}
nav:has(+ .under-construction-page) {
  display: none !important;
}

</style>
