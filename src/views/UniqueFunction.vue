<template>
    <section>
        <h2>独自機能</h2>
        <EyeCatchMenu></EyeCatchMenu>
    </section>
    <section>
        <h2>使用プラグイン</h2>
        <div class="h2_contents">
            <h3>MyPet</h3>
            <div class="h3_contents">
                <p>
                    <span>リードで敵MOBや動物に止めを刺すとそのMOBが仲間になるよ</span><br>
                    <span>仲間にならないMOBもいるよ</span>
                </p>
            </div>
            <h3>Skript</h3>
            <div class="h3_contents">
                <p>
                    <span>javaのコードを書かなくてもプラグインが作れる</span><br>
                    <span>スクリプト言語なので作れるものに限界はあるが、使いこなせればかなり自由に機能を拡張できる。</span>
                </p>
                <div class="text">
                    <h4>作った機能</h4>
                    <ul style="list-style: none;">
                        <li>
                            <hr>
                            <table>
                                <tr>
                                    <th>便利つるはし</th>
                                </tr>
                                <tr>
                                    <td>つるはしを右クリックで１×２マスのブロックを掘る機能に切り替えられる</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>発動条件</span>
                                        <ol>
                                            <li><span>つるはしを右クリックして機能がオンになっていること</span></li>
                                            <li>
                                                <span>破壊したブロックが発動対象のブロックであること</span><br>
                                                <span>(石ブロックなど)</span>
                                            </li>
                                            <li>
                                                <span>正方形の高さのブロックの上に、自プレイヤーが立っていること</span><br>
                                                <span>(ハーフブロック、チェスト、ソウルサンドなどのブロックや、空中では発動しない)</span>
                                            </li>
                                            <li>
                                                <span>視点が正面にあるブロックを破壊すること</span>
                                            </li>
                                        </ol>
                                    </td>
                                </tr>
                            </table>
                        </li>
                        <li>
                            <hr>
                            <table style="margin-top: 20px;">
                                <tr>
                                    <th>リード機能拡張</th>
                                </tr>
                                <tr>
                                    <td>リードを右クリックで様々な便利機能を呼び出すGUIを表示する</td>
                                </tr>
                                <tr>
                                    <td>
                                        機能一覧
                                        <ol>
                                            <li>MyPetプラグインでよく使用されるコマンドをクリック一つで呼び出せる</li>
                                            <li>作業台や、エンダーチェストのGUIを開くことができる</li>
                                            <li>登録されているポイントにテレポートすることができる</li>
                                            <li>自分のホームポイントを設定できる</li>
                                            <li>自分や他プレイヤーが設定したホームポイントにテレポートできる</li>
                                            <li>アイテムを拾った際に、自動で共有チェストへ転送する機能が有効にできる</li>
                                            <li>共有チェストからアイテムを取り出すことができる</li>
                                        </ol>
                                    </td>
                                </tr>
                            </table>
                        </li>
                        <li>
                            <hr>
                            <table style="margin-top: 20px;">
                                <tr>
                                    <th>装飾用かまど</th>
                                </tr>
                                <tr>
                                    <td>通常のかまどを装飾用に常時燃えている状態にさせることが出来ます。</td>
                                </tr>
                                <tr>
                                    <td>
                                        使い方
                                        <ol>
                                            <li>ファイヤーチャージを持って消灯状態のかまどに向かって右クリック</li>
                                        </ol>
                                    </td>
                                </tr>
                            </table>
                        </li>
                        <li>
                            <hr>
                            <table style="margin-top: 20px;">
                                <tr>
                                    <th>クリエ飛行</th>
                                </tr>
                                <tr>
                                    <td>時間制限ありでクリエイティブモードと同じ飛行を行うことが出来ます。</td>
                                </tr>
                                <tr>
                                    <td>
                                        使い方
                                        <ol>
                                            <li>
                                                <span>羽を持った状態で右クリックすると、５分間クリエ飛行が可能になる</span>
                                            </li>
                                            <li>羽は複数使用で効果時間がプラスで延長</li>
                                            <li>
                                                <span>落下速度低下のエフェクトが切れると効果を失います</span><br>
                                                <span>そのため、時間切れ以外にも牛乳を飲むと効果を解除できます。</span>
                                            </li>
                                        </ol>
                                    </td>
                                </tr>
                            </table>
                        </li>
                    </ul>
                </div>
            </div>
            <h3>RecipeManager/CustomCrafting</h3>
            <div class="h3_contents">
                <p>
                    <router-link to="/original_recipes">独自レシピ</router-link>
                    <span>のページにてレシピ一覧参照</span>
                </p>
            </div>
            <h3>TreeAssist</h3>
            <div class="h3_contents">
                <p>
                    <span>斧を持って木の最下層ブロックを破壊するだけで、自動的に木全体が伐採されます。</span><br>
                    <span>これにより、手作業で木を伐採する手間や時間を省くことができます。</span>
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import EyeCatchMenu from '../components/EyeCatchMenu.vue';
</script>
