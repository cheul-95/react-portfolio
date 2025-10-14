import React, { useState } from "react";
import melon from "../assets/images/melon.png";
import Recipe from "../assets/images/Recipe.png";
import Portfolio from "../assets/images/Portfolio.png";
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
    // {
    //     id: 3,
    //     title: "Weather Dashboard",
    //     description: "실시간 날씨 정보와 7일 예보 제공",
    //     image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    //     tags: ["React", "API"],
    //     category: "major",
    //     link: "#",
    //     github: "#",
    // },

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
    const [hoveredId, setHoveredId] = useState(null);

    const filteredProjects =
        filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter);

    const majorProjects = filteredProjects.filter((p) => p.category === "major");
    const minorProjects = filteredProjects.filter((p) => p.category === "minor");

    return (
        <section className="w-full py-16 relative overflow-hidden bg-gradient-to-b from-slate-500 to-sky-900 text-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <header className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black mb-3">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            PROJECTS
                        </span>
                    </h2>

                    {/* Filter buttons */}
                    <div className="flex justify-center gap-3 mt-6">
                        {["all", "major", "minor"].map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`leading-normal px-5 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                                    filter === category
                                        ? "bg-pink-400 text-white shadow-lg"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {category === "all" ? "전체" : category === "major" ? "주요" : "미니"}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Major Projects */}
                {(filter === "all" || filter === "major") && majorProjects.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full"></span>
                            주요 프로젝트
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {majorProjects.map((project) => (
                                <div
                                    key={project.id}
                                    onMouseEnter={() => setHoveredId(project.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-400"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/50 to-transparent"></div>

                                        <div className="absolute top-4 right-4">
                                            <span className="px-2 py-1 bg-purple-500 text-white/80 text-xs rounded-2xl border border-white/50 leading-normal">
                                                MAJOR
                                            </span>
                                        </div>

                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h4 className="text-2xl font-bold text-white/90 mb-1">{project.title}</h4>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {project.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white/60 rounded border border-white/30"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div
                                            className={`absolute bg-black/80 inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
                                                hoveredId === project.id ? "opacity-100" : "opacity-0"
                                            }`}
                                        >
                                            <p className="text-white text-center px-6 mb-2 gmarket-light">
                                                {project.description}
                                            </p>
                                            <div className="flex gap-3">
                                                <a
                                                    href={project.link}
                                                    className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                                                >
                                                    View Demo
                                                </a>
                                                <a
                                                    href={project.github}
                                                    className="px-6 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 border border-gray-700"
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                            미니 프로젝트
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {minorProjects.map((project) => (
                                <div
                                    key={project.id}
                                    onMouseEnter={() => setHoveredId(project.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-400"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/50"></div>

                                        <div className="absolute top-3 right-3">
                                            <span className="px-2 py-1 bg-blue-500 text-white/80 text-xs rounded-2xl border border-white/50 ">
                                                MINI
                                            </span>
                                        </div>

                                        <div className="absolute bottom-3 left-3 right-3">
                                            <h4 className="text-lg font-bold text-white/90 mb-2">{project.title}</h4>
                                        </div>

                                        <div
                                            className={`absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-3 p-4 transition-opacity duration-300 ${
                                                hoveredId === project.id ? "opacity-100" : "opacity-0"
                                            }`}
                                        >
                                            <p className="text-white text-center text-sm mb-2">{project.description}</p>
                                            <div className="flex gap-2">
                                                <a
                                                    href={project.link}
                                                    className="p-2 bg-white text-blue-600 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                                                    title="View Demo"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-400 ">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-md font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
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
