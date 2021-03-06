import Vue from 'vue';
import Router from 'vue-router';
import CV from '@/components/CV.vue';
import Art from '@/components/Art.vue';
import Contact from '@/components/Contact.vue';
import Zdog from '@/experiment/zDog.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/art',
        },
        {
            path: '/cv',
            name: 'CV',
            component: CV,
        },
        {
            path: '/art',
            name: 'Art',
            component: Art,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '/zdog',
            name: 'Zdog',
            component: Zdog,
        }
    ]
});

export default router;