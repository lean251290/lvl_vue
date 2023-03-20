import { createRouter, createWebHistory } from 'vue-router';


import { HomeComponent } from '../components/HomeComponent.vue';
// import { About } from '../components/About.vue';


const routes = [
{
	path: '/home',
	name: 'home',
	component: HomeComponent
},
{
	path: '/about',
	name: 'about',
	component: About
},
]


const router = createRouter({
	history: createWebHistory(),
	routes
})


export default router