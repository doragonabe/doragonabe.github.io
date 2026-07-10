<template>
  <div
    class="main-content"
    :class="{ 'menu-active': isActive }"
  >
    <div
      class="overlay z-40"
      :class="{ 'overlay-active': isActive }"
      @click="toggleMenu"
    ></div>
    <div
      class="home grid min-w-md"
      id="container"
    >
      <header class="grid">
        <h1
          class="z-10"
          id="sub_title"
        >
          <NuxtLink
            :to="{ name: 'index' }"
            @click="useScrollTo('#main')"
          >
            <figure class="aspect-square">
              <img
                class="w-full rounded-b"
                src="~/assets/images/logo.webp"
                alt="トップ"
              />
            </figure>
          </NuxtLink>
        </h1>
        <div class="main-slide aspect-2000/900">
          <MainSlide v-if="showGithubWidgets" />
        </div>

        <HamburgerMenu
          class="nav sticky z-50"
          @click="toggleMenu"
          v-model="isActive"
        />
      </header>
      <aside
        class="z-10 flex items-start text-lg"
        ref="contentsRef"
      >
        <nav
          class="hidden w-full pt-5 pb-5 lg:grid"
          id="sub"
          ref="subRef"
        >
          <ul
            class="submenu overflow-hidden rounded-xl border-4 border-blue-500"
            v-for="(section, sectionIndex) in desktopMenuSections"
            :class="{ 'mt-5': sectionIndex > 0 }"
            :key="sectionIndex"
          >
            <li
              class="text-center"
              v-for="(item, itemIndex) in section"
              :class="{ 'border-t border-stone-400/55': itemIndex > 0 }"
              :key="item.label"
            >
              <NuxtLink
                class="block bg-white px-1 py-3 transition duration-500 hover:bg-yellow-100/70"
                v-if="item.kind === 'route'"
                :class="{ '!bg-yellow-100/70': isCurrentRoute(item.name) }"
                :to="{ name: item.name }"
                @click="useScrollTo('#main')"
              >
                <span class="text-black/80">{{ item.label }}</span>
                <span
                  class="subtitle block text-xs tracking-widest text-blue-600"
                  v-if="item.subtitle"
                  >{{ item.subtitle }}</span
                >
              </NuxtLink>

              <NuxtLink
                class="block bg-white px-1 py-3 transition duration-500 hover:bg-yellow-100/70"
                v-else
                target="_blank"
                :to="item.href"
                external
              >
                <span class="text-black/80">{{ item.label }}</span>
                <span class="block text-black/80">{{ item.note }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <nav
          class="sidebar fixed h-full bg-stone-50"
          id="h_nav"
        >
          <ul class="h-full p-1">
            <li
              class="border-b py-1"
              v-for="item in sidebarMenuItems"
              :key="item.name"
            >
              <NuxtLink
                class="inline-block w-full transition duration-500"
                :to="{ name: item.name }"
                @click="closeMenu"
              >
                <span class="text-black/80">{{ item.label }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="min-h-500 pb-20 text-lg">
        <slot />
      </main>
    </div>
  </div>
</template>
<style scoped>
.nav {
  grid-area: 2 / 4;

  top: 1.25rem;
}

#container {
  grid-template-columns: 3% 1fr 4fr auto 3%;
  grid-template-rows: 1.25rem auto auto 1fr;
}

header {
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  grid-row: 1 / 6;
  grid-column: 1 / 6;
}

h1 {
  grid-row: 1 / 4;
  grid-column: 2;
}

.main-slide {
  grid-row: 1 / 5;
  grid-column: 1 / 6;
}

main {
  grid-row: 5;
  grid-column: 2 / 5;
}

@media screen and (min-width: 1024px) {
  .nav {
    grid-area: 2 / 5;
  }

  #container {
    grid-template-columns: 3% 1fr 3% 5fr auto 3%;
    grid-template-rows: 1.25rem auto auto 2rem 1fr;
  }

  header {
    grid-row: 1 / 7;
    grid-column: 1 / 7;
  }

  .main-slide {
    grid-row: 1 / 6;
    grid-column: 1 / 7;
  }

  aside {
    grid-row: 5 / 7;
    grid-column: 2;
  }

  main {
    grid-row: 6;
    grid-column: 4 / 6;
  }
}

@media screen and (min-width: 1280px) {
  #container {
    grid-template-columns: 8% 1fr 5% 5fr auto 8%;
  }
}

.sidebar {
  top: 0;
  right: -250px;
  width: 250px;
  overflow-y: auto;
  transition: right 0.4s;
}

.main-content {
  position: relative;
  right: 0;
  /* スライドアニメーションの設定 */
  transition: right 0.4s;
  min-height: 150vh;
}

.menu-active .sidebar {
  /* メニューを表示 */
  right: 0;
}

.main-content.menu-active {
  /* メインコンテンツを右にずらす */
  right: 250px;
}

.overlay {
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* 半透明の黒色 */
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.5s ease;
  transition-delay: 0.4s;
  opacity: 0;
}

.overlay-active {
  pointer-events: auto;
  opacity: 1;
  cursor: pointer;
}

.sticky_top {
  position: sticky;
  top: 0;
  align-self: start;
}

.sticky_bottom {
  position: sticky;
  bottom: 0;
  align-self: end;
}
</style>
<script lang="ts" setup>
import type { RoutesNamesList } from "@typed-router";

const mainTitle = "doragonabe site";
useHead({
  titleTemplate: (subTitle?: string) => {
    return subTitle ? `${subTitle} | ${mainTitle}` : mainTitle;
  },
  bodyAttrs: {
    class: "bg-amber-50 dark:bg-neutral-500 auto-phrase",
  },
});

type MenuRouteName = Exclude<RoutesNamesList, "slug">;

type RouteMenuItem = {
  kind: "route";
  label: string;
  name: MenuRouteName;
  subtitle?: string;
};

type ExternalMenuItem = {
  kind: "external";
  label: string;
  href: string;
  note: string;
};

type DesktopMenuItem = RouteMenuItem | ExternalMenuItem;

const primaryMenuItems: RouteMenuItem[] = [
  {
    kind: "route",
    label: "トップ",
    name: "index",
    subtitle: "Top",
  },
  {
    kind: "route",
    label: "サーバールール",
    name: "server_rules",
    subtitle: "Server Rules",
  },
  {
    kind: "route",
    label: "サーバー紹介",
    name: "server_introduction",
    subtitle: "Server Introduction",
  },
  {
    kind: "route",
    label: "サーバー仕様",
    name: "server_specifications",
    subtitle: "Server Specifications",
  },
  {
    kind: "route",
    label: "Q & A",
    name: "q_and_a",
    subtitle: "Q & A",
  },
] as const;

const secondaryMenuItems: DesktopMenuItem[] = [
  {
    kind: "external",
    label: "dynmap",
    href: "http://soarerserver.mydns.jp:8123/",
    note: "※外部リンク",
  },
  {
    kind: "route",
    label: "独自機能",
    name: "unique_function",
  },
  {
    kind: "route",
    label: "独自レシピ",
    name: "original_recipes",
  },
] as const;

const isRouteMenuItem = (item: DesktopMenuItem): item is RouteMenuItem => {
  return item.kind === "route";
};

const sidebarMenuItems: RouteMenuItem[] = [
  ...primaryMenuItems,
  ...secondaryMenuItems.filter(isRouteMenuItem),
];
const desktopMenuSections: DesktopMenuItem[][] = [
  primaryMenuItems,
  secondaryMenuItems,
];
const showGithubWidgets = appEnv() === "github";

const isActive = ref<boolean>(false);
const route = useRoute();

const closeMenu = () => {
  isActive.value = false;
  useScrollTo("#main");
};

const toggleMenu = () => {
  isActive.value = !isActive.value;
};

const isCurrentRoute = (name: MenuRouteName) => route.name === name;

const contentsRef = ref<HTMLDivElement | null>(null);
const subRef = ref<HTMLDivElement | null>(null);

const { height } = useWindowSize();
watch(height, (windowHeightValue) => {
  if (!subRef.value) {
    return;
  }

  const subHeight: number = subRef.value.getBoundingClientRect().height;

  if (windowHeightValue >= subHeight) {
    subRef.value.classList.add("sticky_top");
    subRef.value.classList.remove("sticky_bottom");
    subRef.value.style.removeProperty("margin-top");
  }
});

const { y } = useWindowScroll();
watch(y, (newScrollValue, oldScrollValue) => {
  if (!subRef.value || !contentsRef.value) {
    return;
  }

  const subTop: number = subRef.value.getBoundingClientRect().top;
  const subHeight: number = subRef.value.getBoundingClientRect().height;
  const subBottom: number = subRef.value.getBoundingClientRect().bottom;

  const scrollDiff = subRef.value.offsetTop - contentsRef.value.offsetTop;

  if (newScrollValue < oldScrollValue) {
    // 上スクロール
    if (window.innerHeight < subHeight) {
      if (window.innerHeight === subBottom) {
        subRef.value.style.setProperty("margin-top", `${scrollDiff}px`);
        subRef.value.classList.remove("sticky_top");
        subRef.value.classList.remove("sticky_bottom");
      }

      if (subTop >= 0) {
        subRef.value.classList.add("sticky_top");
        subRef.value.classList.remove("sticky_bottom");
        subRef.value.style.removeProperty("margin-top");
      }
    }
  } else {
    // 下スクロール
    if (window.innerHeight >= subHeight) {
      // windowの縦サイズがサイドメニューの縦サイズより大きい

      subRef.value.classList.add("sticky_top");
      subRef.value.classList.remove("sticky_bottom");
      subRef.value.style.removeProperty("margin-top");
    } else {
      if (subBottom < window.innerHeight) {
        subRef.value.classList.add("sticky_bottom");
        subRef.value.classList.remove("sticky_top");
        subRef.value.style.removeProperty("margin-top");

        return;
      }

      if (subRef.value.offsetTop === contentsRef.value.offsetTop) {
        subRef.value.classList.remove("sticky_top");
        subRef.value.classList.remove("sticky_bottom");
        subRef.value.style.removeProperty("margin-top");
      }

      if (subHeight === subBottom) {
        subRef.value.style.setProperty("margin-top", `${scrollDiff}px`);
        subRef.value.classList.remove("sticky_top");
        subRef.value.classList.remove("sticky_bottom");
      }
    }
  }
});
</script>
