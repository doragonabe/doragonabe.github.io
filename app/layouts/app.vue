<template>
  <div class="main-content overflow-y-scroll">
    <div class="overlay z-40" @click="toggleMenu()" ref="overlay"></div>
    <div id="container" class="home min-w-[340px] grid">
      <header class="grid">
        <h1 id="sub_title" class="z-10">
          <NuxtLink :to="{ name: 'index' }" @click="useScrollTo('#main')">
            <img class="w-full" alt="top" src="~/assets/images/logo.webp" />
          </NuxtLink>
        </h1>
        <div class="main-slide aspect-[2000/900]">
          <MainSlide v-if="
            useIncludes(['local', 'github'], useRuntimeConfig().public.appEnv)
          " />
        </div>

        <HamburgerMenu class="nav sticky z-50" v-model="isActive" @click="toggleMenu()" />
      </header>
      <aside ref="contentsRef" class="z-10">
        <nav id="sub" class="hidden lg:grid pt-5 pb-5 w-full" ref="subRef">
          <ul class="submenu">
            <li class="text-center">
              <NuxtLink :to="{ name: 'index' }" @click="useScrollTo('#main')" class="py-3 px-1">
                <span class="text-[#333]">トップ</span>
                <span class="subtitle">Top</span>
              </NuxtLink>
            </li>
            <li class="text-center">
              <NuxtLink :to="{ name: 'server_rules' }" @click="useScrollTo('#main')" class="py-3 px-1">
                <span class="text-[#333]">サーバールール</span>
                <span class="subtitle">Server Rules</span>
              </NuxtLink>
            </li>
            <li class="text-center">
              <NuxtLink :to="{ name: 'server_introduction' }" @click="useScrollTo('#main')" class="py-3 px-1">
                <span class="text-[#333]">サーバー紹介</span>
                <span class="subtitle">Server Introduction</span>
              </NuxtLink>
            </li>
            <li class="text-center">
              <NuxtLink :to="{ name: 'server_specifications' }" @click="useScrollTo('#main')" class="py-3 px-1">
                <span class="text-[#333]">サーバー仕様</span>
                <span class="subtitle">Server Specifications</span>
              </NuxtLink>
            </li>
            <li class="text-center">
              <NuxtLink :to="{ name: 'q_and_a' }" @click="useScrollTo('#main')" class="py-3 px-1">
                <span class="text-[#333]">Q & A</span>
                <span class="subtitle">Q & A</span>
              </NuxtLink>
            </li>
          </ul>

          <ul class="submenu mt-5">
            <li class="text-center">
              <NuxtLink to="http://soarerserver.mydns.jp:8123/" target="_blank" external class="py-3 px-1">
                <span class="text-[#333]">dynmap</span><br />
                <span class="text-[#333]">※外部リンク</span>
              </NuxtLink>
            </li>
            <li class="text-center">
              <NuxtLink :to="{ name: 'unique_function' }" @click="useScrollTo('#main')" class="py-3 px-1 text-[#333]">
                独自機能</NuxtLink>
            </li>
            <li class="text-center">
              <NuxtLink :to="{ name: 'original_recipes' }" @click="useScrollTo('#main')" class="py-3 px-1 text-[#333]">
                独自レシピ</NuxtLink>
            </li>
          </ul>
        </nav>

        <nav id="h_nav" class="sidebar fixed h-full bg-[#faf9f1]">
          <ul class="p-1 h-full">
            <li class="py-1 border-b">
              <NuxtLink :to="{ name: 'index' }" @click="menuClose()" class="mm-listitem__text text-[#333]">トップ
              </NuxtLink>
            </li>
            <li class="py-1 border-b">
              <NuxtLink :to="{ name: 'server_rules' }" @click="menuClose()" class="mm-listitem__text text-[#333]">
                サーバールール</NuxtLink>
            </li>
            <li class="py-1 border-b">
              <NuxtLink :to="{ name: 'server_introduction' }" @click="menuClose()"
                class="mm-listitem__text text-[#333]">サーバー紹介</NuxtLink>
            </li>
            <li class="py-1 border-b">
              <NuxtLink :to="{ name: 'server_specifications' }" @click="menuClose()" class="mm-listitem__text">サーバー仕様
              </NuxtLink>
            </li>
            <li class="py-1 border-b">
              <NuxtLink :to="{ name: 'q_and_a' }" @click="menuClose()" class="mm-listitem__text text-[#333]">Q & A
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main id="main" class="pt-5 pb-20 min-h-[750px] text-lg">
        <slot />
      </main>
    </div>
  </div>
</template>
<style scoped>
.nav {
  grid-area: 2 / 4;

  top: calc(0.25rem + 34px);
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

.menu-active .main-content {
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
</style>
<script lang="ts" setup>
const mainTitle = "doragonabe site";
useHead({
  titleTemplate: (subTitle?: string) => {
    return subTitle ? `${subTitle} | ${mainTitle}` : mainTitle;
  },
  bodyAttrs: {
    class: "bg-amber-50 dark:bg-neutral-500",
  },
});

const isActive = ref<boolean>(false);
const overlay = ref<HTMLDivElement | null>(null);

const menuClose = () => {
  toggleMenu();
  useScrollTo("#main");
};

const toggleMenu = () => {
  if (!overlay.value) {
    return;
  }

  if (isActive.value) {
    isActive.value = false;
    document.body.classList.remove("menu-active");
    overlay.value.classList.remove("overlay-active");
  } else {
    isActive.value = true;
    document.body.classList.add("menu-active");
    overlay.value.classList.add("overlay-active");
  }
};

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
