import { Code, Globe, Zap, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { StarCanvas } from "../hooks/useStarCanvas";

const highlights = [
    {
        id: "frameworks",
        icon: <Code className="w-6 h-6" />,
        title: "Multi-Platform Development",
        description: "Spring Boot, CodeIgniter4, WordPress등 를 활용한 다양한 웹 플랫폼 구축 경험",
        gradient: "from-blue-500 to-cyan-500",
        iconColor: "text-blue-400",
    },
    {
        id: "api",
        icon: <Globe className="w-6 h-6" />,
        title: "API Architecture",
        description: "확장 가능하고 안정적인 RESTful API 설계 및 구현",
        gradient: "from-emerald-500 to-teal-500",
        iconColor: "text-emerald-400",
    },
    {
        id: "performance",
        icon: <Zap className="w-6 h-6" />,
        title: "Performance Optimization",
        description: "Lighthouse 기준 성능 최적화 및 코드 스플리팅으로 로딩 속도 개선",
        gradient: "from-yellow-500 to-orange-500",
        iconColor: "text-yellow-400",
    },
    {
        id: "collaboration",
        icon: <Users className="w-6 h-6" />,
        title: "Team Collaboration",
        description: "Slack, Figma, Notion을 통한 효율적인 팀워크 및 문서화",
        gradient: "from-purple-500 to-pink-500",
        iconColor: "text-purple-400",
    },
];

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="about"
            className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-900 to-slate-500"
            aria-labelledby="about-heading"
        >
            <StarCanvas />

            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                    {/* 타이틀 */}
                    <header
                        className={`text-center mb-16 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                            About{" "}
                            <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent ml-2">
                                Me
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full" />
                    </header>

                    {/* 소개 Q&A */}
                    <article
                        className={`mb-16 transition-all duration-1000 delay-200 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <section className="max-w-4xl mx-auto py-10">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 sm:p-10 text-center space-y-6">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                                    프론트엔드 개발자 <span className="text-rose-400">이상철</span>
                                </h3>

                                {/* Q&A 리스트 */}
                                <dl className="space-y-6 text-left">
                                    <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                                        <dt className="text-sm sm:text-base font-semibold text-rose-400 mb-2">
                                            Q. 프론트엔드 개발자로 전향한 이유가 있나요?
                                        </dt>
                                        <dd className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
                                            네. 백엔드 개발을 하면서도 항상 사용자와 맞닿아 있는 화면에 더 많은 관심이
                                            갔습니다. 프로젝트 중 프론트엔드의 한계를 직접 경험하며 부족함을 채우고
                                            싶다는 생각이 들었고, 학습을 이어가면서{" "}
                                            <span className="font-semibold text-rose-400">
                                                사용자 경험을 개선하는 즐거움
                                            </span>
                                            을 크게 느껴 자연스럽게 프론트엔드에 전념하게 되었습니다.
                                        </dd>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                                        <dt className="text-sm sm:text-base font-semibold text-rose-400 mb-2">
                                            Q. 이전 경험이 프론트엔드 개발에 어떻게 도움이 되나요?
                                        </dt>
                                        <dd className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
                                            네. 백엔드 경험 덕분에 API 구조나 데이터 흐름을 이해하는 데 강점이 있습니다.
                                            덕분에 프론트엔드에서{" "}
                                            <span className="font-semibold text-rose-400">
                                                데이터를 효율적으로 처리하고, 팀 내에서 백엔드와 원활한 소통{" "}
                                            </span>
                                            을 할 수 있습니다.
                                        </dd>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                                        <dt className="text-sm sm:text-base font-semibold text-rose-400 mb-2">
                                            Q. 앞으로 프론트엔드에서 이루고 싶은 목표는 무엇인가요?
                                        </dt>
                                        <dd className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
                                            사용자 중심의 직관적이고 깔끔한 웹 서비스를 만드는 것이 목표입니다. 또한
                                            최신 기술을 익혀{" "}
                                            <span className="font-semibold text-rose-400">성능과 접근성</span>을 모두
                                            만족하는 프론트엔드 개발자가 되고 싶습니다.
                                        </dd>
                                    </div>
                                </dl>

                                {/* 개인정보 */}
                                <section aria-labelledby="personal-info-heading">
                                    <h4 id="personal-info-heading" className="sr-only">
                                        개인정보
                                    </h4>
                                    <div className="border-t border-white/20 mt-6 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300 text-xs sm:text-sm">
                                        <div>
                                            <p className="text-gray-400">생년월일</p>
                                            <p className="mt-1 font-medium">1995.09.04</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400">연락처</p>
                                            <p className="mt-1 font-medium">tkdcjf3552@gmail.com</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400">거주지</p>
                                            <p className="mt-1 font-medium">경기 안양</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </article>

                    {/* 하이라이트 카드 */}
                    <section
                        aria-labelledby="highlights-heading"
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
                    >
                        <h3 id="highlights-heading" className="sr-only">
                            주요 역량
                        </h3>
                        {highlights.map((item, index) => (
                            <article
                                key={item.id}
                                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 
                                    hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl 
                                    transition-all duration-500 ease-out
                                    focus:outline-none focus:ring-2 focus:ring-pink-400/50
                                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                tabIndex={0}
                                aria-labelledby={`${item.id}-title`}
                                aria-describedby={`${item.id}-desc`}
                                style={{
                                    transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                                }}
                            >
                                {/* 배경 그라디언트 */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                                />

                                {/* 아이콘 */}
                                <div className={`${item.iconColor} mb-4`}>{item.icon}</div>

                                {/* 제목 */}
                                <h4
                                    id={`${item.id}-title`}
                                    className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300"
                                >
                                    {item.title}
                                </h4>

                                {/* 설명 */}
                                <p
                                    id={`${item.id}-desc`}
                                    className="text-sm lg:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                                >
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </section>
                </div>
            </div>
        </section>
    );
};

export default About;
