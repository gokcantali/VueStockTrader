const state = {
	stocks: [{
		name: 'BMW',
		price: 110,
		quantity: 0
	}, {
		name: 'Google',
		price: 200,
		quantity: 0
	}, {
		name: 'Apple',
		price: 250,
		quantity: 0
	}, {
		name: 'Twitter',
		price: 70,
		quantity: 0
	}]
};

const getters = {
	stocks: state => {
		return state.stocks;
	}
};

const mutations = {
	updateStockValue: (state, updatedStock) => {
		const { name, price } = updatedStock
		const stock = state.stocks.find((s) => s.name == name) || null;
		stock.price = price;
	},
	addStockToPortfolio: (state, addedStock) => {
		const { name, quantity } = addedStock
		const stock = state.stocks.find((s) => s.name == name);
		stock.quantity += quantity;
	},
	removeStockFromPortfolio: (state, removedStock) => {
		const { name, quantity } = removedStock
		const stock = state.stocks.find((s) => s.name == name);
		stock.quantity -= quantity;
	},
	updateAllStocks: (state, stockData) => {
		state.stocks = stockData;
	}
};

const actions = {
	// used when the user buys stocks
	addStockToPortfolio: ({ commit, getters }, addedStock) => {
		return new Promise((resolve, reject) => {
			const { name } = addedStock
			const stock = getters.stocks.find((s) => s.name == name) || null;
			if(stock !== null){
				commit('addStockToPortfolio', addedStock);
				resolve();
			}
			else {
				reject(`No such stock! ${name}`);
			}
		});
	},
	// used when the user buys stocks
	removeStockFromPortfolio: ({ commit, getters }, removedStock) => {
		return new Promise((resolve, reject) => {
			const { name, quantity } = removedStock
			const stock = getters.stocks.find((s) => s.name == name) || null;
			if(stock !== null){
				if(stock.quantity >= quantity){
					commit('removeStockFromPortfolio', removedStock);
					resolve();
				}
				else {
					reject("Not enough stock!");
				}
			}
			else {
				reject(`No such stock! ${name}`);
			}
		});
	},
	// randomizes stock prices based on a simple logic
	changeStockPrices: ({ commit, getters }) => {
		const minChange = 5;	// in percent
		const maxChange = 25;	// in percent

		getters.stocks.map((stock) => {
			let name = stock.name;
			let price = stock.price;

			// generate random price change percentage
			let change = (
				Math.random() * 
				(maxChange - minChange) + 
				minChange
			) / 100;

			if(Math.random() < 0.40) { // decrease stock price
				price -= price*change;
			} 
			else {	// increase stock price
				price += price*change;
			}
			price = Math.round(price); // make price an integer

			commit('updateStockValue', {name, price});
		});
	},
	updateAllStocks: ({ commit }, stocks) => {
		commit('updateAllStocks', stocks);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
};