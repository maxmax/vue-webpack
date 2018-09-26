<template>
  <div class="container-full">
    <masthead-head
      v-bind:visable="true"
      v-bind:title="masthead.title"
      v-bind:text="masthead.text"
      v-bind:link="masthead.link"
      v-bind:class="[masthead.type]">
    </masthead-head>
    <alert-message
      v-bind:open="true"
      v-bind:text="message.text"
      v-bind:class="[message.type]">
    </alert-message>
  </div>
</template>

<script>
  import MastheadHead from '../components/MastheadHead/index.vue'
  import AlertMessage from '../components/AlertMessage/index.vue'

  export default {
    name: 'HiPage',
    components: {
      MastheadHead,
      AlertMessage
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
