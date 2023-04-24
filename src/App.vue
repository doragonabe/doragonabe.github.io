<template>
  <div id="page">
    <div id="header">
      <a href="#menu" class="close" id="menubar_hdr"></a>
    </div>

    <div class="content">
      <div id="container">
        <header>
          <h1 id="sub_title">
            <router-link to="/">
              <img alt="top" src="/assets/images/logo.png">
            </router-link>
          </h1>
        </header>
        <div id="contents">
          <div id="sub">
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
      <li><a href="#" @click="menu_close('/')">トップ</a></li>
      <li><a href="#" @click="menu_close('/server_rules')">サーバールール</a></li>
      <li><a href="#" @click="menu_close('/server_introduction')">サーバー紹介</a></li>
      <li><a href="#" @click="menu_close('/server_specifications')">サーバー仕様</a></li>
      <li><a href="#" @click="menu_close('/q_and_a')">Q & A</a></li>
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

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    onMounted(() => {
    });

    return {
      Autoplay,
      EffectFade,
    };
  },
  methods: {
    menu_close(url: string) {
      window.mmenu.API.close();
      router.push(url);
    },
  },
  mounted() {
    const sub = $('#sub');

    // window縦サイズ
    const window_height = window.innerHeight

    // サイドメニューサイズ
    const sub_height = (sub?.height() ?? 0) + 40;

    const header_height = $('header')?.height() ?? 0;

    if (window_height < sub_height) {
      // windowサイズがメニューより小さい
      sub.removeClass('sticky_top');
      sub.removeClass('sticky_bottom');
    } else {
      // windowサイズがメニューより大きい
      sub.addClass('sticky_top');
      sub.removeClass('sticky_bottom');
    }

    let scroll: number = 0;
    $(window).on('scroll', function() {
      const scroll_top = window.scrollY;
      const scroll_bottom = scroll_top + window_height;

      // サブメニューtopの位置
      const sub_top = sub?.offset()?.top ?? 0;

      // サブメニューbottomの位置
      const sub_bottom = sub_top + (sub?.height() ?? 0);

      // サブメニュー初期位置と現在topの差
      let sub_top_diff = sub_top - header_height - 50;

      if (scroll_top < scroll) {
        //上スクロールの時の処理
        if (window_height < sub_height) {
          if(sub_top >= scroll_top + 20) {
            if (!sub.hasClass('sticky_top')) {
              sub.addClass('sticky_top');
              sub.css('margin-top', '');
            }
          } else {
            if (sub.hasClass('sticky_bottom')) {
              sub.css('margin-top', sub_top_diff)
              sub.removeClass('sticky_bottom');
            }
          }
        }
      } else {
        //下スクロールの時の処理
        if (window_height < sub_height) {
          if(sub_top >= scroll_top + 20) {
            // scroll時、windowサイズがメニューより大きい
            if (sub.hasClass('sticky_top')) {
              sub.removeClass('sticky_top');
              sub.css('margin-top', sub_top_diff)
            }
          } else {
            // scroll時、windowサイズがメニューより小さい
            if (sub_bottom < scroll_bottom && !sub.hasClass('sticky_bottom')) {
              // scrollがサインドメニューのbottomを超えた場合
              sub.removeClass('sticky_top');
              sub.addClass('sticky_bottom');
            }
          }
        }
      }
      scroll = scroll_top;
    });
  }
});
</script>
