<template>
  <h3>音声認識 SpeechRecognition</h3>
  <NuxtLink :to="{ name: 'tests' }">戻る</NuxtLink>
  <br />
  <table>
    <tbody>
      <tr class="border-b dark:border-gray-300 dark:bg-gray-50">
        <td class="p-3">result</td>
        <td class="p-3">{{ result }}</td>
      </tr>
      <tr class="border-b dark:border-gray-300 dark:bg-gray-50">
        <td class="p-3">isSupported</td>
        <td class="p-3">{{ isSupported }}</td>
      </tr>
      <tr class="border-b dark:border-gray-300 dark:bg-gray-50">
        <td class="p-3">isListening</td>
        <td class="p-3">{{ isListening }}</td>
      </tr>
      <tr class="border-b dark:border-gray-300 dark:bg-gray-50">
        <td class="p-3">isFinal</td>
        <td class="p-3">{{ isFinal }}</td>
      </tr>
    </tbody>
  </table>

  <p>{{ error }}</p>
  <p>{{ recognition }}</p>

  <button
    type="button"
    @click="start()"
    :disabled="!isSupported || isListening"
    class="rounded border px-8 py-3 font-semibold dark:border-gray-800 dark:text-gray-800"
  >
    Start
  </button>
  <button
    type="button"
    @click="stop()"
    :disabled="!isListening"
    class="rounded border px-8 py-3 font-semibold dark:border-gray-800 dark:text-gray-800"
  >
    Stop
  </button>
</template>
<script lang="ts" setup>
const lang = shallowRef("ja-JP");
const {
  isSupported,
  isListening,
  isFinal,
  result,
  start,
  stop,
  error,
  recognition,
} = useSpeechRecognition({
  lang,
  continuous: true,
});
</script>
