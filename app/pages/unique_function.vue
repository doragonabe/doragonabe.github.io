<template>
  <Title>独自機能</Title>

  <section class="mb-3 pt-5">
    <H2 class="mb-5">メニュー</H2>
    <EyeCatchMenu />
  </section>

  <section
    id="main"
    class="mb-3 pt-5"
  >
    <H2 class="mb-5">独自機能</H2>
    <SubSection
      title="MyPet"
      class="mb-2"
    >
      <p>
        <span>リードで敵MOBや動物に止めを刺すとそのMOBが仲間になるよ</span
        ><br />
        <span>仲間にならないMOBもいるよ</span>
      </p>
    </SubSection>

    <SubSection
      title="Skript"
      class="mb-2"
    >
      <p>
        <span>javaのコードを書かなくてもプラグインが作れる</span><br />
        <span
          >スクリプト言語なので作れるものに限界はあるが、使いこなせればかなり自由に機能を拡張できる。</span
        >
      </p>
      <div>
        <h4>作った機能</h4>
        <ul>
          <li>
            <hr />
            <table>
              <caption></caption>
              <tbody>
                <tr>
                  <th>便利つるはし</th>
                </tr>
                <tr>
                  <td>
                    つるはしを右クリックで１×２マスのブロックを掘る機能に切り替えられる
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>発動条件</span>
                    <ol>
                      <li>
                        <span
                          >つるはしを右クリックして機能がオンになっていること</span
                        >
                      </li>
                      <li>
                        <span
                          >破壊したブロックが発動対象のブロックであること</span
                        ><br />
                        <span>(石ブロックなど)</span>
                      </li>
                      <li>
                        <span
                          >正方形の高さのブロックの上に、自プレイヤーが立っていること</span
                        ><br />
                        <span
                          >(ハーフブロック、チェスト、ソウルサンドなどのブロックや、空中では発動しない)</span
                        >
                      </li>
                      <li>
                        <span>視点が正面にあるブロックを破壊すること</span>
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Mermaid
                      v-html="
                        `
                          sequenceDiagram
                          クライアント->>Skript: ブロックを破壊
                          Skript-->Skript: 変数がtrueかどうか
                          Skript-->Skript: トリガーのブロックからy-1のブロックを削除
                          Skript-->Skript: 削除したブロックをドロップ
                          Skript->>クライアント: 処理終了
                        `
                      "
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <hr />
            <table>
              <caption></caption>
              <tbody>
                <tr>
                  <th>リード機能拡張</th>
                </tr>
                <tr>
                  <td>
                    リードを右クリックで様々な便利機能を呼び出すGUIを表示する
                  </td>
                </tr>
                <tr>
                  <td>
                    機能一覧
                    <ol>
                      <li>
                        MyPetプラグインでよく使用されるコマンドをクリック一つで呼び出せる
                      </li>
                      <li>作業台や、エンダーチェストのGUIを開くことができる</li>
                      <li>
                        登録されているポイントにテレポートすることができる
                      </li>
                      <li>自分のホームポイントを設定できる</li>
                      <li>
                        自分や他プレイヤーが設定したホームポイントにテレポートできる
                      </li>
                      <li>
                        アイテムを拾った際に、自動で共有チェストへ転送する機能が有効にできる
                      </li>
                      <li>共有チェストからアイテムを取り出すことができる</li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <hr />
            <table>
              <caption></caption>
              <tbody>
                <tr>
                  <th>装飾用かまど</th>
                </tr>
                <tr>
                  <td>
                    通常のかまどを装飾用に常時燃えている状態にさせることが出来ます。
                  </td>
                </tr>
                <tr>
                  <td>
                    使い方
                    <ol>
                      <li>
                        ファイヤーチャージを持って消灯状態のかまどに向かって右クリック
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <hr />
            <table>
              <caption></caption>
              <tbody>
                <tr>
                  <th>クリエ飛行</th>
                </tr>
                <tr>
                  <td>
                    時間制限ありでクリエイティブモードと同じ飛行を行うことが出来ます。
                  </td>
                </tr>
                <tr>
                  <td>
                    使い方
                    <ol>
                      <li>
                        <span
                          >羽を持った状態で右クリックすると、５分間クリエ飛行が可能になる</span
                        >
                      </li>
                      <li>羽は複数使用で効果時間がプラスで延長</li>
                      <li>
                        <span
                          >落下速度低下のエフェクトが切れると効果を失います</span
                        ><br />
                        <span
                          >そのため、時間切れ以外にも牛乳を飲むと効果を解除できます。</span
                        >
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    </SubSection>

    <SubSection
      title="RecipeManager/CustomCrafting"
      class="mb-2"
    >
      <p>
        <router-link to="/original_recipes">独自レシピ</router-link>
        <span>のページにてレシピ一覧参照</span>
      </p>
    </SubSection>

    <SubSection
      title="TreeAssist"
      class="mb-2"
    >
      <p>
        <span
          >斧を持って木の最下層ブロックを破壊するだけで、自動的に木全体が伐採されます。</span
        ><br />
        <span
          >これにより、手作業で木を伐採する手間や時間を省くことができます。</span
        >
      </p>
    </SubSection>
  </section>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "app",
});
</script>
