const state = {
	portfolio: [] // {name: 'BMW', quantity: 5}
};

const getters = {
	portfolio: state => {
		return state.portfolio;
	},
	portfolioStockByName: (state, name) => {
		return state.portfolio.find((s) => s.name == name) || null;
	},
};

const mutations = {
	addStockToPortfolio: (state, addedStock) => {
		const { name, quantity } = addedStock
		console.log(addedStock);
		const stock = state.portfolio.find((s) => s.name == name) || null;
		if(stock === null){
			console.log("stock null");
			state.portfolio.push(addedStock);
		}
		else {
			console.log("stock NOT null");
			console.log(stock);
			stock.quantity += quantity;
		}
		console.log(state.portfolio);
	},
	remoteStockFromPortfolio: (state, name, quantity) => {
		const stock = state.stocks.find((s) => s.name == name) || null;
		if(stock === null || stock.quantity < quantity) 
			console.log(`Not enough stock: ${name}`)
		else
			stock.quantity -= quantity;
	}
};

const actions = {
	addStockToPortfolio: ({ commit }, name, quantity) => {
		commit('addStockToPortfolio', name, quantity);
	},
	remoteStockFromPortfolio: ({ commit }, name, quantity) => {
		commit('remoteStockFromPortfolio', name, quantity);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
};