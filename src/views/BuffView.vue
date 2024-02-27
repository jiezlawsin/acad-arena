<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../components/Banner.vue'
import BuffsList from '../mock/buffs.ts'

export default defineComponent({
  name: 'buffView',
  title: 'BuffView',
  data() {
    return {
      data: null
    };
  },
  mounted() {
    console.log(BuffsList)
  }
})
</script>


<template>
  <main>
    buff view
  </main>
</template>
