import Hello from '../pages/Hi.vue'
import Bye from '../pages/Bi.vue'
import About from '../pages/About.vue'
import Products from '../pages/Products.vue'

const routes = [
  {path: '/hello', name: 'hello', component: Hello},
  {path: '/bye', name: 'bye', component: Bye},
  {path: '/about', name: 'about', component: About},
  {path: '/products', name: 'products', component: Products},
  {path: '', name:'default'}
]

export default  {
  routes
}
