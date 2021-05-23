<template>
  <div class="row">
    <app-stock v-for="stock in myStocks" :stock="stock" :isMyStock="true" :key="stock.name" @stockSold="stockSold"></app-stock>
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
        'funds',
        'stocks'
      ]),
      myStocks() {
        return this.stocks.filter((s) => s.quantity > 0);
      }
    },
    methods: {
      ...mapMutations([
        'increaseFunds'
      ]),
      ...mapActions([
        'removeStockFromPortfolio'
      ]),
      stockSold (stock) {
        const { name, quantity } = stock;

        const price = this.stocks.find((s) => s.name == name).price;
        const totalPrice = price * quantity;

        this.removeStockFromPortfolio(stock).then(() => {
          this.increaseFunds(totalPrice); // increase funds if sale is successful
        }).catch((error) => {
          alert(error);
        });
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>

</style>
