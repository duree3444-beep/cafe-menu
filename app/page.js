import MenuCard from "@/component/MenuCard";
import Section from "./section";

export default function Home() {
  return (
    <main>
      <h1>☕루나 카페</h1>
      <p>오늘의 메뉴를 소개합니다.</p>
      <Section title="오늘의 추천">
        <MenuCard name="아메리카노" price={4500} desc="진한 에스프레소에 물을 탄 아메리카노"/>
        <MenuCard emoji="🥛" name="카페라떼" price={5500} desc="부드러운 우유와 에스프레소"/>
        <MenuCard emoji="🍰" name="치즈케이" price={6500} desc="꾸덕한 뉴욕 스타일 케이크"/>
      </Section>
    </main>
  );
}
