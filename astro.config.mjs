// @ts-check
import { defineConfig } from 'astro/config';

// ✏️ GitHubのユーザー名に書き換えてください
// リポジトリ名を「<ユーザー名>.github.io」にする場合は base は '/' のままでOK。
// 別名のリポジトリ（例: portfolio）にする場合は base: '/portfolio' にします。
export default defineConfig({
  site: 'https://YOUR-GITHUB-USERNAME.github.io',
  base: '/',
});
