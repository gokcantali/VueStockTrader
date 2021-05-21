<template>
  <div>

    <div :class="['panel', {'panel-info': isMyStock, 'panel-success': !isMyStock}]" >
      <div class="panel-heading">
        <h4>
          {{ stock.name }} <small><small>(Price: {{ stock.price }}
          <template v-if="isMyStock"> | Quantity: {{ stock.quantity }})
          </template></small></small>
        </h4>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-9 col-sm-7 col-md-5 col-lg-2">
            <input v-model="quantity" type="number" class="form-control" placeholder="Quantity">
          </div>
          <div class="col-sm-offset-2 col-md-offset-4 col-lg-offset-7 col-xs-3">
            <button v-if="isMyStock" :disabled="!quantity" @click.prevent="submittedSell" type="button" class="btn btn-danger">Sell</button>
            <button v-else :disabled="!quantity" @click.prevent="submittedBuy" type="button" class="btn btn-success">Buy</button>
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
        quantity: ''
      }
    },
    methods: {
      submittedBuy() {
        const stock = {
          name: this.stock.name,
          quantity: parseInt(this.quantity)
        }
        this.$emit('stockBought', stock);
      },
      submittedSell() {
        const stock = {
          name: this.stock.name,
          quantity: parseInt(this.quantity)
        }
        this.$emit('stockSold', stock);
      }
    }
  }
</script>

<style scoped>

</style>
