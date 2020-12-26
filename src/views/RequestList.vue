<template>
  <div class="container">
    <div class="contact--card--app">
      <contact-section
        v-for="contact in contactRequestList"
        :key="contact.id"
        :contactData="contact"
        @add-event="refreshList"
        @skip-event="refreshList"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ContactSection from "../components/ContactSection.vue";
export default {
  components: {
    ContactSection,
  },
  data() {
    return {
      contactRequestList: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/contact-requests").then((response) => {
      console.log(response.data);
      this.contactRequestList = response.data;
    });
  },
  methods: {
      refreshList(contact){
        this.contactRequestList = this.contactRequestList.filter(c => c.id != contact.id )
      }
  }
};
</script>

<style>
</style>