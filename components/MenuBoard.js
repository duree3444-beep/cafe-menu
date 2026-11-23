'use client';

import { useState } from 'react';
import MenuCard from '@/components/MenuCard';

const categories = [
  { key: 'all', label: '전체' },
  { key: 'coffee', label: '☕ 커피' },
  { key: 'drink', label: '🧃 음료' },
  { key: 'dessert', label: '🍰 디저트' },
];

export default function MenuBoard({ menus }) {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('all');
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  // 파생 데이터: state 2개(keyword, category)로부터 계산
  const filtered = menus
    .filter((menu) => category === 'all' || menu.category === category)
    .filter((menu) => menu.name.includes(keyword.trim()))
    .filter((menu) => !onlyAvailable || !menu.soldOut);

  return (
    <section>
      <input
        className="search"
        type="text"
        placeholder="메뉴 이름을 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={category === cat.key ? 'tab active' : 'tab'}
            onClick={() => setCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <label className="only-available">
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(e) => setOnlyAvailable(e.target.checked)}
        />{' '}
        주문 가능한 메뉴만 보기
      </label>

      <p>검색 결과 {filtered.length}개</p>

      {filtered.length === 0 ? (
        <p className="empty">조건에 맞는 메뉴가 없습니다.</p>
      ) : (
        <div className="menu-grid">
          {filtered.map((menu) => (
            <MenuCard key={menu.id} {...menu} />
          ))}
        </div>
      )}
    </section>
  );
}