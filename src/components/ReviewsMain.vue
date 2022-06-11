<template>
  <div class="u-container-layout u-valign-top u-container-layout-4">
    <form @submit.prevent="handleSubmit">
      <h3>Reviews</h3>
      <div class="u-form-group u-form-message u-form-group-4">
        <textarea maxlength="200" rows="4" cols="45" id="message-daf4" name="message" class="u-border-2 u-border-white u-input u-input-rectangle u-radius-12 u-white" required="" v-model="Opinion" placeholder="Opinion"></textarea>
      </div>

      <button class="btn btn-primary btn-block">Finished</button>

    </form>
  </div>
</template>

<script>
export default {
name: "ReviewsMain",
  data () {
    return {
      Opinion: '',
    }
  },
}
</script>

<style scoped>
form{
  width: 400px;
  margin: auto;
  height: max-content;
}
</style>