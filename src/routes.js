import Home from './components/Home.vue';
import StockList from './components/StockList.vue';
import Portfolio from './components/Portfolio.vue';

export const routes = [
	{ path: '', component: Home , name: 'home'},
	{ path: '/stocks', component: StockList},
	{ path: '/portfolio', component: Portfolio},
	{ path: '*', redirect: '/'} // redirect every unknown URL to home page
];