'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [count, setCount] = useState(0);   // [현재 값, 바꾸는 함수]

  function handleClick() {
    setCount(count + 1);                   // 값 변경 → 다시 렌더링
  }

  return (
    <button className="like-btn" onClick={handleClick}>
      {count === 0 ? '🤍' : '❤️'} {count}
    </button>
  );
}