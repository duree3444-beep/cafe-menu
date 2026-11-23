# Cafe Menu

Next.js(App Router) 기반 카페 메뉴 프로젝트입니다.

## 요구 사항

- [Node.js](https://nodejs.org/) 20.9 이상 (LTS 권장)
- npm (Node.js 설치 시 함께 설치됨)
- Git

## 클론 후 실행 방법

```bash
# 1. 저장소 클론
git clone https://github.com/duree3444-beep/cafe-menu.git

# 2. 프로젝트 폴더로 이동
cd cafe-menu

# 3. 의존성 설치
npm install

# 4. 개발 서버 실행
npm run dev
```

실행 후 브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속하세요.

## 프로덕션 빌드 / 실행

```bash
npm run build
npm run start
```

## 사용 가능한 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 (http://localhost:3000) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드된 앱 실행 |
| `npm run lint` | ESLint 검사 |

## 프로젝트 구조 (수업 시간에 추가/수정한 파일)

```
cafe-menu/
├── app/
│   ├── layout.js          # 전체 레이아웃 (lang="ko", 제목 "루나 카페 메뉴판")
│   ├── page.js            # 메인 페이지: 스탬프 카드 + 메뉴판
│   └── globals.css        # 전역 스타일 (카드, 탭, 검색창, 버튼 등)
├── components/
│   ├── MenuBoard.js       # 검색 / 카테고리 탭 / 주문 가능한 메뉴만 보기 필터
│   ├── MenuCard.js        # 메뉴 하나를 카드로 표시
│   ├── Section.js         # 제목 + 카드 묶음 레이아웃
│   ├── OrderButton.js     # 주문하기 버튼
│   ├── LikeButton.js      # 좋아요 버튼
│   └── StampCard.js       # 스탬프 적립 카드
└── data/
    └── menus.js           # 메뉴 데이터 (8개)
```

| 파일 | 설명 |
| --- | --- |
| `app/page.js` | `StampCard`와 `MenuBoard`를 조합해 화면을 구성하고 `data/menus.js`를 전달 |
| `components/MenuBoard.js` | state `keyword`, `category`, `onlyAvailable`로 메뉴를 필터링하고 검색 결과 개수를 표시. 결과가 없으면 안내 문구 출력 |
| `components/MenuCard.js` | props `emoji`, `name`, `price`, `desc`, `isNew`, `soldOut`을 받아 카드 출력. NEW 뱃지, 품절 표시, 가격 천 단위 쉼표 처리 |
| `components/Section.js` | props `title`, `children`을 받아 제목과 `.menu-grid` 안에 카드를 배치 |
| `components/OrderButton.js` | 클릭 시 주문 접수 알림. 품절이면 비활성화 |
| `components/LikeButton.js` | `useState`로 좋아요 횟수를 증가 |
| `components/StampCard.js` | 배열 state로 스탬프를 적립 (10개 목표) |
| `data/menus.js` | 메뉴 목록(id, emoji, name, price, category, desc, isNew, soldOut) |
| `app/layout.js` | 공통 `<html>`/`<body>`와 metadata 설정 |
| `app/globals.css` | 전역 CSS |

## 기술 스택

- Next.js 16
- React 19
