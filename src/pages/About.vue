<template>
  <div class="container-full">

    <masthead-head
      v-bind:visable="true"
      v-bind:title="masthead.title"
      v-bind:text="masthead.text"
      v-bind:link="masthead.link"
      v-bind:class="[masthead.type]" />

    <alert-message
      v-bind:open="true"
      v-bind:choice="true"
      v-bind:title="message.title"
      v-bind:text="message.text"
      v-bind:class="[message.type]" />

    <todos-list v-bind:data="todos" />

    <div class="br-m-t30 br-m-b30">
      <BootstrapUi />
    </div>

    <div class="container br-m-t30 br-m-b30">{{pageContent}}</div>

    <below-fold
      title="My journey with Vue"
      text="Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum." />

    <b-container>
      <markdown-code title="Sample Markdown" />
    </b-container>

    <services-list v-bind:data="services" />

  </div>
</template>

<script>

  import MastheadHead from '../components/MastheadHead/index.vue'
  import AlertMessage from '../components/AlertMessage/index.vue'
  import TodosList from '../components/TodosList/index.vue'
  import ServicesList from '../components/ServicesList/index.vue'
  import BelowFold from '../components/BelowFold.vue'
  import BootstrapUi from '../components/Bootstrap/index.vue'
  import MarkdownCode from '../components/MarkdownCode/index.vue'

  export default {
    name: 'AboutPage',
    components: {
      MastheadHead,
      AlertMessage,
      TodosList,
      BelowFold,
      ServicesList,
      BootstrapUi,
      MarkdownCode
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
        ],
        demoEvents: [
          {
            date: '2016/11/12', // Required
            title: 'Foo' // Required
          }, {
            date: '2016/12/15',
            title: 'Bar',
            desc: 'description',
            customClass: 'disabled highlight' // Custom classes to an calendar cell
          }
        ]
      }
    },
    methods: {
      $_someGoofyMethod() {
        console.log('I am goofier than you can ever be, on About Us!')
      }
    },
    mounted() {
      console.log('About Mounted!')
    },
    created() {
      this.$_someGoofyMethod();
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
