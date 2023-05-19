<template>
  <div>
    <form @submit.prevent="goToUserDetails">
      <input type="text" v-model="username" placeholder="Enter username" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
     goToUserDetails() {
        this.$router.push({
          name: 'User',
          params: { user: this.username },
        });
      
    },
  },
};
</script>
