import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import test from '@/components/test'
import signIn from '@/components/signIn'
import signUp from '@/components/signUp'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo,
      
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },

  ]
})
