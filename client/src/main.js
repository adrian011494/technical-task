// Import the main CSS file
import './assets/main.css';

// Import the necessary functions and components from Vue
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Create a new Vue application instance
const app = createApp(App);

// Use the router configuration for the application
app.use(router);

// Mount the Vue application to the HTML element with the ID 'app'
app.mount('#app');
