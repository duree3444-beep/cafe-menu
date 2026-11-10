import "./globals.css";

export const metadata = {
  title: "루나 카페 메뉴판",
  description: "React 실습",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
