import Hello from '../pages/Hi.vue'
import Bye from '../pages/Bi.vue'
import About from '../pages/About.vue'
import Products from '../pages/Products/index.vue'
import BeersPage from '../pages/Products/Beers.vue'
import ProductPage from '../pages/Product.vue'

const routes = [
  {path: '/hello', name: 'hello', component: Hello},
  {path: '/bye', name: 'bye', component: Bye},
  {path: '/about', name: 'about', component: About},
  {path: '/products', name: 'products', component: Products},
  {path: '/beers', name: 'beers', component: BeersPage},
  // dynamic segments start with a colon
  { path: '/product/:id', component: ProductPage },
  {path: '', name:'default'}
]

export default  {
  routes
}
