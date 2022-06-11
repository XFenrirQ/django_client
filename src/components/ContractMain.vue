<template>
    <!--  <head>-->
    <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">-->
    <!--    <title>-->

    <!--    </title>-->

    <!--  </head>-->
    <form @submit.prevent="handleSubmit">
      <h3>Transport</h3>
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="title" placeholder="title" required="required"/>
      </div>

      <div class="form-group">
        <label>Price</label>
        <input type="number" min="10" max="200000" class="form-control" v-model="price" placeholder="price" required="required"/>
      </div>

      <div class="form-group">
        <label>Creation</label>
        <input type="datetime-local" class="form-control" v-model="created" placeholder="date" required="required"/>
      </div>

      <div class="form-group">
        <label>Deliver Time</label>
        <input type="datetime-local" class="form-control" v-model="deliver_time" placeholder="dedaline"/>
      </div>

      <div class="form-group">
        <label>Start</label>
        <input type="text" class="form-control" v-model="start" placeholder="starting point" required="required"/>
      </div>

      <div class="form-group">
        <label>Destination</label>
        <input type="text" class="form-control" v-model="destination" placeholder="Destionation"/>
      </div>

      <div class="form-group">
        <label>Weight</label>
        <input type="number" class="form-control" v-model="weight" placeholder="In kg"/>
      </div>

      <div class="form-group">
        <label>Phone Number</label>
        <input type="number" class="form-control" v-model="phone_number" placeholder="phone number"/>
      </div>

      <div class="u-form-group u-form-message u-form-group-4">
        <label for="message-daf4" class="u-form-control-hidden u-label">Description</label>
        <textarea maxlength="200" rows="4" cols="50" id="message-daf4" name="message" class="u-border-2 u-border-white u-input u-input-rectangle u-radius-12 u-white" required="" v-model="Description" placeholder="Description"></textarea>
      </div>


      <button class="btn btn-primary btn-block">Finished</button>

    </form>
</template>


<script>
export default {
  name: "ContractMain",
  data () {
    return {
      title: '',
      price: '',
      created: '',
      deliver_time: '',
      Description: '',
      start: '',
      destination: '',
      weight: '',
      phone_number:''
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