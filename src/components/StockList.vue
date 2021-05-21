<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :stock="stock" :isMyStock="false" :key="stock.name" @stockBought="stockBought"></app-stock>
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
        'funds',
        'portfolio'
      ])
    },
    methods: {
      ...mapMutations([
        'updateFunds',
        'addStockToPortfolio'
      ]),
      stockBought (name, quantity) {
        quantity = Number(quantity);
        const price = this.stocks.find((s) => s.name == name).price;
        
        const totalPrice = price * quantity;
        if(totalPrice > this.funds){
          alert("You don't have enough money!");
          return;
        }

        this.addStockToPortfolio({name, quantity});
        this.updateFunds(this.funds - totalPrice);
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>

</style>
