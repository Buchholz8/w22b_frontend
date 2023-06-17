<template>
    <div>
      <article v-if="!signed_up" ref="sign_up">
        <input type="text" placeholder="username" ref="username">
        <input type="email" placeholder="email" ref="email">
        <input type="password" placeholder="password" ref="password">
        <input type="url" placeholder="image_url" ref="image">
        <button @click="do_signup">Sign Up</button>
      </article>
      <article v-else ref="login_in">
        <input type="text" placeholder="username" ref="username">
        <input type="password" placeholder="password" ref="password">
        <button @click="do_login">Login</button>
      </article>
      <button @click="toggleSignUp">{{ signed_up ? 'Already Signed Up' : 'Not Signed Up' }}</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import cookies from 'vue-cookies';
  
  export default {
    data() {
      return {
        signed_up: false
      };
    },
    methods: {
      do_signup: function() {
        axios
          .post('http://127.0.0.1:5000/api/client', {
            username: this.$refs.username.value,
            email: this.$refs.email.value,
            password: this.$refs.password.value,
            image_url: this.$refs.image.value
          })
          .then(response => {
            this.signed_up = true;
            response;
          })
          .catch(error => {
            console.error("Something went wrong");
            error;
          });
      },
      toggleSignUp: function() {
        this.signed_up = !this.signed_up;
      },



      do_login: function(){
        axios
          .post('http://127.0.0.1:5000/api/login', {
            username: this.$refs.username.value,
            password: this.$refs.password.value,
          })
          .then(response => {
            cookies.set(`token` , response.data['token']);
            this.$router.push('/MainView');
          })
          .catch(error => {
            console.error("Something went wrong");
            error;
          });
      }
    }
  };
  </script>
  
  <style scoped></style>