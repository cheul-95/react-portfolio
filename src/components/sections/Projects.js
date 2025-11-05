import React, { useState } from "react";
import melon from "../assets/images/melon.png";
import Recipe from "../assets/images/Recipe.png";
import Portfolio from "../assets/images/Portfolio.png";
import stock from "../assets/images/stocks.png";
import market from "../assets/images/market.png";
import movie from "../assets/images/movie.png";

const projectsData = [
    {
        id: 1,
        title: "모두의 부엌",
        description: "오늘 저녁 뭐 먹지? 매일 반복되는 고민을 해결하기 위한 레시피 공유 플랫폼입니다.",
        role: "팀 프로젝트 (4인) | 프론트엔드 개발 및 일정 관리",
        achievement: "부트캠프 내 최우수상(대상) 수상",
        details: [
            "Supabase를 활용한 사용자 인증 및 데이터 관리",
            "레시피 CRUD, 검색 및 북마크 기능 구현",
            "좋아요, 댓글, 실시간 인기 순위 시스템 개발",
            "Zustand로 전역 상태 관리 및 Supabase RLS로 데이터 보안 강화",
            "Lazy Loading 적용으로 초기 로딩 속도 최적화",
        ],
        challenges: [
            {
                problem: "React 19 버전과 호환되는 에디터 부재",
                solution: "Lexical Editor를 발견하여 성공적으로 적용, 레시피 작성 UX 개선",
            },
            {
                problem: "팀원 간 일정 조율 및 진행 상황 관리",
                solution: "일정 관리 담당으로 GitHub Projects와 노션을 활용하여 효율적인 협업 환경 구축",
            },
        ],
        image: Recipe,
        tags: ["React", "TypeScript", "Supabase", "Vite", "Zustand", "Lexical"],
        category: "major",
        link: "https://ourkitchen.store/",
        github: "https://github.com/stars-at-daybreak/morningStarRecipe",
    },
    {
        id: 2,
        title: "프론트엔드 포트폴리오",
        description: "프론트엔드 개발자 이상철의 포트폴리오 웹사이트입니다.",
        role: "개인 프로젝트",
        achievement: "실제 운영 중인 개인 포트폴리오 사이트",
        details: [
            "React 19.1.1과 TypeScript로 컴포넌트 기반 SPA 구현",
            "Tailwind CSS를 활용한 반응형 인터랙티브 UI 개발",
            "AWS S3 + CloudFront로 정적 웹사이트 호스팅 구축",
            "Route 53으로 커스텀 도메인(lsch.co.kr) 연결 및 DNS 관리",
            "ACM 인증서를 통한 HTTPS 적용",
            "Vite 번들러로 빠른 빌드 속도 달성",
        ],
        challenges: [
            {
                problem: "AWS S3 정적 웹 호스팅 시 HTTPS 적용 방법 불명확",
                solution: "CloudFront CDN 설정과 ACM 인증서 발급을 통해 HTTPS 적용 및 성능 향상",
            },
            {
                problem: "커스텀 도메인 연결 및 DNS 설정의 복잡성",
                solution:
                    "AWS Route 53을 활용하여 도메인 등록부터 DNS 레코드 설정까지 통합 관리, CloudFront와 연결하여 안정적인 서비스 제공",
            },
        ],
        image: Portfolio,
        tags: ["React", "TypeScript", "Tailwind CSS", "AWS S3", "CloudFront", "Route 53"],
        category: "major",
        link: "https://lsch.co.kr/",
        github: "https://github.com/cheul-95/react-portfolio",
    },
    {
        id: 3,
        title: "주식, 국채 금 시세 조회 사이트",
        description:
            "한국투자증권 API를 활용하여 국내 주식, 국채, 금 시세를 실시간으로 조회하는 데이터 시각화 대시보드입니다.",
        role: "개인 프로젝트",
        achievement: "실시간 데이터 시각화 경험 축적",
        details: [
            "Next.js 15와 TypeScript 5로 SSR/CSR 하이브리드 구현",
            "한국투자증권 OpenAPI 연동으로 실시간 주가 데이터 제공",
            "Recharts로 일봉/주봉/월봉 인터랙티브 차트 구현",
            "Axios로 효율적인 API 통신 처리",
            "Tailwind CSS 4로 모바일/태블릿/PC 반응형 디자인 구축",
            "Vercel 배포 및 CI/CD 파이프라인 구성",
        ],
        challenges: [
            {
                problem: "한국투자증권 API의 복잡한 인증 프로세스와 토큰 관리",
                solution: "Next.js API Routes를 프록시로 활용하여 서버 사이드에서 안전하게 토큰 관리 및 API 호출 처리",
            },
            {
                problem: "대량의 주가 데이터 차트 렌더링 시 성능 저하",
                solution: "Recharts의 데이터 샘플링 기능과 메모이제이션을 활용하여 렌더링 성능 개선",
            },
        ],
        image: stock,
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Axios"],
        category: "major",
        link: "https://korean-stock-app-gamma.vercel.app/",
        github: "https://github.com/cheul-95/korean-stock-app",
    },
    {
        id: 4,
        title: "오픈마켓 서비스",
        description: "위니브 API 제공 오픈마켓 서비스 프로젝트입니다.",
        image: market,
        tags: ["Html", "css", "JavaScript", "scss"],
        category: "minor",
        link: "http://hodu.s3-website.ap-northeast-2.amazonaws.com/",
        github: "https://github.com/cheul-95/openMarketService",
    },
    {
        id: 5,
        title: "영화 추천 랜딩 페이지",
        description: "TMDB API를 활용한 영화 추천 랜딩 페이지입니다.",
        image: movie,
        tags: ["React", "SCSS", "TMDB API"],
        category: "minor",
        link: "http://sclee-cinema.s3-website.ap-northeast-2.amazonaws.com/",
        github: "https://github.com/cheul-95/chinema",
    },
    {
        id: 6,
        title: "멜론차트 랜딩 페이지",
        description: "멜론차트 클론 코딩 프로젝트입니다. 아티스트 포스트 페이지를 구현했습니다.",
        image: melon,
        tags: ["Html", "css", "JavaScript"],
        category: "minor",
        link: "https://melon-wave.github.io/melon-wave/",
        github: "https://github.com/melon-wave/melon-wave",
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const [currentSlide, setCurrentSlide] = useState(0);

    const filteredProjects =
        filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter);

    const majorProjects = filteredProjects.filter((p) => p.category === "major");
    const minorProjects = filteredProjects.filter((p) => p.category === "minor");

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % majorProjects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + majorProjects.length) % majorProjects.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="w-full py-12 md:py-20 relative overflow-hidden bg-gradient-to-b from-slate-500 to-sky-900">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <header className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-white">
                        PRO<span className="text-pink-400">JECTS</span>
                    </h2>

                    {/* Filter buttons */}
                    <div className="flex justify-center gap-2 md:gap-3">
                        {["all", "major", "minor"].map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                                    filter === category
                                        ? "bg-pink-500 text-white shadow-lg shadow-pink-500/50"
                                        : "bg-white/90 text-gray-700 hover:bg-white"
                                }`}
                            >
                                {category === "all" ? "전체" : category === "major" ? "주요" : "미니"}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Major Projects - Slider with 2-column layout */}
                {(filter === "all" || filter === "major") && majorProjects.length > 0 && (
                    <div className="mb-12 md:mb-16">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                            <span className="w-1 md:w-1.5 h-6 md:h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></span>
                            주요 프로젝트
                        </h3>

                        {/* Slider Container */}
                        <div className="relative">
                            {/* Slides */}
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {majorProjects.map((project) => (
                                        <div key={project.id} className="w-full flex-shrink-0">
                                            <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                                                {/* 2단 레이아웃: 이미지(왼쪽) + 내용(오른쪽) */}
                                                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                                    {/* 이미지 - 작게, 고정 높이 */}
                                                    <div className="w-full md:w-2/5 lg:w-1/3 flex-shrink-0">
                                                        <div className="relative rounded-lg overflow-hidden h-64 md:h-64 lg:h-[28rem]">
                                                            <img
                                                                src={project.image}
                                                                alt={project.title}
                                                                className="w-full h-full object-top object-cover"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* 정보 - 오른쪽 */}
                                                    <div className="flex-1 flex flex-col">
                                                        <div>
                                                            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                                {project.title}
                                                            </h4>
                                                            {/* 역할 및 성과 */}
                                                            <div className="mb-3 space-y-1">
                                                                <p className="text-white/80 text-xs md:text-sm">
                                                                    {project.role}
                                                                </p>
                                                                <p className="text-white/80 text-xs md:text-sm">
                                                                    {project.achievement}
                                                                </p>
                                                            </div>

                                                            <p className="text-white/70 text-sm md:text-base mb-3 leading-relaxed">
                                                                {project.description}
                                                            </p>

                                                            {/* 주요 기능 - 간결하게 */}
                                                            <div className="mb-3">
                                                                <h5 className="text-white font-semibold text-sm mb-1.5">
                                                                    주요 기능
                                                                </h5>
                                                                <ul className="text-white/70 text-xs md:text-sm space-y-1">
                                                                    {project.details.slice(0, 3).map((detail, idx) => (
                                                                        <li
                                                                            key={idx}
                                                                            className="flex items-start gap-2"
                                                                        >
                                                                            <span className="text-white/50 mt-0.5">
                                                                                •
                                                                            </span>
                                                                            <span className="leading-relaxed">
                                                                                {detail}
                                                                            </span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* 기술적 도전과 해결 - 1개만 */}
                                                            {project.challenges && project.challenges.length > 0 && (
                                                                <div className="mb-3">
                                                                    <h5 className="text-white font-semibold text-sm mb-1.5">
                                                                        기술적 도전과 해결
                                                                    </h5>
                                                                    <div className="text-xs md:text-sm">
                                                                        <div className="mb-1">
                                                                            <span className="text-white/80 font-medium">
                                                                                문제:{" "}
                                                                            </span>
                                                                            <span className="text-white/70 leading-relaxed">
                                                                                {project.challenges[0].problem}
                                                                            </span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="text-white/80 font-medium">
                                                                                해결:{" "}
                                                                            </span>
                                                                            <span className="text-white/70 leading-relaxed">
                                                                                {project.challenges[0].solution}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* 기술 스택 태그 */}
                                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                                {project.tags.map((tag, idx) => (
                                                                    <span
                                                                        key={idx}
                                                                        className="px-2 md:px-3 py-1 bg-white/20 text-white text-xs md:text-sm font-semibold rounded"
                                                                    >
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>

                                                            {/* 버튼 */}
                                                            <div className="flex flex-col sm:flex-row gap-2">
                                                                <a
                                                                    href={project.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="px-4 py-2 bg-purple-700 text-white rounded-lg font-bold hover:bg-purple-600 transition-colors text-center text-sm"
                                                                >
                                                                    프로젝트 보기
                                                                </a>
                                                                <a
                                                                    href={project.github}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="px-4 py-2 bg-white/20 text-white rounded-lg font-bold hover:bg-white/30 transition-colors flex items-center justify-center gap-2 text-sm"
                                                                >
                                                                    <svg
                                                                        className="w-4 h-4"
                                                                        fill="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                                                    </svg>
                                                                    GitHub
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            {majorProjects.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-20 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                                        aria-label="Previous slide"
                                    >
                                        <svg
                                            className="w-5 h-5 md:w-6 md:h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-20 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                                        aria-label="Next slide"
                                    >
                                        <svg
                                            className="w-5 h-5 md:w-6 md:h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Dots Indicator */}
                            {majorProjects.length > 1 && (
                                <div className="flex justify-center gap-2 mt-6">
                                    {majorProjects.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                                                currentSlide === index
                                                    ? "bg-white w-6 md:w-8"
                                                    : "bg-white/40 hover:bg-white/60"
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Minor Projects */}
                {(filter === "all" || filter === "minor") && minorProjects.length > 0 && (
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                            <span className="w-1 md:w-1.5 h-6 md:h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                            미니 프로젝트
                        </h3>
                        <div className="grid grid-cols-1 gap-4 md:gap-5">
                            {minorProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-4 md:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                                        {/* 이미지 */}
                                        <div className="w-full sm:w-32 md:w-40 lg:w-56 h-32 md:h-32 lg:h-40 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* 정보 */}
                                        <div className="flex-1 w-full">
                                            <h4 className="text-base md:text-lg font-bold text-white mb-1.5 md:mb-2">
                                                {project.title}
                                            </h4>
                                            <p className="text-white/70 text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                                                {project.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-0.5 md:py-1 bg-white/20 text-white text-xs font-semibold rounded"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex flex-col xs:flex-row gap-2">
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white/80 hover:text-white text-xs md:text-sm font-semibold"
                                                >
                                                    프로젝트 보기 →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
