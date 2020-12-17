<template>
  <div>
    <header>Contact Card App</header>
    <div class="container">
      <div class="contact--card--app">
        <contact-section
          v-for="(contact, index) in 10"
          :key="index"
          :contactData="contactData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContactSection from "./components/ContactSection.vue";

export default {
  components: {
    ContactSection,
  },
  data() {
    return {
      contactData: {
        id: 1,
        name: "Gökhan Kandemir",
        title: "Senior Software Engineer at PureSOL",
        url: "#",
        linkCounter: 150,
        photoLink: 'https://media-exp1.licdn.com/dms/image/C5603AQFjWy_2_wMdFw/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=7NQhzZFjrnV0ASU_LhPEWTEm12ZtqM6mrVv9XNUZFrE'
      },
    };
  },
};
</script>

<style>
</style>
