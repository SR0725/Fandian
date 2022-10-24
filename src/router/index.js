import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'
const _import = (path) => {
    const splitPath = path.split('/');
    if (splitPath.length === 1) {
        return defineAsyncComponent(() => import(`../views/${splitPath[0]}.vue`));
    }
    if (splitPath.length === 2) {
        return defineAsyncComponent(() => import(`../views/${splitPath[0]}/${splitPath[1]}.vue`));
    }
    if (splitPath.length === 3) {
        return defineAsyncComponent(() => import(`../views/${splitPath[0]}/${splitPath[1]}/${splitPath[2]}.vue`));
    }
    if (splitPath.length === 4) {
        return defineAsyncComponent(() => import(`../views/${splitPath[0]}/${splitPath[1]}/${splitPath[2]}/${splitPath[3]}.vue`));
    }
};

const routes = [
    {
        path: '/Fandian',
        name: '首頁',
        component: _import('Home'),
        meta: { transition: 'home-page' },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
