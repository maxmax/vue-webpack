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
    name: 'BiPage',
    components: {
      MastheadHead,
      AlertMessage
    },
    data: function(){
      return {
        masthead: {
          visable: true,
          title: 'Bye Page!',
          text: 'K Bye...',
          link: {
            text: 'Back!',
            url: '/',
          },
          type: 'masthead-bi',
        },
        message: {
          type: 'alert-error',
          text: 'Alert message error!'
        }
      }
    },
    methods: {
      _someGoofyMethod() {
        console.log('I am goofier than you can ever be!')
      }
    },
    mounted() {
    },
    created() {
      this._someGoofyMethod();
    }
  }
</script>

<style scoped lang="scss">
  .masthead {
    background: #4CAF50;
    &:after {
      border-top-color: #4CAF50;
    }
  }
</style>
