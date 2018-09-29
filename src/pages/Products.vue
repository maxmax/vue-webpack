<template>
  <div class="container-full">
    <masthead-head
      v-bind:visable="true"
      v-bind:title="masthead.title"
      v-bind:text="masthead.text"
      v-bind:link="masthead.link"
      v-bind:class="[masthead.type]" />

    <div class="jumbotron jumbotron-fluid br-p-t50 br-p-b20">
      <b-container class="">
        <b-row>
          <b-col class="col-12 col-sm-4 col-md-3">
            <div class="form-group">
              <b-form-select v-model="byBrewed.brewedBefore" :options="byBrewed.brewedBeforeOptions" class="mb-3" size="md" />
            </div>
          </b-col>
          <b-col class="col-12 col-sm-4 col-md-3">
            <div class="form-group">
              <b-form-select v-model="byAbv.abvGt" :options="byAbv.abvGtOptions" class="mb-3" size="md" />
            </div>
          </b-col>
          <b-col class="col-12 col-sm-4 col-md-3">
            <div class="form-group">
              <b-form-select v-model="byIbu.ibuGt" :options="byIbu.ibuGtOptions" class="mb-3" size="md" />
            </div>
          </b-col>
          <b-col class="col-12 col-sm-12 col-md-3">
            <b-button v-on:click="reset" variant="primary" class="btn-block" v-bind:class="disabledObj">Reset</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <b-container class="products-list br-m-t30 br-m-b30">

      <div v-if="pending" class="loader text-center">Loading...</div>

      <b-row v-if="items">
        <div class="col-12">
        </div>
        <div class="col-12 col-sm-12 col-md-4" v-for="item in items" :key="item.id">
          <b-card :title="item.name" :sub-title="item.tagline"
            :img-src="item.image_url"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2">
            <b-row>
              <b-col>
                <p class="small">{{item.first_brewed}}</p>
              </b-col>
              <b-col>
                <p class="small text-right">
                  <strong v-if="item.abv">ABV: {{item.abv}}</strong>
                  <span v-if="item.abv && item.ibu"> | </span>
                  <strong v-if="item.ibu">IBU: {{item.ibu}}</strong>
                </p>
              </b-col>
            </b-row>
            <p class="card-text">{{item.description}}</p>
            <router-link class="btn btn-primary" :to="'product/' + item.id">Go somewhere</router-link>
          </b-card>
        </div>
        <div class="col-12" v-if="itemsRows">
          <!--<div>currentPage: {{currentPage}}</div>-->
          <b-pagination class="br-m-t30" align="center" size="md" :total-rows="itemsRows" v-model="currentPage" :per-page="3">
          </b-pagination>
        </div>
      </b-row>

    </b-container>

  </div>
</template>

<script>

  import MastheadHead from '../components/MastheadHead/index.vue'

  export default {
    name: 'Products',
    components: {
      MastheadHead
    },
    props: {},
    data: function(){
      return {
        reqPage: '',
        currentPage: 2,
        perPage: 3,
        items: null,
        itemsRows: null,
        pending: true,
        taxonomy: '',
        apiUrl: 'https://api.punkapi.com/v2/beers?',
        // pageView: '&page=1&per_page=3',
        pageView: '',
        disabledObj: {
          disabled: true
        },
        byBrewed: {
          api: 'brewed_before=',
          brewedBefore: null,
          brewedBeforeOptions: [
            { value: null, text: 'Please select an Brewed before' },
            { value: '01-2010', text: '01-2010' },
            { value: '01-2011', text: '01-2011' },
            { value: '01-2012', text: '01-2012' },
            { value: '01-2013', text: '01-2013' },
            { value: '01-2014', text: '01-2014' },
            { value: '01-2015', text: '01-2015' },
            { value: '01-2016', text: '01-2016' },
            { value: '01-2017', text: '01-2017' },
            { value: '01-2018', text: '01-2018' },
            { value: '01-2019', text: '01-2019' }
          ]
        },
        byAbv: {
          api: 'abv_gt=',
          abvGt: null,
          abvGtOptions: [
            { value: null, text: 'Please select an ABV greater' },
            { value: '5', text: '5' },
            { value: '10', text: '10' },
            { value: '15', text: '15' },
            { value: '20', text: '20' },
            { value: '25', text: '25' },
            { value: '30', text: '30' },
            { value: '35', text: '35' },
            { value: '40', text: '45' },
            { value: '40', text: '50' },
            { value: '40', text: '55' }
          ]
        },
        byIbu: {
          api: 'beers?ibu_gt=',
          ibuGt: null,
          ibuGtOptions: [
            { value: null, text: 'Please select an IBU greater' },
            { value: '5', text: '5' },
            { value: '30', text: '30' },
            { value: '50', text: '50' },
            { value: '80', text: '80' },
            { value: '100', text: '100' },
            { value: '150', text: '150' },
            { value: '200', text: '200' },
            { value: '250', text: '250' },
            { value: '300', text: '300' },
            { value: '350', text: '350' }
          ]
        },
        masthead: {
          visable: true,
          title: 'Products',
          text: '',
          link: {
            text: 'Back to About Us',
            url: '/about',
          },
          type: 'masthead-hi',
        }
      }
    },
    computed: {},
    methods: {
      $_someMehMethod() {
        console.log('Products Meh.')
      },
      $_filterByAllReset() {
        this.taxonomy = '';
        this.byBrewed.brewedBefore = null;
        this.byAbv.abvGt = null;
        this.byIbu.ibuGt = null;
      },
      $_filterByBrewedBefore() {
        if (this.byBrewed.brewedBefore && this.byAbv.abvGt) {
          // this.taxonomy = '&' + this.byAbv.api + this.byAbv.abvGt;
          this.byAbv.abvGt = null;
        }
        if (this.byBrewed.brewedBefore && this.byIbu.ibuGt) {this.byIbu.ibuGt = null;}
      },
      $_filterByAbv() {
        if (this.byAbv.abvGt && this.byBrewed.brewedBefore) {
          this.byBrewed.brewedBefore = null;
          // this.taxonomy = '&' + this.byBrewed.api + this.byBrewed.brewedBefore;
        }
        if (this.byAbv.abvGt && this.byIbu.ibuGt) {this.byIbu.ibuGt = null;}
      },
      $_filterByIbu() {
        if (this.byIbu.ibuGt && this.byBrewed.brewedBefore) {
          this.byBrewed.brewedBefore = null;
        }
        if (this.byIbu.ibuGt && this.byAbv.abvGt) {this.byAbv.abvGt = null;}
      },
      $_getPending(pending) {
        this.pending = pending;
      },
      $_fetchData: function (req) {
        let self = this;
        const myRequest = new Request(req)

        fetch(myRequest)
          .then((response) => { return response.json() })
          .then((data) => {
            self.items = data;
            this.$_getPending(false);
            console.log("data.length!!!", data.length);
            //if (data.length)  {
            //  this.pending = false;
            //  // console.log('data.length', data);
            //} else {
            //  this.items = null;
            //}
          }).catch( error => {
            this.items = null;
            console.log('Error!', error);
          });
      },
      $_disabledButton(disabled) {
        this.disabledObj.disabled = disabled;
      },
      $_filterReset() {
        console.log('THIS', this);
        this.$_filterByAllReset();
        this.$_getPending(true);
        this.$_disabledButton(true);
        let nowapireqnow = this.apiUrl + 'page=' + this.currentPage + '&per_page=' + this.perPage;
        this.$_fetchData(nowapireqnow);
        this.itemsRows = 234;
      },
      $_currentFilter(newVal, api, filterFn) {
        console.log('currentFilter - newVal!', newVal);
        this.itemsRows = null;
        this.$_getPending(true);
        let apireqnow = api + newVal + this.taxonomy;
        this.$_fetchData(apireqnow);
        this.$_disabledButton(false);
        filterFn();
      },
      reset: function (event) {
        this.$_filterReset();
      }
    },
    mounted() {
      this.$_filterReset();
    },
    created() {
      this.$_someMehMethod();
      console.log('Products created!', this);
      // this.$route.params
      console.log('Products created this.$route!', this.$route);
    },
    watch:{
      'currentPage': function(newVal, oldVal){
        // to work with changes in prop
        this.$_filterReset();
      },
      'byBrewed.brewedBefore': function(newVal, oldVal){
        if (newVal !== null) {
          this.$_currentFilter(newVal + this.pageView, this.apiUrl + this.byBrewed.api, this.$_filterByBrewedBefore);
        }
      },
      'byAbv.abvGt': function(newVal, oldVal){
        if (newVal !== null) {
          this.$_currentFilter(newVal + this.pageView, this.apiUrl + this.byAbv.api, this.$_filterByAbv);
        }
      },
      'byIbu.ibuGt': function(newVal, oldVal){
        if (newVal !== null) {
          this.$_currentFilter(newVal + this.pageView, this.apiUrl + this.byIbu.api, this.$_filterByIbu);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .products-list {
    position: relative;
    min-height: 200px;
    .loader {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.66);
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
    .card {
      .card-title {
        display: flex;
        height: 84px;
        justify-content: center;
        flex-direction: column;
      }
      .card-subtitle {
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .card-img-top {
        margin: 20px auto 0px;
        height: 200px;
        object-fit: contain;
      }
      .card-text {
        height: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .form-control.custom-select {
    background: none;
  }
</style>
