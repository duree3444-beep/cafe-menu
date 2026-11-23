import OrderButton from '@/components/OrderButton';
import LikeButton from '@/components/LikeButton';

export default function MenuCard({
  emoji = '☕', name, price, desc,
  isNew = false,
  soldOut = false,
}) {
  return (
    <div className={soldOut ? 'card soldout' : 'card'}>
      <h3>
        {emoji} {name}
        {isNew && <span className="badge">NEW</span>}
      </h3>
      {soldOut ? (
        <p className="soldout-label">품절</p>
      ) : (
        <p className="price">{price.toLocaleString()}원</p>
      )}
      <p className="desc">{desc}</p>
      <div className="card-actions">
        <OrderButton name={name} soldOut={soldOut} />
        <LikeButton />
      </div>
    </div>
  );
}