<script lang="ts">
import { defineComponent } from 'vue'
import { BuffsList } from '../mock/buffs'
import { useRouter } from 'vue-router';
import BuffCard from '../components/BuffCard.vue'

export default defineComponent({
  name: 'buffMarketplace',
  title: 'Buff Marketplace',
  components: {
    BuffCard,
  },
  data() {
    return {
      buffs: BuffsList
    };
  },
  mounted() {
    console.log('BUFFS', BuffsList)
  }
})
</script>


<template>
  <main class="buffs-marketplace-page ">
    <div class="header-container container py-5">
      <h2 class="header-title line-height-1">Buffs Marketplace</h2>
      <p class="content">We have limited buffs per month! <a>Check back for new buffs per cycle.</a></p>
      <div class="buffs-list">
        <div class="card" v-for="buff in buffs">
          <BuffCard :item="buff" />
        </div>
      </div>
    </div>
    <div class="wanttogetprio-section">
      <div class="container">
        <h3>Want to get prio?</h3>
        <p>The more you learn, the more buffs you can unlock. Learn more about our other programs.</p>
        <br>
        <div class="actions">
          <a href="/alliance">
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 25C20.2969 25 25 20.2969 25 14.5C25 8.70312 20.2969 4 14.5 4C8.64844 4 4 8.70312 4 14.5C4 14.7188 4 14.9375 4 15.1562L0.554688 16.1953C0.5 15.6484 0.5 15.1016 0.5 14.5C0.5 6.78906 6.73438 0.5 14.5 0.5C22.2109 0.5 28.5 6.78906 28.5 14.5C28.5 22.2656 22.2109 28.5 14.5 28.5C13.8984 28.5 13.3516 28.5 12.8047 28.4453L13.8438 25C14.0625 25 14.2812 25 14.5 25ZM15.7031 18.7109C17.5078 18.2188 18.875 16.5234 18.875 14.5C18.875 12.0938 16.9062 10.125 14.5 10.125C12.4766 10.125 10.7812 11.4922 10.2891 13.2969L6.625 14.3906C6.67969 10.125 10.1797 6.625 14.5 6.625C18.8203 6.625 22.375 10.1797 22.375 14.5C22.375 18.8203 18.875 22.3203 14.6094 22.375L15.7031 18.7109ZM2.63281 17.3984L13.7891 14.1172C14.5 13.8984 15.1016 14.5 14.8828 15.2109L11.6016 26.3672C11.3828 27.1328 10.3438 27.2422 9.96094 26.5312L8.42969 23.4141C8.375 23.3047 8.32031 23.25 8.26562 23.1953L3.45312 28.0078C2.79688 28.7188 1.64844 28.7188 0.992188 28.0078C0.28125 27.3516 0.28125 26.2031 0.992188 25.5469L5.80469 20.7344C5.75 20.6797 5.69531 20.625 5.58594 20.5703L2.46875 19.0391C1.75781 18.6562 1.86719 17.6172 2.63281 17.3984Z"
                fill="url(#paint0_linear_856581_665)" />
              <defs>
                <linearGradient id="paint0_linear_856581_665" x1="46.18" y1="14" x2="-16.6697" y2="15.379"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#78C3FF" />
                  <stop offset="1" stop-color="#9030CF" />
                </linearGradient>
              </defs>
            </svg>
            <div class="title">
              Join the Alliance
            </div>
          </a>
          <a class="disabled">
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 25C20.2969 25 25 20.2969 25 14.5C25 8.70312 20.2969 4 14.5 4C8.64844 4 4 8.70312 4 14.5C4 14.7188 4 14.9375 4 15.1562L0.554688 16.1953C0.5 15.6484 0.5 15.1016 0.5 14.5C0.5 6.78906 6.73438 0.5 14.5 0.5C22.2109 0.5 28.5 6.78906 28.5 14.5C28.5 22.2656 22.2109 28.5 14.5 28.5C13.8984 28.5 13.3516 28.5 12.8047 28.4453L13.8438 25C14.0625 25 14.2812 25 14.5 25ZM15.7031 18.7109C17.5078 18.2188 18.875 16.5234 18.875 14.5C18.875 12.0938 16.9062 10.125 14.5 10.125C12.4766 10.125 10.7812 11.4922 10.2891 13.2969L6.625 14.3906C6.67969 10.125 10.1797 6.625 14.5 6.625C18.8203 6.625 22.375 10.1797 22.375 14.5C22.375 18.8203 18.875 22.3203 14.6094 22.375L15.7031 18.7109ZM2.63281 17.3984L13.7891 14.1172C14.5 13.8984 15.1016 14.5 14.8828 15.2109L11.6016 26.3672C11.3828 27.1328 10.3438 27.2422 9.96094 26.5312L8.42969 23.4141C8.375 23.3047 8.32031 23.25 8.26562 23.1953L3.45312 28.0078C2.79688 28.7188 1.64844 28.7188 0.992188 28.0078C0.28125 27.3516 0.28125 26.2031 0.992188 25.5469L5.80469 20.7344C5.75 20.6797 5.69531 20.625 5.58594 20.5703L2.46875 19.0391C1.75781 18.6562 1.86719 17.6172 2.63281 17.3984Z"
                fill="url(#paint0_linear_856581_665)" />
              <defs>
                <linearGradient id="paint0_linear_856581_665" x1="46.18" y1="14" x2="-16.6697" y2="15.379"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#78C3FF" />
                  <stop offset="1" stop-color="#9030CF" />
                </linearGradient>
              </defs>
            </svg>
            <div class="title">
              Enroll in Our Classes
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
