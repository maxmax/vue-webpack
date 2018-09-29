import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './utils/routes'
import BootstrapVue from 'bootstrap-vue'
import vSelect from 'vue-select'
import AppLayout from './pages/AppLayout.vue'
import styles from './css/styles.scss';
// import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
// import vueEventCalendar from 'vue-event-calendar'

// Routes.
Vue.use(VueRouter)
// Vue resource, you can use fetch APIs or any.
Vue.use(VueResource)
// Vue.use(Store) //Get your own vuex store from https://vuex.vuejs.org/en/
Vue.http.interceptors.push((request, next)=> {
  if(request.params === undefined) {
    request.params = {}
  }
  request.params.someToken = 'some-token-you-might-want';
  next();
})

const router = new VueRouter({
  routes: routes.routes
})

Vue.mixin({
  methods:  {
    _veryUsefulMethod() {
      console.log('I am a global mixin. I should be used across the app.')
    }
  }
})

// We define our own currency filter "currency".
Vue.filter('currency', function (value) {
  return '$' + value.toFixed(2);
});

Vue.use(BootstrapVue);
Vue.component('v-select', vSelect);

const App = new Vue({
  el:'#app',
  router,
  name: 'AppLayout',
  render: h => h(AppLayout),
  methods: {
    _someMethodYouWant() {
      console.log('App Any method!')
    }
  },
  created(){
    console.log('App created....');
  }
})
