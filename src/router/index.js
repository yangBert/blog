import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Life from '@/components/Life'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    }
  ]
})
