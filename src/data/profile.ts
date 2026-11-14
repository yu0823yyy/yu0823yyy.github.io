export const profile = {
  name: '藤村優',
  nameEn: 'Yu Fujimura',
  affiliation: '釧路工業高等専門学校 3年情報工学分野',
  tagline: '数学，アルゴリズム，AI/LLMが好きな大学編入を目指す学生です．',
  about: [
    '',
  ],
  // アバター画像: public/ に画像を置いて '/avatar.jpg' のように指定。空なら頭文字を表示
  avatar: '',
  location: '釧路',
  email: 'tengcunyou28@gmail.com',
};

// 空文字のリンクは表示されません
export const links = {
  github: 'https://github.com/yu0823yyy',
  x: '',
  wantedly: '',
  atcoder: 'https://atcoder.jp/users/yu_0823',
};

export const skills: { category: string; items: string[] }[] = [
  { category: '言語', items: ['C++', 'Python'] },
  { category: '数学', items: ['Linear Algebra', 'Calculus'] },
  { category: 'Web / その他', items: ['Git / GitHub'] },
];

export const timeline: { period: string; title: string;}[] = [
  { period: '2024.04', title: '釧路工業高等専門学校 入学'},
  { period: '2024.10', title: 'U16プログラミングコンテスト釧路大会 優勝' },
  { period: '2024.11', title: 'U16プログラミングコンテスト北海道大会 第3位' },
  { period: '2025.10', title: 'AtCoder Algorithm 初参加' },
  { period: '2026.05', title: 'TOEIC 605点取得' },
  { period: '2026.10', title: '全国高専プログラミングコンテスト競技部門 第7位' },
  { period: '2026.11', title: '基本情報技術者試験 合格' },
  { period: '2026.11 - 現在', title: 'TOEIC, LLM, 数学を学び続けています' },
];

export const achievements: { label: string; value: string; note?: string }[] = [
  { label: 'AtCoder (Algorithm)', value: '506', note: '最高レート: 506(2026.11.14時点)' },
];
