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
	updateStockValue: (state, name, newPrice) => {
		const stock = state.stocks.find((s) => s.name == name) || null;
		if(stock){
			stock.price = newPrice;
		}
		else{
			alert(`No such stock: ${name}`);
			return false;
		}
		return true;
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
	}
};

const actions = {
	addStockToPortfolio: ({ commit, getters }, addedStock) => {
		return new Promise((resolve, reject) => {
			const { name, quantity } = addedStock
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
	}
};

export default {
	state,
	getters,
	mutations,
	actions
};