const menus = [
  { id: 1, emoji: '☕', name: '아메리카노', price: 4500, category: 'coffee',
    desc: '진한 에스프레소에 물을 더한 기본 커피', isNew: false, soldOut: false },
  { id: 2, emoji: '🥛', name: '카페라떼', price: 5000, category: 'coffee',
    desc: '부드러운 우유와 에스프레소', isNew: false, soldOut: false },
  { id: 3, emoji: '🍯', name: '꿀 라떼', price: 5500, category: 'coffee',
    desc: '국내산 꿀을 넣은 달콤한 라떼', isNew: true, soldOut: false },
  { id: 4, emoji: '🍋', name: '레몬에이드', price: 5500, category: 'drink',
    desc: '생레몬을 직접 짜서 만든 에이드', isNew: false, soldOut: false },
  { id: 5, emoji: '🍑', name: '복숭아 아이스티', price: 5000, category: 'drink',
    desc: '달콤한 복숭아 향 아이스티', isNew: false, soldOut: true },
  { id: 6, emoji: '🍰', name: '치즈케이크', price: 6500, category: 'dessert',
    desc: '꾸덕한 뉴욕 스타일 케이크', isNew: false, soldOut: false },
  { id: 7, emoji: '🥐', name: '크루아상', price: 4000, category: 'dessert',
    desc: '버터 향 가득한 바삭한 빵', isNew: true, soldOut: false },
  { id: 8, emoji: '🍪', name: '초코 쿠키', price: 3000, category: 'dessert',
    desc: '초코칩이 듬뿍 들어간 쿠키', isNew: false, soldOut: true },
];

export default menus;