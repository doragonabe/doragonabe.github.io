# りーどみー

## URL

<https://doragonabe.github.io>

## 開発手順

### 前提

- node.jsがインストールされていること

### 開発用コマンド

#### mise

```bash
mise i
```

#### ライブラリインストール(初回のみ)

```bash
pnpm install
```

#### ローカルサーバー立ち上げ(リアルタイム更新)

```bash
pnpm run dev
```

#### プレビュー用サーバー立ち上げ

```bash
pnpm run build
pnpm run preview
```

#### ライブラリ更新

#### Nuxt更新

```bash
pnpx nuxi@latest upgrade --force
```

#### pnpm 更新

```bash
pnpm upgrade
```

#### ライブラリ更新(最新版に強制)

```bash
pnpm upgrade --latest
```
