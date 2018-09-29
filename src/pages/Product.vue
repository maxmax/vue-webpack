<template>
  <div class="container-full">
    <masthead-head
      v-bind:visable="true"
      v-bind:title="masthead.title"
      v-bind:text="masthead.text"
      v-bind:link="masthead.link"
      v-bind:class="[masthead.type]" />

    <b-container class="products-list br-m-t30 br-m-b30">

      <div v-if="pending" class="loader text-center">Loading...</div>

      <div v-if="item">
        <b-row>
          <b-col cols="5" class="text-center">
            <b-img :src="item.image_url" fluid alt="Fluid image" class="product-img" />
          </b-col>
          <b-col cols="7">
            <h2>{{item.name}}</h2>
            <p class="small">{{item.first_brewed}}</p>
            <p class="small text-left">
              <strong v-if="item.abv">ABV: {{item.abv}}</strong>
              <span v-if="item.abv && item.ibu"> | </span>
              <strong v-if="item.ibu">IBU: {{item.ibu}}</strong>
            </p>
            <p>{{item.description}}</p>
          </b-col>
        </b-row>
      </div>

    </b-container>

  </div>
</template>

<script>

  import MastheadHead from '../components/MastheadHead/index.vue'

  export default {
    name: 'ProductPage',
    components: {
      MastheadHead
    },
    props: {},
    data: function(){
      return {
        item: null,
        api: 'https://api.punkapi.com/v2/beers/',
        pending: true,
        masthead: {
          visable: true,
          title: 'Product',
          text: '',
          link: {
            text: 'Back to products',
            url: '/products',
          },
          type: 'masthead-hi',
        }
      }
    },
    computed: {},
    methods: {
      $_getPending(pending) {
        this.pending = pending;
      },
      $_fetchData: function (req) {
        let self = this;
        const myRequest = new Request(req)

        fetch(myRequest)
          .then((response) => { return response.json() })
          .then((data) => {
            self.item = data[0];
            this.$_getPending(false);
            console.log("data.length!!!", data);
          }).catch( error => {
            this.items = null;
            console.log('Error!', error);
          });
      }
    },
    mounted() {},
    created() {
      this.$_fetchData(this.api + this.$route.params.id);
    },
    watch:{
      '$route.params.id': function (id) {
        this.$_fetchData(this.api + this.$route.params.id);
      }
    }
  }
</script>

<style scoped lang="scss">
  .product-img {
    margin: 20px auto 0px;
    height: 200px;
    object-fit: contain;
  }
</style>
