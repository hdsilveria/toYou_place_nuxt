<template>
  <div>
    <b-row
      align-h="center"
    >
      <b-col
        class="main-colum"
        md="9"
      >
        <h3>teste</h3>
        {{ products }}
      </b-col>
    </b-row>
  </div>
</template>

<script>

import items from '../src/services/items'

export default {

  data(){
    return {
      products: []
    }
  },

  created(){
    this.getProducts()
  },

  methods: {
    getProducts(){
      items.getItems()
    }
  }   
}
</script>