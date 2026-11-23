'use client';

import { useState } from 'react';

const GOAL = 10;

export default function StampCard() {
  const [stamps, setStamps] = useState([]);       // 배열 state
  const isFull = stamps.length >= GOAL;

  function addStamp() {
    setStamps([...stamps, '☕']);                  // 새 배열로 교체 (push ✗)
  }

  function removeLast() {
    setStamps(stamps.slice(0, -1));               // 마지막 하나 뺀 새 배열
  }

  function reset() {
    setStamps([]);
  }

  return (
    <section className="stamp-card">
      <h2>🎟 스탬프 쿠폰 ({stamps.length}/{GOAL})</h2>

      <div className="stamps">
        {stamps.map((stamp, index) => (
          <span key={index}>{stamp}</span>
        ))}
      </div>

      {stamps.length === 0 && <p className="empty">아직 스탬프가 없습니다.</p>}
      {isFull && <p className="notice">🎉 무료 음료 1잔 쿠폰이 완성되었습니다!</p>}

      <button onClick={addStamp} disabled={isFull}>스탬프 찍기</button>
      <button onClick={removeLast} disabled={stamps.length === 0}>하나 취소</button>
      <button onClick={reset}>초기화</button>
    </section>
  );
}