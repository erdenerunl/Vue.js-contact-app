<template>
  <div class="container">
    <div class="contact--card--app">
      <contact-section
        @contact-delete-event="refreshList"
        v-for="contact in contactList"
        :key="contact.id"
        :contactData="contact"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ContactSection from "../components/ContactSection.vue";
export default {
  components: { ContactSection },
  data() {
    return {
      contactList: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/contacts")
      .then((contact_list_response) => {
        this.contactList = contact_list_response.data;
      });
  },
  methods: {
    refreshList(contact) {
      this.contactList = this.contactList.filter((i) => i.id !== contact.id);
    },
  },
};
</script>

<style>
</style>