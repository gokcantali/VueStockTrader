<template>
  <div class="main">
    <h2>Trade or View your Portfolio</h2>
    <p>You may Save & Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!
    </p>
    <hr>
    <h4>Your Funds: ${{ funds | separateByThousand }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['funds'])
  }
}
</script>

<style scoped>
  div.main {
    border: solid 0.5px #ddd;
    padding: 15px;
  }
</style>
