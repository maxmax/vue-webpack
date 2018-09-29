<template>
  <div>
    <b-card :title="title" :sub-title="tagline"
      :img-src="src"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2">
      <b-row>
        <b-col>
          <p class="small">{{brewed}}</p>
        </b-col>
        <b-col>
          <p class="small text-right">
            <strong v-if="abv">ABV: {{abv}}</strong>
            <span v-if="abv && ibu"> | </span>
            <strong v-if="ibu">IBU: {{ibu}}</strong>
          </p>
        </b-col>
      </b-row>
      <p class="card-text">{{description}}</p>
      <router-link class="btn btn-primary" :to="linkTo">Go somewhere</router-link>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'CardThumb',
    props: {
      title: String,
      tagline: String,
      description: String,
      src: String,
      brewed: String,
      abv: Number,
      ibu: Number,
      linkTo: String
    },
    data: function(){
      return {
        // visable: this.open || false,
      }
    },
    methods: {
      _cookieGoofyMethod() {
        console.log('cookieGoofyMethod!!!')
      }
    },
    mounted() {},
    created() {
      // this._cookieGoofyMethod();
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
