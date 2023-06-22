<template>
    <div id="page" class="home">
        <div id="header">
            <a href="#menu" id="menubar_hdr" class="close" aria-label="menu"></a>
        </div>

        <div class="content">
            <div id="container">
                <header ref="header">
                    <h1 id="sub_title">
                        <NuxtLink to="/">
                            <img alt="top" src="@/assets/images/logo.webp">
                        </NuxtLink>
                    </h1>
                </header>
                <div id="contents">
                    <div id="sub" ref="sub">
                        <nav id="menubar">
                            <ul class="submenu">
                                <li>
                                    <NuxtLink to="/">
                                        <span>トップ</span>
                                        <span class="subtitle">Top</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/server_rules">
                                        <span>サーバールール</span>
                                        <span class="subtitle">Server Rules</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/server_introduction">
                                        <span>サーバー紹介</span>
                                        <span class="subtitle">Server Introduction</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/server_specifications">
                                        <span>サーバー仕様</span>
                                        <span class="subtitle">Server Specifications</span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/q_and_a">
                                        <span>Q & A</span>
                                        <span class="subtitle">Q & A</span>
                                    </NuxtLink>
                                </li>
                            </ul>

                            <ul class="submenu">
                                <li>
                                    <a href="http://giepi921.mydns.jp:8123/" target="_blank" rel="noopener noreferrer">
                                        <span>dynmap</span><br>
                                        <span>※外部リンク</span>
                                    </a>
                                </li>
                                <li>
                                    <NuxtLink to="/unique_function">独自機能</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/original_recipes">独自レシピ</NuxtLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div id="main">
                        <slot/>
                    </div>
                </div>

                <div class="mainimg">
                    <MainSlide />
                </div>
            </div>
        </div>
    </div>

    <!-- モバイル用 -->
    <Mmenu />
</template>
<script lang="ts">
import 'assets/css/reset.css';
import 'assets/css/style.css';
import 'assets/css/craft.css';

const header = ref<HTMLDivElement | null>(null);
const sub = ref<HTMLDivElement | null>(null);

export default {
  setup() {
    // window縦サイズ
    const window_height = ref<number>(0);
    // ヘッダー縦サイズ
    const header_height = ref<number>(0);
    // サイドメニュー縦サイズ
    const sub_height = ref<number>(0);

    onMounted(async () => {
      await nextTick();

      window_height.value = window.innerHeight;
      header_height.value = header.value?.getBoundingClientRect().height ?? 0;
      sub_height.value = sub.value?.getBoundingClientRect().height ?? 0;

      window.addEventListener('resize', function () {
        window_height.value = window.innerHeight;
        header_height.value = header.value?.getBoundingClientRect().height ?? 0;
        sub_height.value = sub.value?.getBoundingClientRect().height ?? 0;
      });

      if (window_height.value > sub_height.value + 40) { // windowサイズがメニューより大きい
        sub.value?.classList.add('sticky_top');
        sub.value?.classList.remove('sticky_bottom');
      } else { // windowサイズがメニューより小さい
        sub.value?.classList.remove('sticky_top');
        sub.value?.classList.remove('sticky_bottom');
      }

      let scroll: number = 0;
      window.addEventListener('scroll', function () {
        const scroll_top: number = window.scrollY;
        const scroll_bottom = scroll_top + window_height.value;

        // サブメニューtopの位置
        const sub_top: number = (sub.value?.getBoundingClientRect().top ?? 0) + scroll_top;

        // サブメニューbottomの位置
        const sub_bottom = sub_top + sub_height.value;

        // サブメニュー初期位置と現在topの差
        let sub_top_diff = sub_top - header_height.value - 50;

        if (scroll_top < scroll) { //上スクロールの時の処理
          if (window_height.value < sub_height.value + 40) { // windowサイズがメニューより小さい
            if (sub_top >= scroll_top + 20) {
              if (!sub.value?.classList.contains('sticky_top')) {
                sub.value?.classList.add('sticky_top');
                sub.value?.style.removeProperty('margin-top');
              }
            } else {
              if (sub.value?.classList.contains('sticky_bottom')) {
                sub.value?.style.setProperty('margin-top', String(sub_top_diff) + 'px');
                sub.value?.classList.remove('sticky_bottom');
              }
            }
          }
        } else {
          //下スクロールの時の処理
          if (window_height.value < sub_height.value + 40) { // windowサイズがメニューより小さい
            if (sub_top >= scroll_top + 20) {
              if (sub.value?.classList.contains('sticky_top')) {
                sub.value?.classList.remove('sticky_top');
                sub.value?.style.setProperty('margin-top', String(sub_top_diff) + 'px');
                sub.value?.style.setProperty('margin-top', String(sub_top_diff) + 'px');
              }
            } else {
              if (sub_bottom + 20 <= scroll_bottom && !sub.value?.classList.contains('sticky_bottom')) { // scrollがサインドメニューのbottomを超えた場合
                // scrollがサインドメニューのbottomを超えた場合
                sub.value?.classList.remove('sticky_top');
                sub.value?.classList.add('sticky_bottom');
              }
            }
          }
        }
        scroll = scroll_top;
      });
    });

    return {
      header,
      sub,
      window_height,
      header_height,
    };
  },
};
</script>

