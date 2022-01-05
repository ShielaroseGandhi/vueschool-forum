import { createApp } from 'vue'
import App from './App.vue'

// Create a variable to store our Vue instance
const forumApp = createApp(App)

// Able to extendd and configure our instance before we mount to the DOM

// Register a global component using the component instance function
// forumApp.component('NiceButton', {})

// Install a global plugin using the 'use' function
// forumApp.use(SomePlugin)

// Mount our Vue instance to the DOM 
forumApp.mount('#app')
