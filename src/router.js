import Vue from 'vue';
import Router from 'vue-router';
import CV from '@/components/CV.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/CV',
            name: 'CV',
            component: CV,
        },
    ]
});

export default router;