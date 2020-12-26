<template>
  <div>
    <div class="card-light contact-item text-center">
      <div class="invitation--header">
        <img class="contact--image mt-20" :src="contactData.photoLink" />
      </div>
      <div class="contact--info--container">
        <h4 class="mt-10">{{ contactData.name }}</h4>
        <p class="mt-10 mb-10 text-muted">
          {{ contactData.title }}
        </p>
        <a class="text-muted" :href="contactData.url"
          >{{ contactData.linkCounter }} Ortak Bağlantı</a
        >
      </div>
      <div class="action--button--container">
        <button @click="addContact" class="btn-sm mr-10 btn-info">
          Bağlantı Kur
        </button>
        <button class="btn-sm btn-default">Yoksay</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ["contactData"],
  methods: {
    addContact() {
      axios
        .post("http://localhost:3000/contacts", this.contactData)
        .then((response) => {
          axios
            .delete(
              `ttp://localhost:3000/contact-requests/${this.contactData.id}`
            )
            .then((response) => {
              this.$emit("add-event", this.contactData);
            });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
