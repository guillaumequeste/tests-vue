import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Contact from './components/Contact.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'app',
            component: App
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})