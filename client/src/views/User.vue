<template>
    <div>
      <h2>Details</h2>
      <p>User: {{ user.name }}</p>
      <p>Followers: {{ user.followers }}</p>

      <p>Following: {{ user.following }}</p>
      <button @click="incrementFollowingCount">Increment</button>

    </div>
    <div>
      <h2>Repos</h2>
      <p v-if="repository">{{ message }}</p>
      <p v-else>No repository available.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'User',
    data() {
      return {
        user: {},
        repository: {}
      };
    },
    mounted() {
      this.fetchUserInformation()
      this.fetchUserRepo()
    },
    computed: {
      message() {
        if (this.repository.private) {
          return `User ${this.user.name} with ${this.user.followers} followers is following ${this.user.following}. One repo for this user is ${this.repository.full_name} and it is private.`;
        } else {
          return `User ${this.user.name} with ${this.user.followers} followers is following ${this.user.following}. One repo for this user is ${this.repository.full_name} and it is not private.`;
        }
      },
    },
    methods: {
      async fetchUserInformation() {
        try {
          const username = this.$route.params.user;
          const response = await axios.get(`http://localhost:8080/users/${username}`);

          this.user = response.data;
        } catch (error) {
          console.error('Error:', error.message);
        }
      },

      async fetchUserRepo() {
        try {
          const username = this.$route.params.user;
          const response = await axios.get(`http://localhost:8080/users/${username}/repo`);

          this.repository = response.data;
        } catch (error) {
          console.error('Error:', error.message);
        }
      },

      incrementFollowingCount() {
        this.user.following += 10;
      },
    },
  };
  </script>
  