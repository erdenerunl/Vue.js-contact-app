<template>
  <div class="container">
    <div class="contact--card--app">
      <contact-section
        @contact-delete-event="refreshList"
        v-for="contact in contactList"
        :key="contact.id"
        :contactInfo="contact"
      />
    </div>
  </div>
</template>

<script>
import ContactSection from "../components/ContactSection.vue";
export default {
  components: { ContactSection },
  data(){
      return {
          contactList: []
      }
  }
};
</script>

<style>
</style>