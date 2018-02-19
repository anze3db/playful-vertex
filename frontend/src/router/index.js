import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import InstanceIndex from '@/components/InstanceIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/instance/:instance_id',
      name: 'instance',
      props: true,
      component: InstanceIndex
    }
  ]
})
