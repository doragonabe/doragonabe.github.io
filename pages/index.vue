<template>
    <div>
        <section>
            <h2>トップ</h2>
            <EyeCatchMenu/>
        </section>
        <section id="new">
            <h2>更新情報・お知らせ</h2>
            <div class="h2_contents">
                <dl>
                    <dt>2022/06/18</dt>
                    <dd>
                        <span>ページ構成をVue.jsに変更</span>
                        <a href="https://github.com/doragonabe/doragonabe.github.io/compare/5fde8318920d0dd67297f684704ac0a45730bb23%E2%80%A6b52b4158ddc941e75da9cf02ff9ac3bbafb88f47"
                           rel="noopener noreferrer" target="_blank">github差分</a>
                        <span class="newicon">NEW</span>
                    </dd>
                </dl>
                <dl>
                    <dt>2022/01/01</dt>
                    <dd>
                        <span>Q&Aページ更新</span>
                        <a href="https://github.com/doragonabe/doragonabe.github.io/compare/e425fb2614fee376f09b32289e02ad84ab2b13a3%E2%80%A62e6500ea1762ece0cc360e56e6411ca07dd4819f"
                           rel="noopener noreferrer" target="_blank">github差分</a>
                    </dd>
                </dl>
                <dl>
                    <dt>2022/01/01</dt>
                    <dd>
                        <span>negaiサーバー紹介サイト限定URL公開</span>
                    </dd>
                </dl>
            </div>
        </section>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'app',
});
</script>
