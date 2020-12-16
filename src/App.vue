<template>
  <div>
    <header>Contact Card App</header>
    <div class="container">
      <div class="contact--card--app">
        <contact-section v-for="(contact, index) in 10" :key="index" :contactData="contactData" />
      </div>
    </div>
  </div>
</template>

<script>
import ContactSection from './components/ContactSection.vue'

export default {
  components: {
    ContactSection
  },
  data(){
    return {
      contactData : {
        id : 1,
        name : 'Gökhan Kandemir',
        title : 'Senior Software Engineer at PureSOL',
        url : '#',
        linkCounter : 150,
      },
      
    }
  },
  

}
</script>

<style>

</style>
