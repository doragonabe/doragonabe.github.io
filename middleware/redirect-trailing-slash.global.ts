import {RouteLocationNormalized} from 'vue-router';

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    if (to.path !== '/' && to.path.endsWith('/')) {
        const { path, query, hash } = to;
        const nextPath: string = path.replace(/\/+$/, '') || '/';
        const nextRoute = { path: nextPath, query, hash };
        return navigateTo(nextRoute, { redirectCode: 301 });
    }
})
