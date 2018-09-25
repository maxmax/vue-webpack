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
      v-bind:choice="true"
      v-bind:title="message.title"
      v-bind:text="message.text"
      v-bind:class="[message.type]">
    </alert>
    <todos v-bind:data="todos" ></todos>
    <services-list v-bind:data="services" ></services-list>
    <div class="container br-m-t30 br-m-b30">{{pageContent}}</div>
    <below-fold
      title="My journey with Vue"
      text="Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.">
    </below-fold>
    <b-container>
      <markdown title="Sample Markdown"></markdown>
    </b-container>
    <BootstrapUi></BootstrapUi>
  </div>
</template>

<script>
  import Masthead from '../components/Masthead/index.vue'
  import Alert from '../components/Alert/index.vue'
  import Todos from '../components/Todos/index.vue'
  import ServicesList from '../components/ServicesList/index.vue'
  import BelowFold from '../components/BelowFold.vue'
  import BootstrapUi from '../components/Bootstrap/index.vue'
  import Markdown from '../components/Markdown/index.vue'

  export default {
    name: 'AboutPage',
    components: {
      Masthead,
      Alert,
      Todos,
      BelowFold,
      ServicesList,
      BootstrapUi,
      Markdown
    },
    data: function(){
      return {
        masthead: {
          visable: true,
          title: 'About page!',
          text: 'About page description!',
          link: {
            text: 'Back to home',
            url: '/',
          },
          type: 'masthead-about',
        },
        message: {
          type: 'alert-success',
          title: 'Success!',
          text: 'Alert message success - (This Website uses cookies)' + new Date().toLocaleString()
        },
        pageContent: 'Page content...',
        todos: [
          { title: 'JavaScript', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
          { title: 'Vue', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
          { title: 'Node', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
        ],
        services: [
        	{
        		name: 'Web development',
        		price: 300,
        		active: true
        	},{
        		name: 'Design',
        		price: 400,
        		active: false
        	},{
        		name: 'Integration',
        		price: 250,
        		active: false
        	}
        ]
      }
    },
    methods: {
      _someGoofyMethod() {
        console.log('I am goofier than you can ever be, on About Us!')
      }
    },
    mounted() {
      console.log('About Mounted!')
    },
    created() {
      this._someGoofyMethod();
    },
  }
</script>

<style scoped lang="scss">
  .masthead {
    background: #03A9F4;
    &:after {
      border-top-color: #03A9F4;
    }
  }
</style>
