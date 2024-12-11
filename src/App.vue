<script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import NotFound  from './views/404.vue';
</script>

<template>
  <NotFound />
  <!-- <Navbar/>
  <RouterView />
  <Footer/> -->
</template>