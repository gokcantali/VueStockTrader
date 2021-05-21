<template>
  <div class="row">
    <app-stock v-for="stock in portfolio" :stock="stock" :isMyStock="true" :key="stock.name" @stockSold="stockSold"></app-stock>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import Stock from './Stock.vue';

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'stocks',
        'portfolio'
      ])
    },
    methods: {
      ...mapMutations([
        'updateFunds',
        'remoteStockFromPortfolio'
      ]),
      stockSold (name, quantity) {
        const price = this.stocks.find((s) => s.name == name).price;
        const quantityOwn = this.portfolio.find((s) => s.name == name).quantity;
        if(quantity > quantityOwn){
          alert("You don't have enough stock!");
          return;
        }
        
        const totalPrice = price * quantity;

        this.remoteStockFromPortfolio(name, quantity);
        this.updateFunds(this.funds + totalPrice);
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>

</style>
