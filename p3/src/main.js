import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from '@/common/store.js';

import HomePage from '@/components/pages/HomePage.vue';
import ScriptPage from '@/components/pages/ScriptPage.vue';
import ScriptCreatePage from '@/components/pages/ScriptCreatePage.vue';
//https://github.com/codekraft-studio/vue-record
import VueRecord from '@codekraft-studio/vue-record'
import AccountPage from "@/components/pages/AccountPage.vue";

Vue.config.productionTip = false
Vue.use(VueRecord);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/account', component: AccountPage },
        {
            path: '/scripts/new', 
            component: ScriptCreatePage,
            meta: {
                requiresAuth: true
            } 
        },
        {          
            path: '/denied',
            component: () => import('@/components/pages/AccessDeniedPage.vue'),
        },        
        {          
            path: '/register',
            component: () => import('@/components/pages/RegisterPage.vue'),
        },         
        { path: '/scripts/:id', component: ScriptPage, props: true },
    ],
})


router.beforeEach(async (to, from, next) => {

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    console.log('requiresAuth', requiresAuth);
    console.log('store.state.user', store.state.user);
    const decide = () => {
        if (requiresAuth && !store.state.user) {
            next('/denied');
        }
        else {
            next();
        }
    }

    // If we don't have the user yet, dispatch our Vuex authUser action
    if (store.state.user === null) {
        store.dispatch('authUser').then(() => {
            decide();
        });
    } else {
        decide();
    }

});


new Vue({
    router, // equivalent to router: router,
    store,
    render: h => h(App),
}).$mount('#app')
