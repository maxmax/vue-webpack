<template>
  <div class="container-full">
    <masthead
      v-bind:visable="true"
      v-bind:title="masthead.title"
      v-bind:text="masthead.text"
      v-bind:link="masthead.link"
      v-bind:class="[masthead.type]">
    </masthead>
    <alert
      v-bind:open="true"
      v-bind:text="message.text"
      v-bind:class="[message.type]">
    </alert>
  </div>
</template>

<script>
  import Masthead from '../components/Masthead/index.vue'
  import Alert from '../components/Alert/index.vue'

  export default {
    name: 'HiPage',
    components: {
      Masthead,
      Alert
    },
    data: function(){
      return {
        masthead: {
          visable: true,
          title: 'Hey page!',
          text: '',
          link: {
            text: 'About Us',
            url: '/about',
          },
          type: 'masthead-hi',
        },
        message: {
          type: 'alert-info',
          text: 'Alert message info!'
        }
      }
    },
    methods: {
      _someMehMethod() {
        console.log('Meh.')
      }
    },
    mounted() {
    },
    created() {
      this._someMehMethod();
    }
  }
</script>

<style scoped lang="scss">
  .masthead {
    background: #6c6cd6;
    &:after {
      border-top-color: #6c6cd6;
    }
  }
</style>
