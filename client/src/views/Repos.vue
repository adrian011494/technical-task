<template>
  <div>
    <h2>Repos</h2>
    <p v-if="repository">{{ message }}</p>
    <p v-else>No repository available.</p>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'Repos',
  data() {
    return {
      user: {}, // Holds the user information
      repository: null, // Holds the repository information
    };
  },
  mounted() {
    // Fetch user information and repository when the component is mounted
    this.fetchUserInformation();
    this.fetchRepository();
  },
  computed: {
    message() {
      // Computed property that generates a message based on user and repository information
      if (this.repository.private) {
        return `User ${this.user.name} with ${this.user.followers} followers is following ${this.user.following}. One repo for this user is ${this.repository.repository_name} and it is private.`;
      } else {
        return `User ${this.user.name} with ${this.user.followers} followers is following ${this.user.following}. One repo for this user is ${this.repository.repository_name} and it is not private.`;
      }
    },
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
    async fetchRepository() {
      // Method to fetch repository information from the server
      try {
        const username = this.$route.params.user;
        const response = await axios.get(`http://localhost:8080/users/${username}/repo`);

        this.repository = response.data;
      } catch (error) {
        console.error('Error:', error.message);
      }
    },
  },
};
</script>