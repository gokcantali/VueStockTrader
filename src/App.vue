<template>
  <div class="container">
    <br><br>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
        <nav class="navbar navbar-default" role="navigation">
          <div class="navbar-collapse">
            <ul class="nav navbar-nav navbar-left">
              <li>
                <a class="navbar-brand" href="#">
                  Stock Trader
                </a>
              </li>
              <li>
                <a class="navbar-brand" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="navbar-brand" href="#stocks">
                  Stocks
                </a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a class="navbar-brand" href="#">
                  End Day
                </a>
              </li>
              <li role="presentation" class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> Save & Load <span class="caret"></span> </a>
                <ul class="dropdown-menu">
                  <li><a href="#save">Save</a></li>
                  <li><a href="#load">Load</a></li>
                </ul>
              </li>
              <li>
                <p class="navbar-brand funds">
                  Funds: ${{ funds | separateByThousand }}
                </p>
              </li>
            </ul>
          </div>
        </nav> <!-- End of Nav Bar -->
        <br>
        <app-home></app-home>
        <hr>
        <app-stock-list></app-stock-list>
        <hr>
        <app-portfolio></app-portfolio>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import StockList from './components/StockList.vue';
import Portfolio from './components/Portfolio.vue';

import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['funds'])
  },
  components: {
    appHome: Home,
    appStockList: StockList,
    appPortfolio: Portfolio
  }
}
</script>

<style scoped>
  .navbar-toggle {
      z-index:3;
  }
  p.funds {
    font-weight: bold;
    font-size: 1em;
  }
  .navbar-nav a {
    font-size: 1em;
  }
</style>
