import heroImage from "../assets/images/myImage.png";
import { useEffect, useState, useCallback } from "react";

// 상수 분리
const TECH_STACK = [
    { name: "HTML", color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", color: "from-green-400 to-emerald-600" },
    { name: "CSS", color: "from-blue-500 to-indigo-600" },
    { name: "React", color: "from-gray-400 to-gray-600" },
    { name: "Tailwind", color: "from-cyan-400 to-teal-600" },
];

const PORTFOLIO_TEXT = "PORTFOLIO";

// 이름 부분 컴포넌트
const NamePart = ({ text, index, glitchColor, glitchOffset }) => (
    <div className={`group inline-block relative overflow-hidden pr-4 name-slide-in name-delay-${index}`}>
        {/* 스크린 리더용 숨김 텍스트 */}

        <span className="text-gray-300 hover:text-pink-400 transition-colors duration-500 ease-out">{text}</span>
        <span
            className={`absolute inset-0 ${glitchColor} opacity-0 group-hover:opacity-60 pointer-events-none transition-all duration-300`}
            style={{ transform: glitchOffset }}
            aria-hidden="true"
        >
            {text}
        </span>
    </div>
);

function Hero() {
    const [scrollY, setScrollY] = useState(0);

    // 스크롤 이벤트 스로틀링
    const handleScroll = useCallback(() => {
        requestAnimationFrame(() => {
            setScrollY(window.scrollY);
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const getScrollEffects = () => {
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        if (!isMobile) {
            // 모바일에서의 스크롤 효과
            const multiplier = 0.5;

            return {
                textOpacity: Math.max(0, 1 - scrollY / 400),
                textTransform: `translateX(${scrollY * -0.2 * multiplier}px)`,
                imageOpacity: Math.max(0.2, 1 - scrollY / 600),
                imageTransform: `translateX(${scrollY * 0.15 * multiplier}px) scale(${Math.max(
                    0.8,
                    1 - scrollY / 3000
                )})`,
                sectionTransform: `translateY(${scrollY * 0.3}px)`,
            };
        } else {
            return {
                sectionTransform: 0,
            };
        }
    };

    const scrollEffects = getScrollEffects();

    return (
        <section className="min-h-screen flex items-center pt-16 overflow-hidden  bg-gradient-to-b from-slate-800 to-indigo-900">
            <div className="sr-only">
                <h1>이상철 프론트엔드 개발자</h1>
                <p>React, Vue.js, TypeScript, Next.js, Tailwind CSS 기술을 사용하는 프론트엔드 개발자입니다.</p>
            </div>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 max-w-7xl mx-auto">
                    {/* 텍스트 섹션 */}
                    <div
                        className="space-y-4 sm:space-y-6 order-2 lg:order-1"
                        style={{
                            opacity: scrollEffects.textOpacity,
                            transform: scrollEffects.textTransform,
                        }}
                    >
                        {/* 메인 이름 */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
                            {/* LEE SANG */}
                            <div className="block">
                                <NamePart
                                    text="LEE"
                                    index={0}
                                    glitchColor="text-cyan-400"
                                    glitchOffset="translate(4px, 4px)"
                                />
                                <NamePart
                                    text="SANG"
                                    index={1}
                                    glitchColor="text-purple-400"
                                    glitchOffset="translate(4px, 4px)"
                                />
                            </div>

                            {/* CHEUL */}
                            <div className="block mt-1 sm:mt-2">
                                <NamePart
                                    text="CHEUL"
                                    index={2}
                                    glitchColor="text-emerald-400"
                                    glitchOffset="translate(4px, 4px)"
                                />
                            </div>
                        </h1>

                        {/* 언더라인 */}
                        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full underline-fade-in">
                            <div className="h-full bg-gradient-to-r from-white to-pink-300 rounded-full animate-pulse" />
                        </div>

                        {/* PORTFOLIO */}
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest portfolio-fade-in">
                            <div
                                className="inline-flex flex-wrap gap-1 sm:gap-2 lg:gap-3"
                                role="heading"
                                aria-level="2"
                                aria-label="포트폴리오"
                            >
                                {PORTFOLIO_TEXT.split("").map((letter, index) => (
                                    <span
                                        key={`${letter}-${index}`}
                                        className="inline-block text-gray-500 hover:text-pink-400 transition-all duration-300 ease-out transform hover:scale-125 hover:-rotate-12 hover:-translate-y-2 focus:outline-none focus:text-pink-400 portfolio-letter"
                                        style={{
                                            animationDelay: `${800 + index * 100}ms`,
                                        }}
                                        tabIndex={0}
                                        role="presentation"
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 기술 스택 */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                            {TECH_STACK.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className="group relative tech-fade-in"
                                    style={{
                                        animationDelay: `${1200 + index * 150}ms`,
                                    }}
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                                        aria-hidden="true"
                                    />
                                    <span
                                        className="relative inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 text-xs sm:text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
                                        tabIndex={0}
                                        role="button"
                                        aria-label={`${tech.name} 기술`}
                                    >
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA 버튼들 */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8">
                            <button
                                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl font-semibold text-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400/50 button-fade-in"
                                style={{ animationDelay: "1800ms" }}
                                aria-label="프로젝트 페이지로 이동"
                                onClick={() => (window.location.href = "/#projects")}
                            >
                                <span className="relative z-10">프로젝트 보기</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300" />
                            </button>

                            <button
                                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-xl rounded-2xl font-semibold text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400/50 button-fade-in"
                                style={{ animationDelay: "2000ms" }}
                                aria-label="연락처 페이지로 이동"
                                onClick={() => (window.location.href = "/#contact")}
                            >
                                연락하기
                                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1 group-focus:translate-x-1">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* 이미지 섹션 */}
                    <div className="flex justify-center items-center order-1 lg:order-2 relative image-fade-in">
                        <div
                            className="relative group"
                            style={{
                                opacity: scrollEffects.imageOpacity,
                                transform: scrollEffects.imageTransform,
                                animationDelay: "500ms",
                            }}
                        >
                            {/* 글로우 효과 */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-pink-400/10 to-transparent  blur-3xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                aria-hidden="true"
                            />

                            {/* 이미지 */}
                            <img
                                src={heroImage}
                                alt="이상철 프론트엔드 개발자의 프로필 사진"
                                loading="eager"
                                decoding="async"
                                className="select-none relative z-10 drop-shadow-2xl w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover hover:drop-shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-pink-400/50 floating-image animate-[shakeClockwise_1s_ease-in-out_infinite]"
                                tabIndex={0}
                                style={{
                                    animation: "shakeClockwise 1s ease-in-out infinite",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
