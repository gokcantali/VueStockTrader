import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';
//import VueResource from 'vue-resource';
import App from './App.vue'

import { routes } from './routes.js';
import { store } from './store/store.js';

const jQuery = require('jquery');
window.jQuery = jQuery;
window.$ = jQuery;

require('bootstrap'); // needed for dropdown

const app = createApp(App);

// Register filters globally
app.config.globalProperties.$filters = {
	sepByThousand(val) {
		const valStr = String(val); // convert to String
		const [decimalStr, pointStr] = valStr.split("."); // divide into decimal and points

		const decimalStrReverse = decimalStr.split("").reverse().join(""); // reverse the string
		let decimalStrReverseSep = "";
		for(let i = 1; i <= decimalStrReverse.length; i++) {
			decimalStrReverseSep += decimalStrReverse[i-1];
			// add a comma for every three digits
			// don't add comma if it's the last digit
			if(i % 3 == 0 && i != decimalStrReverse.length){
				decimalStrReverseSep += ",";
			}
		}
		let decimalStrSep = decimalStrReverseSep.split("").reverse().join(""); // re-reverse the string

		if(pointStr !== undefined) { decimalStrSep += `.${pointStr}`} // add points if available
		return decimalStrSep 
	}
}

const router = createRouter({
	routes,
	history: createWebHistory()
})

app.use(router);

app.use(store);

//app.use(VueResource);

app.mount("#app");

// globally set HTTP root
//app.http.options.root = 'https://my-vuejs-project-ce8a3-default-rtdb.firebaseio.com/' 