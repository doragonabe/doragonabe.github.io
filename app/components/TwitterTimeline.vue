<template>
  <a
    class="twitter-timeline"
    :data-aria-polite="dataAriaPolite"
    :data-chrome="dataChrome.join('')"
    :data-dnt="dataDnt"
    :data-height="dataHeight"
    :data-lang="dataLang"
    :data-theme="dataTheme"
    :data-tweet-limit="dataTweetLimit"
    :data-width="dataWidth"
    :href="'https://twitter.com/' + url"
  >
    <slot />
  </a>
</template>
<script lang="ts" setup>
type Range<
  N extends number,
  M extends number,
  Result extends number = never,
  C extends never[] = [],
  Flag extends boolean = false,
> = C["length"] extends N
  ? Range<N, M, Result | C["length"], [...C, never], true>
  : Flag extends true
    ? C["length"] extends M
      ? Result | C["length"]
      : Range<N, M, Result | C["length"], [...C, never], Flag>
    : Range<N, M, Result, [...C, never], Flag>;

type DataChromeOptions =
  | "noheader"
  | "nofooter"
  | "noborders"
  | "noscrollbar"
  | "transparent";

const {
  dataLang = "ja",
  dataChrome = ["noheader", "nofooter", "noborders", "transparent"],
  dataDnt = true,
} = defineProps<{
  url: string;
  description?: string;
  dataHeight?: string;
  dataWidth?: string;
  dataLang?: "ja" | "en";
  dataChrome?: DataChromeOptions[];
  dataTheme?: "light" | "dark";
  dataTweetLimit?: Range<1, 20>;
  dataAriaPolite?: "polite" | "assertive";
  dataDnt?: boolean;
}>();

useScriptTag("https://platform.x.com/widgets.js");
</script>
