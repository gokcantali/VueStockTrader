<template>
  <div>
    <!-- For stocks in Stock page -->
    <div class="panel panel-success" v-if="!isMyStock">
      <div class="panel-heading">
        <h4>{{ stock.name }} <small><small>(Price: {{ stock.price }})</small></small></h4>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-9 col-sm-7 col-md-5 col-lg-2">
            <input v-model="quantityToBuy" type="number" class="form-control" placeholder="Quantity">
          </div>
          <div class="col-sm-offset-2 col-md-offset-4 col-lg-offset-7 col-xs-3">
            <button :disabled="!quantityToBuy" @click.prevent="submittedBuy" type="button" class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </div>

    <!-- For stocks in Portfolio page -->
    <div class="panel panel-info" v-else>
      <div class="panel-heading">
        <h4>{{ stock.name }} <small><small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small></small></h4>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-9 col-sm-7 col-md-5 col-lg-2">
            <input v-model="quantityToSell" type="number" class="form-control" placeholder="Quantity">
          </div>
          <div class="col-sm-offset-2 col-md-offset-4 col-lg-offset-7 col-xs-3">
            <button :disabled="!quantityToSell" @click.prevent="submittedSell" type="button" class="btn btn-danger">Sell</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    props: ['stock', 'isMyStock'],
    data() {
      return {
        quantityToBuy: '',
        quantityToSell: ''
      }
    },
    methods: {
      submittedBuy() {
        this.$emit('stockBought', this.stock.name, this.quantityToBuy);
      },
      submittedSell() {
        this.$emit('stockSold', this.stock.name, this.quantityToSell);
      }
    }
  }
</script>

<style scoped>

</style>
