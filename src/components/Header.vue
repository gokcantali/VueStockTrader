<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="navbar-collapse">
      <ul class="nav navbar-nav navbar-left">
        <router-link to="/" tag="li" active-class="chosen" exact>
          <a class="navbar-brand">
            Stock Trader
          </a>
        </router-link>
        <router-link to="/portfolio" tag="li" active-class="chosen" exact>
          <a class="navbar-brand">
            Portfolio
          </a>
        </router-link>
        <router-link to="/stocks" tag="li" active-class="chosen" exact>
          <a class="navbar-brand">
            Stocks
          </a>
        </router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a @click="increaseDay">End Day</a>
        </li>
        <li role="presentation" class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> Save & Load <span class="caret"></span> </a>
          <ul class="dropdown-menu">
            <li><a @click="$emit('save')">Save</a></li>
            <li><a @click="$emit('load')">Load</a></li>
          </ul>
        </li>
        <li>
          <p class="navbar-brand funds">
            Funds: ${{ $filters.sepByThousand(funds) }}
          </p>
        </li>
      </ul>
    </div>
  </nav> <!-- End of Nav Bar -->
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['funds'])
  },
  methods: {
    ...mapMutations(['increaseDay']) // called when "End Day" is clicked
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
  ul a {
    cursor: pointer; /* we need this when a does not have href attribute */
  }
</style>
