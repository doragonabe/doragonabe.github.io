FROM node:23-bullseye

# グローバルに pnpm を入れる
RUN npm install -g pnpm

# Playwright の依存ライブラリをまとめて入れる
RUN apt-get update && \
  apt-get install -y --no-install-recommends \
  libnss3 libatk-bridge2.0-0 libgtk-3-0 libxss1 libasound2 libc++1 libgbm1 && \
  rm -rf /var/lib/apt/lists/*

# Playwright のブラウザバイナリをダウンロード
#RUN pnpm dlx playwright install --with-deps

#RUN pnpm exec playwright install --with-deps
#RUN pnpm exec playwright install chrome

# 作業ディレクトリ
WORKDIR /app

# デフォルトでテスト実行する
#ENTRYPOINT ["bash", "-lc", "pnpm run test:e2e"]
#CMD ["bash"]
