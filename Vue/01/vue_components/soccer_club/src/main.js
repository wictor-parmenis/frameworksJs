import Vue from 'vue'
import App from './App.vue'
import Vue2Filters from 'vue2-filters'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/store.js'
import router from './router/routes'

Vue.use(Vue2Filters)

Vue.config.productionTip = false
// Realizar uma verificação em todas as rotas da aplicação.
// router.beforeEach((to, from, next) => {
//   console.log(to, from);
//   next();
// })

// router.afterEach(() =>{
//   console.log('Rendering ok!')
// })
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
