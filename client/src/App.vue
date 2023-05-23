<template>
  <!-- Render the navigation bar if $route.params.user exists -->
  <div v-if="$route.params.user">
    <nav class="navbar">

      <!-- Navigation menu items -->
      <div class="navbar-menu">
        <div class="navbar-start">
          <!-- Home link -->
          <router-link class="navbar-item" :to="{name: 'Home', params: {user: $route.params.user}}">Home</router-link>
          <!-- Following link -->
          <router-link class="navbar-item" :to="{name: 'Following', params: {user: $route.params.user}}">Following</router-link>
          <!-- Repos link -->
          <router-link class="navbar-item" :to="{name: 'Repos', params: {user: $route.params.user}}">Repos</router-link>
        </div>
      </div>
    </nav>
  </div>

  <!-- Render the router view -->
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
