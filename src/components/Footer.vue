<template>
  <footer id="footer">
    <div class="container">
      <div class="sponsors">
        <!-- <a >
          <img src="../assets/images/UniPinWhite.png" alt="UniPin logo">
        </a> -->
        <a >
          <img src="/images/brands/GFP.png" alt="Globe logo">
        </a>
        <a >
          <img src="/images/brands/Pocky.png" alt="Globe logo">
          <!-- <img src="../assets/images/Mountain-Dew.png" alt="Mountain Dew logo"> -->
        </a>
        <a >
          <img src="/images/brands/moonton.png" alt="Moonton logo">
        </a>
      </div>
      <hr>
      <div class="sitemap row">
        <ul class="col-sm-6">
          <li><a href="/buffs" @click.prevent="goTo('/buffs')">AcadArena Buffs</a></li>
          <li><a href="/alliance" @click.prevent="goTo('/alliance')">Alliance Program</a></li>
          <li><a href="https://www.challengermode.com/s/AcadArenaPH" target="_blank">Competition Hub</a></li>
          <li><a href="/buffs-marketplace" @click.prevent="goTo('/buffs-marketplace')">Buff Marketplace</a></li>
          <!-- <li><a href="#" target="_blank">Contact Us</a></li> -->
        </ul>
        <ul class="col-sm-6">
          <li><a href="/stories" @click.prevent="goTo('/stories')">News & Stories</a></li>
          <li><a href="/privacy-policy" @click.prevent="goTo('/privacy-policy')">Privacy Policy</a></li>
          <li><a href="/terms-and-conditions" @click.prevent="goTo('/terms-and-conditions')">Terms and Conditions</a></li>
        </ul>
      </div>
      <div class="socials">
        <a href="https://discord.gg/acadarenagg" target="_blank"><img src="../assets/images/discord.svg" alt=""></a>
        <a href="https://www.facebook.com/AcadArenaGG" target="_blank"><img src="../assets/images/facebook.svg" alt=""></a>
        <a href="https://twitter.com/acadarena" target="_blank"><img src="../assets/images/twitter.svg" alt=""></a>
        <a href="https://www.instagram.com/acadarenagg" target="_blank"><img src="../assets/images/instagram.svg" alt=""></a>
        <a href="https://www.challengermode.com/s/AcadArenaPH" target="_blank"><img src="../assets/images/challenger.svg" alt=""></a>
      </div>
      <hr>
      <div class="copyright">
        <div class="logo"><img src="../assets/images/logo.png" alt="acadarena education"></div>
        <div class="copy">&copy; 2022 AcadArena &bull; AcadArena is a trademarked brand owned by AcadArena Digital Education Solutions OPC. All other trademarks are owned by their respective owners.</div>
      </div>
    </div>
  </footer>
</template>


<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goTo = (path: string) => {
      router.push(path);
    }

    return {
      goTo
    };
  },
};

</script>