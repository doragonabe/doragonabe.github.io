<template>
  <h3>Twitterタイムライン表示サンプル</h3>
  <NuxtLink :to="{ name: 'tests' }">戻る</NuxtLink>
  <br />
  <TwitterTimeline
    url="minecraftjapan"
    :dataChrome="['noheader', 'nofooter', 'noborders', 'transparent']"
    :dataTweetLimit="4"
  />
</template>
