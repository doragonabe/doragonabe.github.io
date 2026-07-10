<template>
  <h3>Google翻訳サンプル</h3>
  <div id="google_translate_element"></div>

  <br />
  <NuxtLink :to="{ name: 'tests' }">戻る</NuxtLink>
</template>
<script lang="ts" setup>
import { useScriptTag } from "@vueuse/core";

type GoogleTranslateApi = {
  translate: {
    TranslateElement: new (
      options: { pageLanguage: string },
      element: string
    ) => unknown;
  };
};

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: GoogleTranslateApi;
  }
}

useScriptTag(
  "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
);

window.googleTranslateElementInit = () => {
  new window.google.translate.TranslateElement(
    { pageLanguage: "ja" },
    "google_translate_element"
  );
};
</script>
