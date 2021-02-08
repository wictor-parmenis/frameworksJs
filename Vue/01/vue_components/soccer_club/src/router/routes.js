import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/AppSectionBanner.vue'
import News from  '../components/AppSectionNews.vue'
import Notice from '../components/AppSectionNewsNotice.vue'

Vue.use(VueRouter)

export default new VueRouter ({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Home
    },{
        path: '/news',
        alias: '/notices',
        component: News
    },{
        path: '/news/:idnotice',
        name: 'notice',
        component: Notice
    },{
        path: '/admin',
        redirect: '/'
    }



]
})