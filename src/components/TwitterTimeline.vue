<template>
    <a
        class="twitter-timeline"
        :href="'https://twitter.com/' + url"
        :data-height="height"
        :data-width="width"
        :data-lang="lang"
        :data-theme="theme"
        :data-chrome="chrome"
        :data-dnt="doNotTrack ? 'true' : 'false'"
    >
        {{ description }}
    </a>
</template>

<script lang="ts" setup>
import {useScriptTag} from '@vueuse/core';

defineProps({
  url: {type: String, required: true},
  description: {type: String, default: ''},
  height: {type: String, default: ''},
  width: {type: String, default: ''},
  lang: {type: String, default: ''},
  theme: {type: String, default: ''},
  chrome: {type: String, default: ''},
  doNotTrack: {type: Boolean, default: false},
});

useScriptTag('https://platform.twitter.com/widgets.js');
</script>
