<template>
  <nav class="navbar navbar-expand-lg" :class="{ 'navbar-open': isCollapseOpen }">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
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
        <div class="mobile-navbar-content">
          <ul>
            <li class="active">
              <div class="nav-menu-title">Programs</div>
              <div class="nav-menu-content nav-menu-content__cards">
                <div class="card-item" v-for="item in programs">
                  <div class="card-image">
                    <span class="card-tag">{{ item.tag }}</span>
                  </div>
                  <div class="card-footer">
                    <div class="card-description" v-html="item.description"></div>
                    <div class="card-action">
                      <a href="#">{{ item.cta}} <i class="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="nav-menu-title">News & Stories</div>
            </li>
            <li>
              <div class="nav-menu-title">Who We Are</div>
            </li>
            <li>
              <div class="nav-menu-title">Connect</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
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