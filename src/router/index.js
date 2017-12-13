import Vue from 'vue'
import Router from 'vue-router'
import menuButton from '@/components/menu-btn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menuButton',
      component: menuButton
    }
  ]
})
