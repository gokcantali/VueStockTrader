<template>
  <div class="container">
    <br><br>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
        <app-header></app-header>
        <br>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    appHeader: Header
  },
  watch: {
    '$store.state.day': function() {
      this.changeStockPrices();
    }
  },
  methods: {
    ...mapActions(['changeStockPrices'])
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
  li.chosen {
    font-weight: bold;
  }
</style>
