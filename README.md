# Portfolio (Astro)

経歴とポートフォリオをまとめた個人サイトです。Astroで作り、GitHub Pagesで公開します。

## ローカルで動かす

```bash
npm install
npm run dev     # http://localhost:4321
```

## 中身を書き換える場所

| やりたいこと | ファイル |
|---|---|
| 名前・所属・自己紹介・リンク・スキル・経歴・実績 | `src/data/profile.ts` |
| プロジェクトを追加・編集 | `src/content/projects/*.md`（1つのプロジェクトにつき1ファイル） |
| 画像（アバター・スクリーンショット） | `public/` に置き、`/avatar.jpg` のようなパスで指定 |
| 公開URL | `astro.config.mjs` の `site` / `base` |

### プロジェクトの書き方

```md
---
title: 作ったもの
summary: 1行の説明
tags: [Python, FastAPI]
date: 2025-08-01
image: /projects/myapp.png   # 任意
repo: https://github.com/...  # 任意
demo: https://...             # 任意
featured: true                # 任意。true にすると先頭に表示
---

## 概要
...
```

`sample-*.md` は見本なので、不要になったら削除してください。

## GitHub Pagesで公開する

1. GitHubでリポジトリ `<ユーザー名>.github.io` を作る（Public）
2. `astro.config.mjs` の `site` を `https://<ユーザー名>.github.io` にする
3. push する
   ```bash
   git init && git add . && git commit -m "init portfolio"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/<ユーザー名>.github.io.git
   git push -u origin main
   ```
4. リポジトリの **Settings → Pages → Build and deployment → Source** で **GitHub Actions** を選ぶ
5. 数分待つと `https://<ユーザー名>.github.io` で公開される（以降は push するたびに自動で更新されます）
