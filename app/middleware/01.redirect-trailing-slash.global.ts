import type { RouteLocationNormalized } from "vue-router";

/**
 * リロード時に末尾のスラッシュを削除する
 */
export default defineNuxtRouteMiddleware(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    if (to.path === "/" || !to.path.endsWith("/")) return;

    const { path, query, hash } = to;
    const nextPath: string = path.replace(/\/+$/, "") || "/";
    const nextRoute = { path: nextPath, query, hash };

    return navigateTo(nextRoute, { redirectCode: 301 });
  },
);
