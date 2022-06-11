<template>
<!--  <head>-->
<!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">-->
<!--    <title>-->

<!--    </title>-->

<!--  </head>-->
  <!-- Default form register -->
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <div class="form-group">
      <label>Username</label>
      <input type="text" class="form-control" v-model="username" placeholder="Username"/>
    </div>

    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-model="first_name" placeholder="First Name"/>
    </div>

    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="last_name" placeholder="Last Name"/>
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email"/>
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>

    <div class="form-group">
      <label>Confirm Password</label>
      <input type="password" class="form-control" v-model="password2" placeholder="Confirm Password"/>
    </div>

    <button class="btn btn-primary btn-block">Sign up</button>

    <p class="login text-right">
      <router-link to="login">Already Registered?</router-link>
    </p>

  </form>
  <!-- Default form register -->
</template>

<script>
// import axios from 'axios'
export default {
  name: 'RegistrationMain',
  data () {
    return {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
      }
  },
  // methods: {
  //   async handleSubmit() {
  //     const response = await axios.post('Registration', {
  //       first_name: this.first_name,
  //       last_name: this.last_name,
  //       email: this.email,
  //       password: this.password,
  //       password_confirm: this.password_confirm
  //     });

      // await this.$router.push('/Login');
//     }
//   }
 }

</script>

<style scoped>
form{
  width: 400px;
  margin: auto;
}
</style>