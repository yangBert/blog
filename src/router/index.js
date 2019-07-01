import Vue from 'vue'
import Router from 'vue-router'
import JavaScript from '@/components/JavaScript'
import Golang from '@/components/Golang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/JavaScript'
    },
    {
      path: '/JavaScript',
      name: 'JavaScript',
      component: JavaScript
    },
    {
      path: '/Golang',
      name: 'Golang',
      component: Golang
    }
  ]
})
