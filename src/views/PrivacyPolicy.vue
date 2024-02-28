<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';
import Newsletter from '../components/Newsletter.vue'

export default defineComponent({
  name: 'storyView',
  title: 'StoryView',
  components: {
    Newsletter
  },
})
</script>


<template>
  <main class="stories-page py-5">
    <div class="container">
      <h1>Privacy Policy</h1>
      <p>By signing up on our platform, you agree to our Data Privacy Policy below:</p>
      <p>AcadArena will be storing your personal information in order to create your account. This includes your name, age, address, school and level of education. We will be using your information strictly for account maintenance and research. To request deletion of your email, contact contact@acadarena.com.</p>
      <p>AcadArena is committed to protecting and safeguarding your personal data and data privacy rights. You have the right to be informed, object to processing, access and rectify, suspend and withhold personal data, and be indemnified in case of damages pursuant to the provisions of the DPA and DPA IRR.</p>
      <p>Only authorized personnel shall record your name, photo, video, audio, chats/shared screens and non verbal reactions taken during gaming events and forums which will be utilized for research and promotional purposes. Such data will be kept for a period of three (3) years.</p>
      <p>Photos and recordings during gaming events under the custody of AcadArena will only be disclosed to the members who participated in said games and their authorized recipients.</p>
      <p>AcadArena will not share personal information with any third parties without their consent unless permitted by our Data Privacy Law.</p>
      <p>If you wish to exercise any of your rights, or if you have any questions about your personal data, feel free to contact AcadArena’s Data Protection Officer at dpo@acadarena.com.</p>
      <p>‍If you have any concern or complaint about the way we are collecting or using your personal data, you should raise your concern with us in the first instance, or directly to the National Privacy Commission.</p>
    </div>
  </main>
</template>
