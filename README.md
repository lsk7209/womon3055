# womon3055

나이스우먼 - 30~55세 여성 건강 파트너

## 프로젝트 소개

여성 건강 자가진단 및 정보 제공 플랫폼입니다.

### 주요 기능

- 🔍 **5가지 건강 진단 도구**
  - 호르몬 밸런스 파인더
  - 수면 질 테스트
  - 스트레스·번아웃 테스트
  - 체형 나이 측정기
  - 영양소 결핍 분석기

- 📚 **건강 가이드**
  - 호르몬 기초 지식
  - 30대/40대/50대 건강 가이드
  - 수면, 스트레스, 영양 가이드

- 📝 **건강 블로그**
  - 전문가 건강 정보
  - 실용적인 건강 팁

- 🔎 **검색 & 북마크**
  - 전체 콘텐츠 검색
  - 즐겨찾기 기능

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Charts**: Recharts

## 시작하기

### 설치

```bash
npm install
```

### 환경 변수 설정

`.env.local.example` 파일을 `.env.local`로 복사하고 필요한 값을 입력하세요:

```bash
cp .env.local.example .env.local
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── tools/             # 진단 도구 페이지
│   ├── guide/             # 가이드 페이지
│   ├── blog/              # 블로그 페이지
│   └── ...
├── components/            # React 컴포넌트
│   ├── ui/               # UI 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   └── calculator/       # 진단 도구 컴포넌트
└── lib/                  # 유틸리티 및 설정
    ├── config.ts         # 사이트 설정
    ├── storage.ts        # 로컬 스토리지 관리
    └── bookmark.ts       # 북마크 관리
```

## SEO & Analytics

- ✅ sitemap.xml
- ✅ robots.txt
- ✅ JSON-LD 구조화 데이터
- ✅ Open Graph 메타 태그
- ✅ PWA 지원 (manifest.json)
- ✅ Google Analytics 통합

## 배포

이 프로젝트는 Vercel, Netlify, Cloudflare Pages 등에 배포할 수 있습니다.

### Vercel 배포

```bash
vercel
```

## 라이선스

MIT

## 문의

문의사항이 있으시면 [문의 페이지](/contact)를 이용해주세요.
