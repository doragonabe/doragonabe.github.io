<template>
  <section>
    <h2>独自レシピ</h2>

    <EyeCatchMenu></EyeCatchMenu>
  </section>

  <section>
    <h2>レシピ一覧</h2>

    <div class="h2_contents">
      <h3>バンドル</h3>
      <div class="h3_contents">
        <p>
          <span>1.19のバージョン時点では、アイテムID自体は存在するものの、</span><br>
          <span>レシピが実装されていないため作りました。</span>
        </p>
        <Bundle></Bundle>
      </div>

      <h3>エンチャントの瓶</h3>
      <div class="h3_contents">
        <p>
          <span>経験値を10消費して、エンチャントの瓶を作ることができます。</span>
        </p>
        <XpBottle></XpBottle>
      </div>

      <h3>牛肉</h3>
      <div class="h3_contents">
        <p>ゾンビ肉を焼くと、40%の確率で牛肉になります。</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import EyeCatchMenu from '../components/EyeCatchMenu.vue';
import Bundle from '../components/recipes/Bundle.vue';
import XpBottle from '../components/recipes/XpBottle.vue';

export default {
  name: 'test',
  components: {
    EyeCatchMenu,
    Bundle,
    XpBottle,
  },
};
</script>
