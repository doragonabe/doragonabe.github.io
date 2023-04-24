<template>
  <div id="page">
    <div id="header">
      <a href="#menu" class="close" id="menubar_hdr"></a>
    </div>

    <div class="content">
      <div id="container">
        <header ref="header">
          <h1 id="sub_title">
            <router-link to="/">
              <img alt="top" src="/assets/images/logo.png">
            </router-link>
          </h1>
        </header>
        <div id="contents">
          <div id="sub" ref="sub">
            <nav id="menubar">
              <ul class="submenu">
                <li>
                  <router-link to="/">
                    <span>トップ</span>
                    <span class="subtitle">Top</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/server_rules">
                    <span>サーバールール</span>
                    <span class="subtitle">Server Rules</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/server_introduction">
                    <span>サーバー紹介</span>
                    <span class="subtitle">Server Introduction</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/server_specifications">
                    <span>サーバー仕様</span>
                    <span class="subtitle">Server Specifications</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/q_and_a">
                    <span>Q & A</span>
                    <span class="subtitle">Q & A</span>
                  </router-link>
                </li>
              </ul>

              <ul class="submenu">
                <li>
                  <a href="http://takaty921.mydns.jp:8123/" target="_blank" rel="noopener noreferrer">
                    <span>dynmap</span><br>
                    <span>※外部リンク</span>
                  </a>
                </li>
                <li>
                  <router-link to="/unique_function">独自機能</router-link>
                </li>
                <li>
                  <router-link to="/original_recipes">独自レシピ</router-link>
                </li>
              </ul>
            </nav>
          </div>

          <div id="main">
            <router-view></router-view>
          </div>
        </div>

        <div class="mainimg">
          <swiper :loop="true"
                  :speed="1000"
                  :autoplay="{delay: 3000, disableOnInteraction: false}"
                  :effect="'fade'"
                  :fadeEffect="{crossFade: true}">
            <swiper-slide><img alt="" src="/assets/images/minecraft1.png"></swiper-slide>
            <swiper-slide><img alt="" src="/assets/images/minecraft2.png"></swiper-slide>
            <swiper-slide><img alt="" src="/assets/images/minecraft3.png"></swiper-slide>
          </swiper>
          <div class="mask"><img alt="" src="/assets/images/123_kazari1.png"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- モバイル用 -->
  <nav id="menu">
    <ul>
      <li><a href="#" @click="MenuClose('/')">トップ</a></li>
      <li><a href="#" @click="MenuClose('/server_rules')">サーバールール</a></li>
      <li><a href="#" @click="MenuClose('/server_introduction')">サーバー紹介</a></li>
      <li><a href="#" @click="MenuClose('/server_specifications')">サーバー仕様</a></li>
      <li><a href="#" @click="MenuClose('/q_and_a')">Q & A</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, toRefs} from 'vue';
import router from './router';

import {Swiper, SwiperSlide} from 'swiper/vue';
import SwiperCore, {Autoplay, EffectFade} from 'swiper';
import 'swiper/css/bundle';

SwiperCore.use([Autoplay, EffectFade]);

import $ from 'jquery';

import { add, subtract } from 'mathjs'

declare global {
  interface Window {
    mmenu: any;
  }
}

const header = ref<HTMLDivElement | null>(null);
const sub = ref<HTMLDivElement | null>(null);
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // window縦サイズ
    const window_height = ref(0);
    // ヘッダー縦サイズ
    const header_height = ref(0);
    // サイドメニュー縦サイズ
    const sub_height = ref(0);
    onMounted(() => {
      window_height.value = window.innerHeight;
      header_height.value = header.value?.getBoundingClientRect().height ?? 0;
      sub_height.value = sub.value?.getBoundingClientRect().height ?? 0;

      window.addEventListener('resize', function(){
        window_height.value =  window.innerHeight;
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
      window.addEventListener('scroll', function() {
        const scroll_top = window.scrollY;
        const scroll_bottom = scroll_top + window_height.value;

        // サブメニューtopの位置
        const sub_top: number = (sub.value?.getBoundingClientRect().top ?? 0) + scroll_top;

        // サブメニューbottomの位置
        const sub_bottom = sub_top + sub_height.value;

        // サブメニュー初期位置と現在topの差
        let sub_top_diff = sub_top - header_height.value - 50;

        if (scroll_top < scroll) { //上スクロールの時の処理
          if (window_height.value < sub_height.value + 40) { // windowサイズがメニューより小さい
            if(sub_top >= scroll_top + 20) {
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
            if(sub_top >= scroll_top + 20) {
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

    const MenuClose = (url: string) => {
      window.mmenu.API.close();
      router.push(url);
    }

    return {
      Autoplay,
      EffectFade,

      header,
      sub,
      window_height,
      header_height,

      MenuClose,
    };
  },
});
</script>
