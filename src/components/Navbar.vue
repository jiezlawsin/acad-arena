<template>
  <nav class="navbar navbar-expand-lg" :class="{ 'navbar-open': isCollapseOpen }">
    <div class="container container-fluid">
      <a class="navbar-brand" href="#" @click.prevent="goTo('/')">
        <img src="../assets/images/logo-black.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi" :class="{
          'bi-x-lg show': isCollapseOpen,
          'bi-list': !isCollapseOpen,
        }"></i>
      </button>
      <div class="collapse navbar-collapse flex-justify-end" id="navbarSupportedContent">
        <ul class="navbar-nav navbar-nav-links mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Community
              <img src="/images/icons/chevron-down.svg" alt="">
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/alliance" @click.prevent="goTo('/alliance')">Alliance</a>
              </li>
              <li>
                <a class="dropdown-item" href="/buffs" @click.prevent="goTo('/buffs')">Buffs</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.challengermode.com/s/AcadArenaPH" target="_blank">Competition</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Career
              <img src="/images/icons/chevron-down.svg" alt="">
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#" @click.prevent="">Soon</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/stories" @click.prevent="goTo('/stories')">News & Stories</a>
          </li>
          <!-- <li class="nav-item nav-item__contact">
            <a href="" class="nav-button-link">Contact Us</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import $ from "jquery";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      isCollapseOpen: false,
      programs: [
        {
          tag: "Lorem Ipsum",
          description:
            "<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.",
          cta: "CTA Here",
        },
        {
          tag: "Lorem Ipsum",
          description:
            "<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.",
          cta: "CTA Here",
        },
        {
          tag: "Lorem Ipsum",
          description:
            "<b>Lorem ipsum</b>—dolor sit amet, consectetur adipiscing elit.",
          cta: "CTA Here",
        },
      ],
    };
  },
  setup() {
    const router = useRouter();

    const goTo = (path: string) => {
      console.log('goto');
      $('nav .navbar-toggler').removeClass('collapsed');
      $('nav .navbar-toggler').attr('aria-expanded', false);
      $('nav .navbar-toggler i').removeClass('bi-x-lg show').addClass('bi-list');
      $('nav .navbar-collapse').removeClass('show');

      router.push(path);
    };

    return {
      goTo,
    };
  },
  mounted() {
    // Get the collapse element
    const collapseElement = document.querySelector(".navbar-collapse");

    // Listen for the show.bs.collapse event
    collapseElement.addEventListener("show.bs.collapse", () => {
      this.isCollapseOpen = true;
    });

    // Listen for the hide.bs.collapse event
    collapseElement.addEventListener("hide.bs.collapse", () => {
      this.isCollapseOpen = false;
    });
  },
};
</script>
