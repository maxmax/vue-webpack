<template>
  <div class="alert alert-message" v-bind:class="[type]" v-if="visable">
    <h2 v-if="title">{{title}}</h2>
    <p>{{text}}</p>
    <button class="close" v-on:click="closeMessage"><span>×</span></button>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    props: {
      title: String,
      text: String,
      type: String,
      open: Boolean,
      choice: Boolean
    },
    data: function(){
      return {
        visable: this.open || false,
      }
    },
    methods: {
      _cookieGoofyMethod() {
        console.log('cookieGoofyMethod!!!')
      },
      closeMessage: function () {
        this.visable = false
        // set a stringified version of our token to localstorage on our domain
        if (this.choice) {
          localStorage.setItem('cookiesContainer', JSON.stringify(true));
        }
      }
    },
    mounted() {
      if (this.choice && localStorage.cookiesContainer) {
        this.visable = false
      }
    },
    created() {
      // this._cookieGoofyMethod();
    }
  }
</script>

<style scoped lang="scss">
  .alert {
    display: block;
    position: relative;
    padding: 30px;
    background: #F44336;
    background: #ef2819;
    color: white;
    font-size: 16px;
    text-align: center;
    h1, h2, h3, h4 {
      margin-top: 0px;
      line-height: 1;
    }
    &-success {
      background: #d4edda;
      color: #155724;
    }
    &-error {
      background: #f8d7da;
      color: #721c24;
    }
    &-info {
      background: #d1ecf1;
      color: #0c5460;
    }
    .close {
      padding: 0px;
      margin: 0px;
      background: transparent;
      border: 0px;
      outline: none;
      font-size: 28px;
      line-height: 1;
      color: black;
      position: absolute;
      top: 30px;
      right: 30px;
      display: block;
      border-radius: 100%;
      border: 2px solid black;
      width: 32px;
      height: 32px;
      cursor: pointer;
      opacity: 0.5;
      span {
        line-height: 1;
        position: relative;
        top: -1px;
      }
      &-white{
        border: 2px solid white;
        color: white;
      }
      &:hover {
        opacity: 0.9;
      }
    }
  }
</style>
