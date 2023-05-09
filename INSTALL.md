## 初期構築
#### 使用コマンド
```
yarn create vite vite-project --template vue-ts

cd vite-project
yarn
yarn add -D vue-router
yarn add vuex@next
yarn add swiper
yarn add -D vite-plugin-checker
```

### 開発メモ
#### 初期設定
1. /src/vite-env.d.ts に`*.vue`を追加することで、TypeScriptに.vueファイルを認識させる
2. /.vscode 削除 (不要)

#### vue-router設定
1. /index.html を /src/index.html に移動
2. /vite.config.ts 修正
3. src/router.ts 作成
4. main.ts 修正
5. App.vue 修正
