<template>
  <div class="container">
    <br><br>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
        <app-header @save="save" @load="load"></app-header>
        <br>
        <app-alert v-if="alertBox.show" :type="alertBox.type" :message="alertBox.message"></app-alert>
        <br>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Alert from './components/Alert.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    appHeader: Header,
    appAlert: Alert
  },
  data() {
    return {
      alertBox: {
        show: false,
        type: '',
        message: ''
      }
    }
  },
  computed: {
    ...mapGetters(['funds', 'stocks'])
  },
  watch: {
    '$store.state.day': function() {
      this.changeStockPrices();
    }
  },
  methods: {
    ...mapActions(['changeStockPrices', 'updateFunds', 'updateAllStocks']),
    displayAlert(message, type, duration) {
      this.alertBox.type = type;
      this.alertBox.message = message;
      this.alertBox.show = true;
      setTimeout(() => {
        this.alertBox.show = false;
      }, duration);
    },
    save() {
      const appState = {
        funds: this.funds, 
        stocks: this.stocks
      };
      console.log(appState);
      this.$http
        .put('stock-trader.json', appState)
        .then((response) => {
          this.displayAlert('Game Saved!', 'success', 2000);
        })
        .catch((err) => {
          this.displayAlert('Save failed!', 'danger', 2000);
          console.log(err);
        });
    },
    load() {
      this.$http
        .get('stock-trader.json')
        .then((response) => {
          response
          .json()
          .then((state) => {
            this.updateFunds(state.funds);
            this.updateAllStocks(state.stocks);
            this.displayAlert('Game Load!', 'success', 2000);
          })
        })
        .catch((err) => {
          this.displayAlert('Load failed!', 'danger', 2000);
          console.log(err);
        });
    }
  },
  created() {
    this.resource = this.$resource('stock-trader.json', {}, {});
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

  .slide-enter-active {
    animation: slide-in 0.5s ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
    transition: opacity 0.5s ease;
    opacity: 0;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  @keyframes slide-in {
    0% {
        transform: translateY(-30px);
    }
    100% {
        transform: translateY(0);
    }
  }

  @keyframes slide-out {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-30px);
    }
  }
</style>
