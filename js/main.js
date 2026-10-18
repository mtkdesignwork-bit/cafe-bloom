// ===== SPハンバーガーメニューの開閉 =====
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

// 開閉の状態は aria-expanded でも伝える（読み上げソフト向け。×への切り替えにも使う）
const setMenu = (open) => {
  hamburger.setAttribute('aria-expanded', String(open));
  navList.classList.toggle('is-open', open);
};

hamburger.addEventListener('click', () => {
  setMenu(!navList.classList.contains('is-open'));
});

// メニュー内のリンクを押したら閉じる
document.querySelectorAll('.nav-list a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

// Escキーで閉じる
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});

// ===== スクロールしたらヘッダーに影を付ける =====
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.style.boxShadow = '0 2px 16px rgba(61, 43, 31, 0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ===== ページ上部へのスクロールボタン =====
const scrollTopBtn = document.getElementById('scrollTop');

// 300px以上スクロールしたら表示する
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('is-visible', window.scrollY > 300);
});

// 押したらページの一番上へ（動きを減らす設定のときは一瞬で戻る）
scrollTopBtn.addEventListener('click', () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
});
