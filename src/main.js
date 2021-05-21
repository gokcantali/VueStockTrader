import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store.js';

require('bootstrap'); // needed for dropdown

// Register filters globally
Vue.filter('separateByThousand', function sepByThousand(val) {
	const valStr = String(val); // convert to String
	const [decimalStr, pointStr] = valStr.split("."); // divide into decimal and points

	const decimalStrReverse = decimalStr.split("").reverse().join(""); // reverse the string
	const decimalStrReverseSep = decimalStrReverse.replace(/(\d{3})/g, '$1,');  // add thousand separators
	const decimalStrSep = decimalStrReverseSep.split("").reverse().join(""); // re-reverse the string

	let valStrSep = decimalStrSep.replace(/^\./, ''); // trim leading separator
	if(pointStr !== undefined) { valStrSep += `.${pointStr}`} // add points if available
	return valStrSep 
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
