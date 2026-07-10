import type { RouterOptions } from "@nuxt/schema";

export default <RouterOptions>{
  // composables/useScrollToと併せて使う
  scrollBehavior(_to, _from, _savedPosition) {
    const { setState } = useScrollTo();

    if (setState.value) {
      const ScrollTo = setState.value;
      setState.value = "";

      return {
        el: ScrollTo,
        behavior: "smooth",
      };
    }
  },
};
