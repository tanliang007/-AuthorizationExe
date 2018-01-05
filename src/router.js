/**
 * Created by superman on 17/2/16.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import * as types from './store/types'
import Index from './index.vue'
import Repository from './repository.vue'
import Login from './login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '/',
        component: Index
    },
    {
        path: '/repository',
        name: '/repository',
        meta: {
         requiresAuth: true
        }   
        ,
        component: Repository
    },
    {
        path: '/login',
        name: '/login', 
        component: Login
    },
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    console.log('拿本地的token执行了-----')
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new VueRouter({
    routes
});

router.beforeEach(function (to, from, next) {
    if(to.matched.some(v=>v.meta.requiresAuth)){
        if(store.state.token){
            next()  
        }
        else
        {
            console.log(to.fullPath )
          next({ 
              path:'/login',
              query:{redirect: to.fullPath}
            })
        }
    }
    else{
        next()
    }
   
  })

export default router;