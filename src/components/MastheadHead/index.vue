<template>
  <div class="masthead" v-bind:class="[type]" v-if="visable">
   <h2>{{title}}</h2>
   <p>{{text}}</p>
   <router-link v-bind:to="link.url" v-if="link">{{link.text}}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'MastheadHead',
    props: {
      title: String,
      text: String,
      type: String,
      link: Object,
      visable: Boolean
    }
  }
</script>
