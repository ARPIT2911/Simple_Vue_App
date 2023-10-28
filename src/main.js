// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

const app = createApp(App)
  .use(router); // Use the router here

  app.config.globalProperties.$axios = axios;
  app.mount('#app');
