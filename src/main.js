import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

// Create a variable to store our Vue instance
const forumApp = createApp(App)

// Use Router
forumApp.use(router)

// Able to extend and configure our instance before we mount to the DOM

// Registers all Base components without individually importing them
const requireComponent = require.context(
	"./components",
	true,
	/Base[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach(function (fileName) {
	let baseComponentConfig = requireComponent(fileName);
	baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
	const baseComponentName =
		baseComponentConfig.name ||
		fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");
	forumApp.component(baseComponentName, baseComponentConfig);
});

// Install a global plugin using the 'use' function
// forumApp.use(SomePlugin)



// Mount our Vue instance to the DOM 
forumApp.mount('#app')
