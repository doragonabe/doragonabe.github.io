#!/usr/bin/env bash

# ===== 設定 =====
EXT_JSON_FILE=".vscode/extensions.json"
DISABLE_NON_RECOMMENDED=false

# ===== 前提チェック =====
if [ ! -f "$EXT_JSON_FILE" ]; then
  echo "❌ $EXT_JSON_FILE が見つかりません"
  exit 1
fi

if ! command -v code >/dev/null 2>&1; then
  echo "❌ VSCode CLI (code) コマンドが見つかりません"
  echo "VSCode を開き Command Palette で 'Shell Command: Install 'code' command in PATH' を実行してください"
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "❌ jq コマンドが見つかりません（brew install jq 等でインストールしてください）"
  exit 1
fi

# ===== JSONC（コメント付きJSON）→ 純JSON に正規化 =====
# 1) // コメント除去  2) 行末CR除去  3) 構文チェック
CLEANED_JSON="$(sed -E 's@//.*$@@' "$EXT_JSON_FILE" | tr -d '\r')"
if ! jq -e . >/dev/null 2>&1 <<<"$CLEANED_JSON"; then
  echo "❌ $EXT_JSON_FILE が不正なJSONです（コメントや構文を確認してください）"
  exit 1
fi

# ===== 推奨拡張機能を取得 =====
# .recommendations が無い/空でも安全に動くよう []? を使用
mapfile -t recommended < <(jq -r '.recommendations[]? // empty' <<<"$CLEANED_JSON")

if [ ${#recommended[@]} -eq 0 ]; then
  echo "❌ extensions.json に recommendations がありません"
  exit 1
fi

echo "📦 推奨拡張機能:"
printf '  %s\n' "${recommended[@]}"

# ===== 現在インストール済みの拡張機能を取得 =====
mapfile -t installed < <(code --list-extensions)

# ===== 推奨外は無効化（オプション） =====
if [ "$DISABLE_NON_RECOMMENDED" = true ]; then
  for ext in "${installed[@]}"; do
    if [[ ! " ${recommended[*]} " =~ " $ext " ]]; then
      echo "🚫 無効化: $ext"
      code --disable-extension "$ext"
    fi
  done
fi

# ===== 推奨は有効化（未インストールならインストール） =====
for ext in "${recommended[@]}"; do
  if [[ ! " ${installed[*]} " =~ " $ext " ]]; then
    echo "⬇️ インストール: $ext"
    code --install-extension "$ext"
  fi
  echo "✅ 有効化: $ext"
  code --enable-extension "$ext"
done

echo "✨ 完了しました"
