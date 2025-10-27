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
        image: Recipe,
        tags: ["React", "TypeScript", "Supabase", "Vite"],
        category: "major",
        link: "#",
        github: "https://github.com/stars-at-daybreak/morningStarRecipe",
    },
    {
        id: 2,
        title: "프론트엔드 포트 폴리오",
        description: "프론트엔드 개발자 이상철의 포트폴리오 웹사이트입니다.",
        image: Portfolio,
        tags: ["React", "webpack", "tailwindcss"],
        category: "major",
        link: "http://sclee-portfolio.s3-website.ap-northeast-2.amazonaws.com/",
        github: "https://github.com/cheul-95/react-portfolio",
    },
    {
        id: 3,
        title: "주식, 국제 금 시세  조회 사이트",
        description: "한국 투자 증권 API 활용 하여 국내 주식, 국제 금 시세 사이트 설계 및 개발 개인 프로젝트 입니다.",
        image: stock,
        tags: ["Next.js", "Typescirpt", "tailwindcss"],
        category: "major",
        link: "https://korean-stock-r0gd0hiqi-leesangcheols-projects.vercel.app/",
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

    const filteredProjects =
        filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter);

    const majorProjects = filteredProjects.filter((p) => p.category === "major");
    const minorProjects = filteredProjects.filter((p) => p.category === "minor");

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

                {/* Major Projects */}
                {(filter === "all" || filter === "major") && majorProjects.length > 0 && (
                    <div className="mb-12 md:mb-16">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                            <span className="w-1 md:w-1.5 h-6 md:h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></span>
                            주요 프로젝트
                        </h3>
                        <div className="space-y-4 md:space-y-6">
                            {majorProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                                >
                                    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
                                        {/* 이미지 */}
                                        <div className="w-full lg:w-2/5 relative rounded-lg md:rounded-xl overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-48 md:h-64 object-cover"
                                            />
                                        </div>

                                        {/* 정보 */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                                                    {project.title}
                                                </h4>
                                                <p className="text-white/80 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                                    {project.tags.map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 md:px-3 py-1 md:py-1.5 bg-white/20 text-white text-xs md:text-sm font-semibold rounded md:rounded-lg"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-3 md:mt-4">
                                                <a
                                                    href={project.link}
                                                    className="px-4 md:px-5 py-2 md:py-2.5 bg-purple-700 text-white rounded-lg font-bold hover:bg-purple-600 transition-colors text-center text-sm md:text-base"
                                                >
                                                    프로젝트 보기
                                                </a>
                                                <a
                                                    href={project.github}
                                                    className="px-4 md:px-5 py-2 md:py-2.5 bg-white/20 text-white rounded-lg font-bold hover:bg-white/30 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                                                >
                                                    <svg
                                                        className="w-4 md:w-5 h-4 md:h-5"
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
                            ))}
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
                                                    className="text-cyan-400 hover:text-cyan-300 text-xs md:text-sm font-semibold lg:pt-9"
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
