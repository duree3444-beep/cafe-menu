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
│   ├── layout.js        # 전체 레이아웃 (lang="ko", 제목 "루나 카페 메뉴판")
│   ├── page.js          # 메인 페이지: 루나 카페 제목과 오늘의 추천 메뉴 3개
│   ├── section.js       # Section 컴포넌트: 제목(title)과 메뉴 카드 묶음(children)
│   └── globals.css      # 전역 스타일 (카드, 메뉴 그리드 등)
└── component/
    └── MenuCard.js      # MenuCard 컴포넌트: 메뉴 하나를 카드로 표시
```

| 파일 | 설명 |
| --- | --- |
| `app/page.js` | `Section`과 `MenuCard`를 조합해 메뉴 화면을 구성 |
| `app/section.js` | props `title`, `children`을 받아 `<h2>`와 `.menu-grid` 안에 카드를 배치 |
| `component/MenuCard.js` | props `emoji`(기본값 ☕), `name`, `price`, `desc`를 받아 카드 출력. 가격은 `toLocaleString()`으로 천 단위 쉼표 표시 |
| `app/layout.js` | 페이지 공통 `<html>`/`<body>`와 metadata 설정 |
| `app/globals.css` | 전역 CSS |

## 기술 스택

- Next.js 16
- React 19
