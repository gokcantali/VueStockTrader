<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :stock="stock" :isMyStock="false" :key="stock.name" @stockBought="stockBought"></app-stock>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
  import Stock from './Stock.vue';

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'stocks',
        'funds',
        'portfolio'
      ])
    },
    methods: {
      ...mapMutations([
        'decreaseFunds'
      ]),
      ...mapActions([
        'addStockToPortfolio'
      ]),
      stockBought (stock) {
        const { name, quantity } = stock;

        const price = this.stocks.find((s) => s.name == name).price;        
        const totalPrice = price * quantity;
        if(totalPrice > this.funds){
          alert("You don't have enough money!");
          return false;
        }

        const didBuyStock = this.addStockToPortfolio(stock);
        if(didBuyStock)
          this.decreaseFunds(totalPrice);
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>

</style>
