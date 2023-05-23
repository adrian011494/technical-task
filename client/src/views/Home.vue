<template>
  <div>
    <form v-if="!$route.params.user" @submit.prevent="fetchUserInformation">
      <input type="text" v-model="username" placeholder="Enter username" />
      <button type="submit">Search</button>
    </form>
    <div v-if="user.username">
      <h2>Details</h2>
      <p>User: {{ user.name }}</p>
      <p>Followers: {{ user.followers }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '', // Holds the entered username
      user: {}, // Holds the user information
    };
  },
  mounted() {
    this.fetchUserInformation(); // Fetch user information when the component is mounted
  },
  methods: {
    async fetchUserInformation() {
      // Method to fetch user information from the server
      try {
        let username;
        if (this.username) {
          username = this.username;
        } else if (this.$route.params.user) {
          username = this.$route.params.user;
        }
        if (username) {
          const response = await axios.get(`http://localhost:8080/users/${username}`);
          this.user = response.data;
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    },

    goToUserDetails() {
      // Method to navigate to the User component with the entered username
      this.$router.push({
        name: 'User',
        params: { user: this.username },
      });
    },
  },
};
</script>
