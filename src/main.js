import { createApp } from 'vue'
import App from './App.vue'
import PageHome from '@/components/PageHome'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: "/",
    name: "Home",
		component: PageHome,
	},
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create a variable to store our Vue instance
const forumApp = createApp(App)

// Able to extend and configure our instance before we mount to the DOM

// Register a global component using the component instance function
// forumApp.component('NiceButton', {})

// Install a global plugin using the 'use' function
// forumApp.use(SomePlugin)

// Use Router
forumApp.use(router)

// Mount our Vue instance to the DOM 
forumApp.mount('#app')
