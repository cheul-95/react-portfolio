import heroImage from "../assets/images/myImage.png";
import { useEffect, useState, useCallback } from "react";
const PORTFOLIO_TEXT = "PORTFOLIO";

const NamePart = ({ text, index, glitchColor, glitchOffset }) => (
    <span className={`group inline-block relative overflow-hidden pr-4 name-slide-in name-delay-${index}`}>
        <span className="text-gray-300 hover:text-pink-400 transition-colors duration-500 ease-out">{text}</span>
        <span
            className={`absolute inset-0 ${glitchColor} opacity-0 group-hover:opacity-60 pointer-events-none transition-all duration-300`}
            style={{ transform: glitchOffset }}
            aria-hidden="true"
        >
            {text}
        </span>
    </span>
);

function Hero() {
    const [scrollY, setScrollY] = useState(0);

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
            const multiplier = 0.5;
            return {
                textOpacity: Math.max(0, 1 - scrollY / 400),
                textTransform: `translateX(${scrollY * -0.2 * multiplier}px)`,
                imageOpacity: Math.max(0.2, 1 - scrollY / 600),
                imageTransform: `translateX(${scrollY * 0.15 * multiplier}px) scale(${Math.max(
                    0.8,
                    1 - scrollY / 3000
                )})`,
            };
        } else {
            return { sectionTransform: 0 };
        }
    };

    const scrollEffects = getScrollEffects();

    return (
        <section
            className="min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-slate-800 to-indigo-900"
            aria-label="개발자 이상철 포트폴리오 소개"
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 max-w-7xl mx-auto">
                    {/* 텍스트 섹션 */}
                    <header
                        className="space-y-4 sm:space-y-6 order-2 lg:order-1"
                        style={{
                            opacity: scrollEffects.textOpacity,
                            transform: scrollEffects.textTransform,
                        }}
                    >
                        {/* 메인 이름 */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
                            <div>
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
                            <div className="mt-1 sm:mt-2">
                                <NamePart
                                    text="CHEUL"
                                    index={2}
                                    glitchColor="text-emerald-400"
                                    glitchOffset="translate(4px, 4px)"
                                />
                            </div>
                        </h2>

                        {/* 언더라인 */}
                        <hr className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full border-none" />

                        {/* PORTFOLIO */}
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest portfolio-fade-in">
                            <span className="inline-flex flex-wrap gap-1 sm:gap-2 lg:gap-3" aria-label="포트폴리오">
                                {PORTFOLIO_TEXT.split("").map((letter, index) => (
                                    <span
                                        key={`${letter}-${index}`}
                                        className="inline-block text-gray-500 hover:text-pink-400 transition-all duration-300 ease-out transform hover:scale-125 hover:-rotate-12 hover:-translate-y-2"
                                        style={{ animationDelay: `${800 + index * 100}ms` }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </span>
                        </h3>

                        {/* CTA 버튼 */}
                        <div role="group" className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8">
                            <button
                                className="gmarket-medium group relative px-6 sm:px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl text-white"
                                onClick={() => (window.location.href = "/#projects")}
                            >
                                프로젝트 보기
                            </button>
                            <button
                                className="gmarket-medium group px-6 sm:px-8 py-3 bg-white/5 rounded-2xl text-white border"
                                onClick={() => (window.location.href = "/#contact")}
                            >
                                연락하기 →
                            </button>
                        </div>
                    </header>

                    {/* 이미지 섹션 */}
                    <figure className="flex justify-center items-center order-1 lg:order-2 relative">
                        <img
                            src={heroImage}
                            alt="이상철 프론트엔드 개발자 프로필 사진"
                            className="select-none relative z-10 drop-shadow-2xl w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover hover:drop-shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:scale-105 transition-all duration-500 floating-image animate-[shakeClockwise_1s_ease-in-out_infinite]"
                        />
                        <figcaption className="sr-only">프론트엔드 개발자 이상철</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Hero;
