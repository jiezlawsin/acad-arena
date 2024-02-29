<template>
  <section :id="sectionId" class="newsletter-section">
    <div class="container">
      <div class="newsletter-container">
        <div class="flex align-content-sm-center row">
          <div class="col-lg-6 col-md-5 newsletter-art-container">
            <div class="newsletter-art">
              <img :src="newsletter.image" alt="">
            </div>
          </div>
          <div class="newsletter-content col-lg-6 col-md-7">
            <div class="title">{{ newsletter.title }}</div>
            <div v-if="newsletter.description" class="description" v-html="newsletter.description"></div>
            <input ref="emailInput" :class="{'error': emailError}" v-model="email" type="email" class="form-control" aria-describedby="email" placeholder="Enter your email">
            <div class="agree-tc content">
              <input type="checkbox" required id="agree-tc" name="agree-tc" v-model="agree">
              <label for="agree-tc">
                I agree to the <a href="/terms-and-conditions" target="_blank">Terms & Conditions.</a>
              </label>
            </div>
            <p v-if="agreeError && !agree" class="error-message">Please agree to the Terms & Conditions.</p>
            <div class="actions">
              <button type="button" class="btn btn-gradient cta" :disabled="submitLoading" @click="subscribeToNewsletter()">
                <i class="bi bi-envelope-fill"></i>
                Subscribe 
              </button>
              <a href="https://discord.gg/acadarenagg" target="_blank" class="btn btn-gradient cta">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4688 5.73438C23.0469 9.5625 24.3359 13.8594 23.8672 18.8203C23.8672 18.8203 23.8672 18.8594 23.8281 18.8594C22.1094 20.1484 20.1562 21.125 18.0859 21.75C18.0469 21.7891 18.0469 21.75 18.0078 21.75C17.5781 21.125 17.1875 20.5 16.8359 19.8359C16.8359 19.7969 16.8359 19.7578 16.875 19.7188C17.5 19.4844 18.0859 19.2109 18.6719 18.8594C18.7109 18.8594 18.7109 18.7812 18.6719 18.7422C18.5547 18.6641 18.4375 18.5859 18.3203 18.4688C18.2812 18.4688 18.2812 18.4688 18.2422 18.4688C14.5312 20.1875 10.4688 20.1875 6.71875 18.4688C6.67969 18.4688 6.64062 18.4688 6.64062 18.4688C6.52344 18.5859 6.40625 18.6641 6.28906 18.7422C6.21094 18.7812 6.25 18.8594 6.28906 18.8594C6.83594 19.2109 7.46094 19.4844 8.08594 19.7188C8.125 19.7578 8.125 19.7969 8.125 19.8359C7.77344 20.5 7.38281 21.125 6.95312 21.75C6.91406 21.75 6.875 21.7891 6.875 21.75C4.80469 21.125 2.85156 20.1484 1.13281 18.8594C1.09375 18.8594 1.09375 18.8203 1.09375 18.8203C0.703125 14.5234 1.52344 10.1875 4.49219 5.73438C4.49219 5.73438 4.49219 5.73438 4.53125 5.73438C6.01562 5.03125 7.57812 4.5625 9.17969 4.28906C9.21875 4.25 9.25781 4.28906 9.25781 4.28906C9.49219 4.67969 9.6875 5.10938 9.84375 5.5C11.6016 5.22656 13.3594 5.22656 15.1172 5.5C15.2734 5.10938 15.4688 4.67969 15.7031 4.28906C15.7031 4.28906 15.7422 4.25 15.7812 4.28906C17.3828 4.5625 18.9453 5.03125 20.4297 5.73438C20.4688 5.73438 20.4688 5.73438 20.4688 5.73438ZM8.67188 16.2031C9.80469 16.2031 10.7422 15.1484 10.7422 13.8984C10.7422 12.6094 9.84375 11.5938 8.67188 11.5938C7.53906 11.5938 6.60156 12.6094 6.60156 13.8984C6.60156 15.1484 7.53906 16.2031 8.67188 16.2031ZM16.2891 16.2031C17.4609 16.2031 18.3594 15.1484 18.3594 13.8984C18.3984 12.6094 17.4609 11.5938 16.2891 11.5938C15.1562 11.5938 14.2578 12.6094 14.2578 13.8984C14.2578 15.1484 15.1562 16.2031 16.2891 16.2031Z" fill="white"/>
                </svg>
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Violator v-if="showAlert" :section-id="alert.name" :data="alert.data" />
  </section>
</template>

<script lang="ts">
import $ from "jquery";
import axios from 'axios';
import Violator from './Violator.vue'

export default {
  components: {
    Violator
  },
  props: {
    sectionId: {
      type: String,
      required: true
    },
    newsletter: {
      type: Object,
      required: true
    },
  },  
  data() {
    return {
      email: '',
      agree: false,
      emailError: false,
      agreeError: false,
      submitLoading: false,
      showAlert: false,
      alert: {
        name: "newsletter-subscribe-alert",
        data: {
          description: 'You have successfully subscribed to our newsletter.'
        }
      }
    }
  }, 
  methods: {
    async subscribeToNewsletter() {
      
      this.submitLoading = true;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.email && this.email !== '' && emailPattern.test(this.email)) {
        if (!this.agree) {
          this.agreeError = true;
          this.submitLoading = false;
          return;
        }
        this.emailError = false;
        try {
          const response = await axios.post('https://us21.api.mailchimp.com/3.0/lists/839d6de563/members', {
            email_address: this.email,
            status: 'subscribed',
            tags: ['AcadArena Education Website']
          }, {
            headers: {
              'Authorization': 'apikey 16ff5ac6f7a440ffe6fcff5f1c15d5d4-us21',
              'Content-Type': 'application/json'
            }
          });
          console.log(response);
          this.showAlert = true;
          this.submitLoading = false;
          setTimeout(() => {
            this.showAlert = false;
          }, 3000);
        } catch (error: any) {
          this.submitLoading = false;
          console.error(error.response.data);
        }
      } else {
        this.submitLoading = false;
        this.emailError = true;
        this.$refs.emailInput.focus();
      }
      
      // try {
      //   const response = await axios.post('https://us21.api.mailchimp.com/3.0/lists/839d6de563/members', {
      //     email_address: 'example@example.com',
      //     status: 'subscribed'
      //   }, {
      //     headers: {
      //       'Authorization': 'apikey YOUR_API_KEY',
      //       'Content-Type': 'application/json'
      //     }
      //   });
      //   console.log(response.data);
      // } catch (error: any) {
      //   console.error(error.response.data);
      // }
    }
  }
};

</script>
