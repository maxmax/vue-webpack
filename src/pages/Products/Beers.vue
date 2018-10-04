<template>
  <div class="container">
    <b-row v-if="beers">
      <div class="col-12 col-sm-12 col-md-4" v-for="beer in beers.beers" :key="beer.id">
        <card-thumb :title="beer.name"
          :src="beer.image_url"
          :tagline="beer.tagline"
          :description="beer.description"
          :abv="beer.abv"
          :ibu="beer.ibu"
          :linkTo="'product/' + beer.id"
          :brewed="beer.first_brewed" />
      </div>
    </b-row>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import CardThumb from './components/Card.vue'

  export default {
    name: 'beers-page',
    components: {
      CardThumb
    },
    computed: mapState(['beers']),
    methods: {
      ...mapActions(['fetchBeers']),
    },
    created() {
      this.fetchBeers()
    },
    data() {
      return {
        snackbar: false,
      }
    },
    watch: {
      'beers.error': function (newVal) {
        this.snackbar = newVal
      },
    },
  }
</script>

<style scoped>
  .list {
    width: 100%;
  }
  .truncate-text {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
