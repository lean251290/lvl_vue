import './bootstrap';

import { createApp } from "vue";

import app from "../src/App.vue";

// import { router } from './routes/index.js';

import HomeComponent from "../src/components/HomeComponent.vue";

import About from "../src/components/About.vue";

const myApp = createApp(app);

myApp.component('HomeComponent', HomeComponent);

myApp.component('About', About);

myApp.mount('#app');