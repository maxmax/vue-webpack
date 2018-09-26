<template>
  <div class="container-full">
    <masthead-head
      v-bind:visable="true"
      v-bind:title="masthead.title"
      v-bind:text="masthead.text"
      v-bind:link="masthead.link"
      v-bind:class="[masthead.type]">
    </masthead-head>

    <b-container class="br-m-t30 br-m-b30">
      <b-row>
        <div class="col-4" v-for="item in items">
          <b-card :title="item.name" :sub-title="item.tagline"
            :img-src="item.image_url"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2">
            <p class="small">{{item.first_brewed}}</p>
            <p class="card-text">{{item.description}}</p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </b-row>
    </b-container>
    <b-pagination align="center" size="md" :total-rows="100" v-model="currentPage" :per-page="10">
    </b-pagination>

  </div>
</template>

<script>

  import MastheadHead from '../components/MastheadHead/index.vue'

  export default {
    name: 'Products',
    components: {
      MastheadHead
    },
    data: function(){
      return {
        currentPage: 2,
        items: null,
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
    methods: {
      _someMehMethod() {
        console.log('Products Meh.')
      },
      fetchData: function (el) {
        let self = this;
        let page = el || 1;
        let per = 9;
        console.log('el:', el);
        const myRequest = new Request('https://api.punkapi.com/v2/beers?page=' + page + '&per_page=' + per)

        fetch(myRequest)
          .then((response) => { return response.json() })
          .then((data) => {
            self.items = data
            // console.log(self.items)
          }).catch( error => { console.log(error); });
      }
    },
    mounted() {
      this.fetchData(this.currentPage);
    },
    created() {
      this._someMehMethod();
    }
  }
</script>

<style scoped lang="scss">
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
</style>
