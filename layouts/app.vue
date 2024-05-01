<template>
  <div
    id="container"
    class="home min-w-[340px] grid"
  >
    <header class="grid">
      <h1
        id="sub_title"
        class="pb-8"
      >
        <NuxtLink
          :to="{ name: 'index' }"
          @click="useScrollTo('#main')"
        >
          <img
            alt="top"
            src="~/assets/images/logo.webp"
          />
        </NuxtLink>
      </h1>

      <div class="main-slide -z-10">
        <MainSlide />
      </div>
    </header>
    <aside
      class="hidden lg:grid"
      ref="contentsRef"
    >
      <nav
        id="sub"
        class="pt-5 pb-5 h-fit w-full"
        ref="subRef"
      >
        <ul class="submenu">
          <li>
            <NuxtLink
              :to="{ name: 'index' }"
              @click="useScrollTo('#main')"
              class="py-3 px-1"
            >
              <span>トップ</span>
              <span class="subtitle">Top</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'server_rules' }"
              @click="useScrollTo('#main')"
              class="py-3 px-1"
            >
              <span>サーバールール</span>
              <span class="subtitle">Server Rules</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'server_introduction' }"
              @click="useScrollTo('#main')"
              class="py-3 px-1"
            >
              <span>サーバー紹介</span>
              <span class="subtitle">Server Introduction</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'server_specifications' }"
              @click="useScrollTo('#main')"
              class="py-3 px-1"
            >
              <span>サーバー仕様</span>
              <span class="subtitle">Server Specifications</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'q_and_a' }"
              @click="useScrollTo('#main')"
              class="py-3 px-1"
            >
              <span>Q & A</span>
              <span class="subtitle">Q & A</span>
            </NuxtLink>
          </li>
        </ul>

        <ul class="submenu mt-5">
          <li>
            <a
              href="http://soarerserver.mydns.jp:8123/"
              rel="noopener noreferrer"
              target="_blank"
              class="py-3 px-1"
            >
              <span>dynmap</span><br />
              <span>※外部リンク</span>
            </a>
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'unique_function' }"
              @click="useScrollTo('#main')"
              class="py-3 px-1"
              >独自機能</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'original_recipes' }"
              @click="useScrollTo('#main')"
              class="py-3 px-1"
              >独自レシピ</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </aside>
    <main
      id="main"
      class="pt-5 pb-20 min-h-[750px] text-lg"
    >
      <slot />
    </main>
  </div>
</template>
<style scoped>
#container {
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto 1fr;
  gap: 0 0;
  grid-auto-flow: row;
}

header {
  grid-template-columns: 1fr 3fr;
  grid-template-rows: subgrid;
  grid-area: 1 / 1 / 3 / 3;
}

h1 {
  grid-area: 1 / 1 / 1 / 1;
  padding-left: 16%;
}

.main-slide {
  grid-area: 1 / 1 / 3 / 3;
}

main {
  grid-area: 3 / 1 / 3 / 3;
  padding-left: 3%;
  padding-right: 3%;
}

@media screen and (min-width: 1024px) {
  #container {
    grid-template-columns: 1fr 4fr;
  }

  header {
    padding-left: 0;
    grid-template-columns: 1fr 4fr;
  }

  aside {
    grid-area: 2 / 1 / 4 / 1;
    padding-left: 16%;
  }

  main {
    grid-area: 3 / 2 / 3 / 2;
    padding-left: 4%;
    padding-right: 4%;
  }
}

@media screen and (min-width: 1280px) {
  h1 {
    padding-left: 39%;
  }

  aside {
    padding-left: 39%;
  }

  main {
    padding-left: 6%;
    padding-right: 13%;
  }
}
</style>
<script lang="ts" setup>
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
