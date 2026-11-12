<img width="1899" height="946" alt="image" src="https://github.com/user-attachments/assets/ae6574fb-72d3-4487-a753-f44199807a91" />

# 개인 포트폴리오 **(https://lsch.co.kr/)**

## 프로젝트 소개

백엔드 개발자 이상철의 **개인 포트폴리오 웹사이트**입니다.

### 목표
- 깔끔하고 직관적인 UI/UX로 개발자의 역량과 프로젝트를 효과적으로 전달
- 반응형 디자인을 통한 모든 디바이스에서의 최적화된 경험 제공
- 방문자가 쉽게 연락하고 소통할 수 있는 인터랙티브한 포트폴리오 구현

### 주요 기능

| **기술 스택 소개** | **프로젝트 쇼케이스** | **소개 섹션** |
|:---:|:---:|:---:|
| 보유 기술과 숙련도 시각화 | 진행한 프로젝트들의 상세 정보 제공 | 개발자 소개 및 주요 역량 표시 |
| <img width="250" alt="image" src="https://github.com/user-attachments/assets/486a861a-f237-4f3b-8aa2-980442a55c38" />|<img width="250" alt="image" src="https://github.com/user-attachments/assets/1f7ded09-69d7-48c3-946b-c49313dc50ae" /> | <img width="250" alt="image" src="https://github.com/user-attachments/assets/972d127a-4b81-4c8a-b6d5-f5109be0205f" />|
| • 사용 기술 스택 표시<br>• 라이브 데모 및 GitHub 링크 | • 프론트엔드 · 백엔드 기술 스택<br>• 숙련도 레벨 표시 | • 프로필 정보  요약<br>• 핵심 강점 강조<br>• SNS 및 연락처 링크| 
| **연락하기** |**반응형 디자인** |
| 간편한 연락 방법 제공 | 모든 디바이스 최적화  |
| <img width="250" alt="image" src="https://github.com/user-attachments/assets/bc23878b-df35-4eab-86bb-89622d720803" /> |<img width="250" alt="image" src="https://github.com/user-attachments/assets/5927eda1-6b02-4deb-8fe3-eea202b170aa" />|
| • 이메일<br>• 연락처<br>• GitHub 연결 | • 모바일, 태블릿, 데스크톱 대응<br>• 유연한 레이아웃<br>• 터치 친화적 인터페이스 

---

## 기술 스택

### Frontend
- **React 19.1.1**: 사용자 인터페이스 구축
- **Tailwind CSS 3.4.17:**: 유틸리티 기반 스타일링
- **Lucide React 0.541.0:**: 아이콘 라이브러리
- **Swiper 11.2.10 3.4.17:**:  터치 슬라이더 및 캐러셀
### 개발 도구
- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅
### 배포 및 호스팅
- **AWS SE** : 프론트엔드 배포
- **GitHub**: 소스 코드 관리

---

## 설치 및 실행 방법

### 1. 저장소 클론
```bash
git clone https://github.com/cheul-95/react-portfolio.git
cd react-portfolio
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

### 4. 빌드 및 배포
```bash
# 타입 체크 및 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 린트 검사
npm run lint
```

---

## 폴더 구조
```
react-portfolio/
├── public/                     # 정적 파일 (이미지, 문서 등)
└── src/                        # 소스 코드
    ├── components/             # 재사용 가능한 컴포넌트
    │   ├── common/             # 공통 컴포넌트
    │   ├── assets/             # 정적 리소스 (아이콘, 로고 등)
    │   ├── hooks/              # 커스텀 훅 
    │   ├── layout/             # 레이아웃 컴포넌트
    │   └── sections/           # 섹션별 컴포넌트
    └── styles/                 # 전역 스타일
```

---

## URL 구조

| 경로 | 설명 |
|------|------|
| `/` | 메인 페이지 (홈) |
| `/#about` | 소개 섹션 |
| `/#projects` | 프로젝트 섹션 |
| `/#skills` | 기술 스택 섹션 |
| `/#contact` | 연락하기 섹션 |

> 💡 Single Page Application(SPA) 구조로 해시 라우팅을 통해 섹션 간 부드러운 스크롤 이동을 제공합니다.

---

## 연락처

- **이메일**: lsch9040@naver.com
- **GitHub**: [github.com/cheul-95](https://github.com/cheul-95)
- **포트폴리오**: [https://lsch.co.kr/](https://lsch.co.kr/)

---

**© 2025 이상철. All rights reserved.**
