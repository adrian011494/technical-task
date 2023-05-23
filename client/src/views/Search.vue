<template>
  <div>
    <!-- User input form -->
    <form @submit.prevent="goToHome">
      <input type="text" v-model="username" placeholder="Enter username" />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '', // Holds the value of the username entered by the user
    };
  },
  
  methods: {
    goToHome() {
      // Navigate to the Home route with the entered username as a parameter
      this.$router.push({
        name: 'Home',
        params: { user: this.username },
      });
    },
  },
};
</script>
