const state = {
	stocks: [{
		name: 'BMW',
		price: 110
	}, {
		name: 'Google',
		price: 200
	}, {
		name: 'Apple',
		price: 250
	}, {
		name: 'Twitter',
		price: 70
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
		if(stock) 
			stock.price = newPrice;
		else
			console.log(`No such stock: ${name}`);
	}
};

const actions = {
	updateStockValue: ({ commit }, name, newPrice) => {
		commit('updateStockValue', name, newPrice);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
};