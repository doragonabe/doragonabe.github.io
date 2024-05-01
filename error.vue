<template>
  <div>
    <div
      id="page"
      class="home"
    >
      <div
        id="main"
        class="pt-16"
      >
        <section v-if="error?.statusCode === 403">
          <h2 class="p-7 pl-14">ブラウザサポート対象外エラー</h2>
          <div class="pt-5">
            <p>
              ブラウザのバージョンが低い、もしくはサポート対象外のブラウザを使用しています。
            </p>
          </div>
        </section>
        <section v-else>
          <h2 class="p-7 pl-14">システムエラー</h2>
          <div class="pt-5">
            <p>システムエラーが発生しました。</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const error = useError();
</script>
