<template>
  <div>
    <div class="card-light contact-item text-center">
      <div class="invitation--header">
        <img
          class="contact--image mt-20"
          src="https://media-exp1.licdn.com/dms/image/C5603AQFjWy_2_wMdFw/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=7NQhzZFjrnV0ASU_LhPEWTEm12ZtqM6mrVv9XNUZFrE"
        />
      </div>
      <div class="contact--info--container">
        <h4 class="mt-10"> {{ contactData.name }} </h4>
        <p class="mt-10 mb-10 text-muted">
          {{ contactData.title }}
        </p>
        <a class="text-muted" :href="contactData.url">{{ contactData.linkCounter }} Ortak Bağlantı</a>
      </div>
      <div class="action--button--container">
        <button class="btn-sm mr-10 btn-info">Bağlantı Kur</button>
        <button class="btn-sm btn-default">Yoksay</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props : ['contactData']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
