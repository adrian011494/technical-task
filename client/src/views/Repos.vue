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
        repository: null,
      };
    },
    mounted() {
      this.fetchRepository();
    },
    computed: {
      message() {
        if (this.repository.private) {
          return `User ${this.user.name} with ${this.user.followers} followers is following ${this.followingCount}. One repo for this user is ${this.repository.full_name} and it is private.`;
        } else {
          return `User ${this.user.name} with ${this.user.followers} followers is following ${this.followingCount}. One repo for this user is ${this.repository.full_name} and it is not private.`;
        }
      },
    },
    methods: {
      async fetchRepository() {
        try {
          const response = await axios.get('http://localhost:8080/users/adrian011494');
          this.repository = response.data.repository;
        } catch (error) {
          console.error('Error:', error.message);
        }
      },
    },
  };
  </script>
  