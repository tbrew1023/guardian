import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import NewGuardian from '@/components/NewGuardian'
import ViewGuardian from '@/components/ViewGuardian'
import EditGuardian from '@/components/EditGuardian'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new_guardian',
      name: 'new_guardian',
      component: NewGuardian
    },
    {
      path: '/view_guardian/:phone',
      name: 'view-guardian',
      component: ViewGuardian
    },
    {
      path: '/edit_guardian/:phone',
      name: 'edit-guardian',
      component: EditGuardian
    }
  ]
})
