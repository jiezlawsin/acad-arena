<template>
  <nav class="navbar navbar-expand-lg" :class="{ 'navbar-open': isCollapseOpen }">
    <div class="container container-fluid">
      <a class="navbar-brand" href="#" @click.prevent="goTo('/')">
        <img src="../assets/images/logo-white.png" alt="">
        <div class="brand-text">
          <div>acadarena</div>
          <div>education</div>
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi " :class="{ 'bi-x-lg show': isCollapseOpen, 'bi-list': !isCollapseOpen }"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav navbar-nav-links mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/buffs" @click.prevent="goTo('/buffs')">Event Buffs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.challengermode.com/s/AcadArenaPH" target="_blank">Compete</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/alliance" @click.prevent="goTo('/alliance')">Alliance</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" >News & Stories</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      isCollapseOpen: false,
      programs: [
        {
          tag: 'Lorem Ipsum',
          description: '<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
          cta: 'CTA Here'
        },
        {
          tag: 'Lorem Ipsum',
          description: '<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
          cta: 'CTA Here'
        },
        {
          tag: 'Lorem Ipsum',
          description: '<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.',
          cta: 'CTA Here'
        },
      ]
    };
  },
  setup() {
    const router = useRouter();

    const goTo = (path: string) => {
      router.push(path);
    }

    return {
      goTo
    };
  },
  mounted() {
    // Get the collapse element
    const collapseElement = document.querySelector('.navbar-collapse');

    // Listen for the show.bs.collapse event
    collapseElement.addEventListener('show.bs.collapse', () => {
      this.isCollapseOpen = true;
    });

    // Listen for the hide.bs.collapse event
    collapseElement.addEventListener('hide.bs.collapse', () => {
      this.isCollapseOpen = false;
    });
  }
};

</script>