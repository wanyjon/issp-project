import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import test from '@/components/test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: demo
    },
    {
      path: '/test',
      // name: 'HelloWorld',
      component: test
    }
  ]
})
