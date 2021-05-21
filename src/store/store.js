import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks.js';

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
		},
		increaseFunds: (state, amount) => {
			state.funds += amount;
		},
		decreaseFunds: (state, amount) => {
			state.funds -= amount;
		}
	},
	modules: {
		stocks
	}

});