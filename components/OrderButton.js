'use client';

export default function OrderButton({ name, soldOut = false }) {
  function handleClick() {
    alert(`${name} 주문이 접수되었습니다!`);
  }

  return (
    <button className="order-btn" onClick={handleClick} disabled={soldOut}>
      {soldOut ? '품절' : '주문하기'}
    </button>
  );
}