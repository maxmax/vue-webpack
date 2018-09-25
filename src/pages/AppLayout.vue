<template>
  <div class="container-full welcome-container">
    <h2>{{welcomeText}}</h2>
    <div class="btn-wrapper">
      <router-link class="hi" to="hello">Hi</router-link>
      <router-link class="bi" to="bye">Bi</router-link>
      <router-link class="about" to="about">Bootstrap-vue</router-link>
      <router-link class="about" to="products">Products</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  // Set the parent router view.
  // The parent route component is Home.vue in pages.
  // Loads home.vue from here.

  export default {
    name: 'AppLayout',
    components: {
    },
    data: function(){
      return {
        welcomeText: 'AppName!'
      }
    },
    methods: {
      _someSillyMethod() {
        console.log('I bet you can not be as silly as me!')
      }
    },
    mounted() {
    },
    created() {
      this._someSillyMethod();
    }
  }
</script>

<style scoped lang="scss">
  .welcome-container {
    > h2 {
      margin-top: 0;
      margin-bottom: 2em;
      text-align: center;
    }
    padding: 2em 0;
    background: transparent;
    border-radius: 0px;
    .btn-wrapper {
      margin-bottom: 2em;
      margin-top: 16px;
      text-align: center;
      a {
        color: #fff;
        text-decoration: none;
        padding: 0.5em 2em;
        border-radius: 3px;
      }
      .hi {
        background: #6c6cd6;
      }
      .bi {
        background: #4CAF50;
      }
      .about {
        background: #03A9F4;
      }
    }
  }
</style>
