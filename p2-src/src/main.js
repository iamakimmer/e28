import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue';
import ScriptPage from '@/components/pages/ScriptPage.vue';
import ScriptCreatePage from '@/components/pages/ScriptCreatePage.vue';
//https://github.com/codekraft-studio/vue-record
import VueRecord from '@codekraft-studio/vue-record'


Vue.config.productionTip = false
Vue.use(VueRecord);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/scripts/new', component: ScriptCreatePage },
        { path: '/scripts/:id', component: ScriptPage, props: true },
    ],
})

new Vue({
    router, // equivalent to router: router,
    render: h => h(App),
}).$mount('#app')
