# Next.js 14 프로젝트

이 프로젝트는 Next.js 14를 사용한 웹 애플리케이션입니다.

## 기능

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- NextAuth.js 인증
- ESLint & Prettier

## 시작하기

### 필수 조건

- Node.js 18.17 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
```

### 환경 변수 설정

`.env` 파일을 프로젝트 루트에 생성하고 다음 변수들을 설정하세요:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

### 빌드

```bash
npm run build
# 또는
yarn build
```

### 프로덕션 실행

```bash
npm run start
# 또는
yarn start
```

## 프로젝트 구조

```
src/
├── app/          # App Router 페이지
├── components/   # 재사용 가능한 컴포넌트
├── styles/       # 전역 스타일
└── auth.ts       # 인증 관련 설정
```

## 라이센스

MIT