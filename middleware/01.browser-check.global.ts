import Bowser from "bowser";
import type { RouteLocationNormalized } from "vue-router";

export default defineNuxtRouteMiddleware(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    const browser = Bowser.getParser(window.navigator.userAgent);

    // ブラウザがサポート対象かどうかを判定
    const isValidBrowser: boolean =
      browser.satisfies({
        /**
         * OS毎の設定
         */
        macos: {
          safari: ">=16",
        },

        /**
         * 全OS共通
         */
        // 80: SameSite仕様変更 Android 4.4最終サポート
        // 109: Windows 7/8.1最終サポート
        // 113: Mac Mojave最終サポート
        chrome: ">=123",

        // 80: Chromium版以降
        // 86: SameSite仕様変更
        // 109: Windows 7/8.1最終サポート
        edge: ">=119",

        // 96: SameSite仕様変更
        // 115: Windows 7/8.1＆Mac Mojave最終サポート
        firefox: ">=119",

        /**
         * 全バージョンサポート対象外
         */
        // 2012年に開発終了
        bada: "<0",

        // 2022年6月15日にサポート終了
        ie: "<0",

        // 2018年6月2日に開発終了
        phantomjs: "<0",

        // 2018年4月に開発が終了し、Falkonとしてリブランド
        qupzilla: "<0",

        // 2022年1月4日にサポート終了
        blackberry: "<0",

        // 2021年12月31日にストア閉鎖
        tizen: "<0",
      }) ?? true;

    if (!isValidBrowser) {
      return abortNavigation(
        createError({
          statusCode: 403,
        }),
      );
    }
  },
);
