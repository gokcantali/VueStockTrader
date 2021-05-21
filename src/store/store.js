import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks.js';
import portfolio from './modules/portfolio.js';

Vue.use(Vuex);

export const store = new Vuex.Store({

	state: {
		funds: 10000,
	},
	getters: {
		funds: (state) => {
			return state.funds;
		}
	},
	mutations: {
		updateFunds: (state, newValue) => {
			state.funds = newValue;
			console.log(state.funds);
			console.log(newValue);
		}
	},
	modules: {
		stocks,
		portfolio
	}

});