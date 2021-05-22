import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'

import { routes } from './routes.js';
import { store } from './store/store.js';

require('bootstrap'); // needed for dropdown

// Register filters globally
Vue.filter('separateByThousand', function sepByThousand(val) {
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
});

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history', // no hashtag (#) in this mode
});

Vue.use(VueResource);
// globally set HTTP root
Vue.http.options.root = 'https://my-vuejs-project-ce8a3-default-rtdb.firebaseio.com/' 

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
