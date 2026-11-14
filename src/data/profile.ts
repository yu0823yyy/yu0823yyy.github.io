// =============================================================
// ✏️ ここを書き換えるだけでサイト全体の内容が変わります
//    （プロジェクトは src/content/projects/ に .md を追加）
// =============================================================

export const profile = {
  name: 'あなたの名前',
  nameEn: 'Your Name',
  // 例: 「〇〇大学 情報工学科 3年」
  affiliation: '〇〇大学 〇〇学部 〇年',
  // トップに出る一言（キャッチコピー）
  tagline: 'アルゴリズムと機械学習が好きな学生エンジニアです。',
  // About欄の自己紹介（段落ごとに配列で）
  about: [
    'ここに自己紹介を書きます。何に興味があって、どんなことをしてきたかを2〜3文で。',
    'インターンで挑戦したいこと・身につけたいことも書くと、採用担当に伝わりやすくなります。',
  ],
  // アバター画像: public/ に画像を置いて '/avatar.jpg' のように指定。空なら頭文字を表示
  avatar: '',
  location: '東京',
  email: 'you@example.com',
};

// 空文字のリンクは表示されません
export const links = {
  github: 'https://github.com/YOUR-GITHUB-USERNAME',
  x: '',
  wantedly: '',
  atcoder: '',
  kaggle: '',
  zenn: '',
};

export const skills: { category: string; items: string[] }[] = [
  { category: '言語', items: ['C++', 'Python', 'TypeScript'] },
  { category: '機械学習', items: ['PyTorch', 'scikit-learn', 'LightGBM'] },
  { category: 'Web / その他', items: ['Astro', 'Git / GitHub', 'Linux'] },
];

// 経歴（新しい順に書くのがおすすめ）
export const timeline: { period: string; title: string; detail?: string }[] = [
  { period: '2024.04 – 現在', title: '〇〇大学 〇〇学部', detail: '〇〇研究室 / 〇〇を専攻' },
  { period: '2023.xx', title: '〇〇を始める', detail: 'きっかけや取り組んだことを一言で' },
  { period: '2021.04 – 2024.03', title: '〇〇高校' },
];

// 実績・数字（レーティングやコンペ順位など）
export const achievements: { label: string; value: string; note?: string }[] = [
  { label: 'AtCoder (Algorithm)', value: '— ', note: '最高レート' },
  { label: 'AtCoder (Heuristic)', value: '— ', note: '最高レート' },
  { label: 'Kaggle', value: '— ', note: '最高順位 / メダル' },
];
