import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/login.vue';
import Home from './components/home.vue';
import {store} from './store/Store'
Vue.use(Router)

export const router= new Router({
  routes: [
    { path: '/',
      name:'login',
      component: Login
    },
    { path: '/home',
      name:'home',
      component: Home,
      beforeEnter:(to, from, next)=>{
        if(store.state.authenticated == false) {
          next({path: '/', name:'login'});
        }else{
          next();
        }
      }
    }
  ],
  mode:'history'
})
