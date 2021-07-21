import Vue from 'vue';
import Router from 'vue-router';
import LampComponent from '../components/Lamp.vue'
import LightnerComponent from '../components/Lightner.vue'
import AdminComponent from '../components/Admin.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: LampComponent


        }, {
            path: '/lamp/:id',
            name: 'lightner',
            props: true,
            component: LightnerComponent
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminComponent
        }
    ]
});