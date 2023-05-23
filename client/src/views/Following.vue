<template>
  <div>
    <p @click="incrementFollowingCount">Following: {{ user.followers }}</p>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'User',
  data() {
    return {
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
        const username = this.$route.params.user;
        const response = await axios.get(`http://localhost:8080/users/${username}`);

        this.user = response.data;
      } catch (error) {
        console.error('Error:', error.message);
      }
    },

    incrementFollowingCount() {
      // Method to increment the following count of the user
      this.user.followers += 10;
    },
  },
};
</script>
