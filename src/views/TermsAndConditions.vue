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
      <h1>Terms and Conditions</h1>
      <p>AcadArena Digital Education Solutions OPC (“AcadArena”) primarily focuses on student users and enables them to enter gaming competitions with various universities, obtain scholarship grants, register to and access educational content, and interact with the student community on our platform. </p>
      <p>By accessing this website, you agree to be bound by the terms and conditions of AcadArena. set forth below:</p>
      <br><br>
      <h3>1. Account Registration</h3>
      <p>AcadArena primarily caters to student users. Students enjoy full access to AcadArena’s platforms. Post-graduate students and other users may register on the platform but will have limited access to our services.</p>
      <br>
      <h3>2. Use of Services</h3>
      <p>Our Users agree to abide by the following rules:</p>
      <ol type="a">
        <li>Users may not post, comment or share libelous, defamatory, obscene, fraudulent, harmful, threatening, abusive, hateful or threatening language;</li>
        <li>Users may not post anything that violates the property rights of others;</li>
        <li>Users may not engage in harassment or any behavior that may be construed as bullying; </li>
        <li>Users may not post any information that is in violation of one’s data privacy rights;</li>
        <li>Users may not use this site to conduct any activity that is illegal, immoral or contrary to public policy;</li>
        <li>Users may not engage cheating or any form of misconduct during gaming events;</li>
        <li>Users may not submit false or fraudulent information;</li>
      </ol>
      <p>Users may report inappropriate content and conduct through contact@acadarena.com.</p>
      <p>If found to be in violation of these rules, AcadArena reserves their right to: 1) remove the inappropriate information or material submitted on the website, 2) temporarily suspend the user from using AcadArena’s platform and other online community channels pending investigation  3) deactivate or cancel the user account after due notice 4) remove user from other online channels and communities after due notice. </p>
      <br>
      <h3>3. Age Requirement</h3>
      <p>Users of our platform must be 18 years old and above. </p>
      <p>Users who are below eighteen years old will need to obtain the consent from their parents or legal guardian who will create the account with them. </p>
      <p>As the parent or legal guardian of the minor, the creation of the account is an indication that you are giving your child permission to use our platform and agree to the terms and conditions stated in this section. You further acknowledge that you are responsible for monitoring your child’s activity on our platform and hold AcadArena free from liability with regards to your child’s activity. </p>
      <br>
      <h3>4. Text or Email Marketing</h3>
      <p>You agree to automatically receive text and email updates from AcadArena concerning events, sponsorships and promotions of our services. You may cancel email and text subscriptions anytime through proper notification. </p>
      <br>
      <h3>5. Complaints</h3>
      <p>For complaints among users or to report a problem on one of our features of our website, you may email contact@acadarena.com.</p>
      <p>Complaints will be investigated by the authorized personnel within thirty days (30) days from receipt of the complaint. </p>
      <br>
      <h3>6. Liability of AcadArena to Its Users</h3>
      <p>AcadArena has no responsibility over the content posted by users on their platform but will take appropriate action to investigate any user in violation of this agreement. AcadArena shall not be liable for damages for communication or actions done outside of our platform.</p>
      <br>
      <h3>7. Independence from Universities and Student Organizations</h3>
      <p>AcadArena maintains its independence from the universities and student organizations they are affiliated with. Any sanctions, conflicts, or investigations of students with their respective universities or organizations will not affect their continued use of our platform.</p>
      <p>AcadArena will not give the personal or collected information of our users to their universities or student organizations unless there is written consent from the user or a court order mandating us to give the required information. ‍</p>
      <br>
      <h3>8. Dispute and Jurisdiction</h3>
      <p>Any dispute arising from this agreement or use of the website shall be governed by Philippine Law and shall be brought exclusively before the courts of Taguig City.</p>
      <p>Failure to enforce any provision of this agreement shall not be construed as a waiver of any provision or right.</p>
    </div>
  </main>
</template>
