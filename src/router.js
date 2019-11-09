import Vue from 'vue';
import Router from 'vue-router';
import CV from '@/components/CV.vue';
import Art from '@/components/Art.vue';
import Contact from '@/components/Contact.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/Art',
        },
        {
            path: '/CV',
            name: 'CV',
            component: CV,
        },
        {
            path: '/Art',
            name: 'Art',
            component: Art,
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact,
        },
    ]
});

export default router;