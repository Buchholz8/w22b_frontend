<template>
    <div>
      <article v-for="client in clients" :key="client.id">
        <h2>{{ client.username }}</h2>
        <p>{{ client.email }}</p>
        <img :src="client.image_url" alt="Client Image">
        <p>{{ client.bio }}</p>
      </article>
      <article>
        <input type="text" placeholder="token" ref="token_input">
        <button @click="delete_token">log out</button>
      </article>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import cookies from "vue-cookies";
  
  export default {
    data() {
      return {
        clients: []
      };
    },
    created() {
      this.fetchClients();
    },
    methods: {
      fetchClients() {
        axios
          .get('http://127.0.0.1:5000/api/client')
          .then(response => {
            this.clients = response.data;
          })
          .catch(error => {
            console.error("Something went wrong");
            error;
          });
      },
      delete_token() {
        const token = this.$refs.token_input.value;
        axios
          .delete('http://127.0.0.1:5000/api/client' , {
          headers: {
            'token' : token
        }
          })
          .then(response => {
            cookies.remove('token')
            this.$router.push('/LoginView');
            response;
          })
          .catch(error => {
            console.error("Something went wrong");
            error;
          });
    }
  }}
  </script>
  
  <style scoped></style>