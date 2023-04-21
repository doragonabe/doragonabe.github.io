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
import {defineComponent, ref} from 'vue';
import router from './router';
import {Swiper, SwiperSlide} from 'swiper/vue';
import SwiperCore, {Autoplay, EffectFade} from 'swiper';
import 'swiper/css/bundle';

SwiperCore.use([Autoplay, EffectFade]);

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
});
</script>
