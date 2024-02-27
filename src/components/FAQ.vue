<template>
  <section :id="sectionId" class="faq-section">
    <div class="background-image">
      <img :src="data.image" alt="">
    </div>
    <div class="container">
      <div class="row">
        <div class="left col-md-6">
        </div>
        <div class="right col-md-6 py-5">
          <div class="title">{{ data.title }}</div>
          <div class="accordion" :id="'accordion' + sectionId">
            <div class="accordion-item" v-for="(faq, index) in data.faqs">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + sectionId + index" aria-expanded="true" :aria-controls="'#collapse' + sectionId + index">
                  {{ faq.question}}
                  <i class="bi bi-plus"></i>
                </button>
              </h2>
              <div :id="'collapse' + sectionId + index" class="accordion-collapse collapse" :data-bs-parent="'#accordion' + sectionId">
                <div class="accordion-body" v-html="faq.answer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

export default {
  props: {
    sectionId: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
  },
};
</script>
