import menus from '@/data/menus';
import MenuCard from '@/components/MenuCard';
import Section from '@/components/Section';
import StampCard from '@/components/StampCard';
import MenuBoard from '@/components/MenuBoard';

const categories = [
  { key: 'coffee', label: '☕ 커피' },
  { key: 'drink', label: '🧃 음료' },
  { key: 'dessert', label: '🍰 디저트' },
  { key: 'bakery', label: '🥖 베이커리' },
];

export default function Home() {

  return (
    <main>
      <h1>☕ 루나 카페</h1>
      <StampCard /> 
      <MenuBoard menus={menus} />
    </main>
  );
}