import type {RouterOptions} from '@nuxt/schema';
import {RouteLocationNormalized, RouteLocationNormalizedLoaded} from 'vue-router';

export default <RouterOptions>{
  // 画面遷移時にページトップにスクロールせずに維持する
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
  },
};
