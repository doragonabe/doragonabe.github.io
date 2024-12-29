import Bowser from "bowser";
import type { RouteLocationNormalized } from "vue-router";

export default defineNuxtRouteMiddleware(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    const browser = Bowser.getParser(window.navigator.userAgent);

    // ブラウザがサポート対象かどうかを判定
    const isValidBrowser: boolean =
      browser.satisfies({
        /**
         * https://gs.statcounter.com/ios-version-market-share/mobile-tablet/worldwide
         *
         * 17.2: CSSネスト対応
         */
        safari: ">=17.5",

        /**
         * 80: SameSite仕様変更 Android 4.4最終サポート
         * 109: Windows 7/8.1最終サポート
         * 113: Mac Mojave最終サポート
         * 119: 疑似クラス、相対カラー構文などの追加
         * 120: 新しいメディアクエリ、新しい指数関数、CSSネストなどの追加
         * 121: SVGマスク改善
         * 123: align-content改善、カーニングの追加
         * 125: CSSによるアンカーのポジションの取得
         * 127: font-size-adjust追加
         * 128: ルビのレイアウト強化
         * 129: interpolate-sizeプロパティ追加
         * 130: CSSネスト改善
         */
        chrome: ">=130",

        /**
         * 80: Chromium版以降
         * 86: SameSite仕様変更
         * 109: Windows 7/8.1最終サポート
         */
        edge: ">=130",

        /**
         * 96: SameSite仕様変更
         * 115: Windows 7/8.1＆Mac Mojave最終サポート
         */
        firefox: ">=132",

        /**
         * 全バージョンサポート対象外
         */
        // 2012年に開発終了
        bada: "<0",

        // 2018年4月に開発が終了し、Falkonとしてリブランド
        qupzilla: "<0",

        // 2018年6月2日に開発終了
        phantomjs: "<0",

        // 2021年12月31日にストア閉鎖
        tizen: "<0",

        // 2022年1月4日にサポート終了
        blackberry: "<0",

        // 2022年6月15日にサポート終了
        ie: "<0",
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
