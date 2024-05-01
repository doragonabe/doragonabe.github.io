<template>
  <a
    :data-chrome="chrome"
    :data-dnt="doNotTrack ? 'true' : 'false'"
    :data-height="height"
    :data-lang="lang"
    :data-theme="theme"
    :data-width="width"
    :href="'https://twitter.com/' + url"
    class="twitter-timeline"
    >{{ description }}
  </a>
</template>

<script lang="ts" setup>
defineProps({
  url: { type: String, required: true },
  description: { type: String, default: "" },
  height: { type: String, default: "" },
  width: { type: String, default: "" },
  lang: { type: String, default: "" },
  theme: { type: String, default: "" },
  chrome: { type: String, default: "" },
  doNotTrack: { type: Boolean, default: false },
});

useScriptTag("https://platform.twitter.com/widgets.js");
</script>
