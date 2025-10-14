import { useState, useEffect } from "react";

const skills = [
    {
        id: "html",
        name: "HTML",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        category: "Frontend",
        description: "시맨틱 마크업",
        detailedDescription:
            "웹의 기본 구조를 담당하는 마크업 언어로, 접근성과 SEO를 고려한 시맨틱 웹 구조 설계에 집중하고 있습니다. 향후 웹 표준을 준수하는 고품질의 마크업으로 사용자와 검색엔진 모두에게 친화적인 웹사이트를 구축하여, 더 나은 사용자 경험과 높은 검색 순위를 달성하겠습니다.",
        experience: "실무 경험",
        color: "#e34c26",
        orbitRadius: 330,
        mobileOrbitRadius: 160,
        angle: 0,
    },
    {
        id: "css",
        name: "CSS",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        category: "Frontend",
        description: "반응형 디자인",
        detailedDescription:
            "모든 디바이스에서 완벽하게 작동하는 반응형 웹 디자인을 전문으로 합니다. CSS Grid, Flexbox, 그리고 최신 CSS 기법을 활용하여 직관적이고 아름다운 사용자 인터페이스를 구현할 것입니다. 애니메이션과 트랜지션을 통해 사용자 경험을 극대화하는 인터랙티브한 웹사이트를 제작하겠습니다.",
        experience: "실무 경험",
        color: "#1572b6",
        orbitRadius: 330,
        mobileOrbitRadius: 160,
        angle: 60,
    },
    {
        id: "javascript",
        name: "JavaScript",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        category: "Frontend",
        description: "ES6+ 문법 학습",
        detailedDescription:
            "ES6+ 최신 문법을 활용한 모던 JavaScript 개발에 주력하고 있습니다. 비동기 처리, DOM 조작, API 통신 등을 통해 동적이고 반응성 있는 웹 애플리케이션을 구현할 예정입니다. 성능 최적화와 코드 품질 향상을 통해 사용자가 만족할 수 있는 빠르고 안정적인 웹 서비스를 제공하겠습니다.",
        experience: "학습 및 프로젝트 경험",
        color: "#f7df1e",
        orbitRadius: 330,
        mobileOrbitRadius: 160,
        angle: 140,
    },
    {
        id: "react",
        name: "React",
        level: 65,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        category: "Frontend",
        description: "컴포넌트 개발",
        detailedDescription:
            "컴포넌트 기반 개발을 통해 재사용성과 유지보수성이 뛰어난 웹 애플리케이션을 구축하는 것이 목표입니다. Hooks와 상태 관리를 활용하여 복잡한 사용자 인터페이스를 효율적으로 관리하고, Next.js와 같은 프레임워크와 결합하여 SEO 최적화된 현대적인 웹 서비스를 개발하겠습니다.",
        experience: "학습 중",
        color: "#61dafb",
        orbitRadius: 260,
        mobileOrbitRadius: 100,
        angle: 180,
    },
    {
        id: "java",
        name: "Java",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        category: "Backend",
        description: "웹 개발 경험",
        detailedDescription:
            "안정적이고 확장 가능한 백엔드 시스템 구축에 전문성을 가지고 있습니다. Spring Framework를 활용한 RESTful API 설계와 마이크로서비스 아키텍처 구현을 통해, 대용량 트래픽을 안정적으로 처리할 수 있는 서버 시스템을 구축하겠습니다. 이를 통해 비즈니스 성장을 지원하는 견고한 백엔드 인프라를 제공할 것입니다.",
        experience: "실무 경험",
        color: "#f89820",
        orbitRadius: 330,
        mobileOrbitRadius: 160,
        angle: 240,
    },
    {
        id: "php",
        name: "PHP",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        category: "Backend",
        description: "웹 개발 경험",
        detailedDescription:
            "빠른 웹 서비스 개발과 효율적인 서버 사이드 로직 구현을 전문으로 합니다. Laravel과 같은 모던 프레임워크를 활용하여 보안성이 뛰어나고 유지보수가 용이한 웹 애플리케이션을 개발할 것입니다. CMS 구축과 API 개발을 통해 클라이언트의 비즈니스 요구사항을 신속하고 정확하게 구현하겠습니다.",
        experience: "실무 경험",
        color: "#777bb4",
        orbitRadius: 330,
        mobileOrbitRadius: 160,
        angle: 300,
    },
    {
        id: "mysql",
        name: "MySQL",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        category: "Database",
        description: "DB 설계 및 관리",
        detailedDescription:
            "효율적인 데이터 구조 설계와 최적화된 쿼리 작성을 통해 고성능 데이터베이스 시스템을 구축합니다. 인덱싱 전략, 정규화, 그리고 백업/복구 시스템 구축을 통해 데이터의 무결성과 가용성을 보장할 것입니다. 대용량 데이터 처리와 실시간 분석이 가능한 안정적인 데이터베이스 환경을 제공하겠습니다.",
        experience: "실무 경험",
        color: "#4479a1",
        orbitRadius: 260,
        mobileOrbitRadius: 100,
        angle: 40,
    },
];

const CosmicSkillsSection = () => {
    const [activeSkill, setActiveSkill] = useState(skills[0]);
    const [rotation, setRotation] = useState(0);
    const [stars, setStars] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    // 반응형 체크
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // 별들 생성
    useEffect(() => {
        const generateStars = () => {
            const starArray = [];
            for (let i = 0; i < (isMobile ? 50 : 100); i++) {
                starArray.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    animationDelay: Math.random() * 5,
                    animationDuration: Math.random() * 3 + 2,
                });
            }
            setStars(starArray);
        };

        generateStars();
    }, [isMobile]);

    // 궤도 회전 애니메이션 - 모바일에서 매우 느리게
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => prev + 1);
        }, 100);

        return () => clearInterval(interval);
    }, [isMobile]);

    const handleSkillClick = (skill) => {
        setActiveSkill(skill);
    };

    // 스킬 위치 계산 - 3D 효과
    const getSkillPosition = (skill) => {
        const adjustedAngle = (skill.angle + rotation) * (Math.PI / 180);
        const radius = isMobile ? skill.mobileOrbitRadius : skill.orbitRadius;

        // 3D 공간에서 위치 계산
        const x = Math.cos(adjustedAngle) * radius;
        const y = Math.sin(adjustedAngle) * radius * 0.3; // y축 압축으로 타원형
        const z = Math.sin(adjustedAngle) * radius; // z축 깊이

        // z값에 따른 스케일 (뒤로 갈수록 작아짐)
        const scale = 1; // 0.7 ~ 1.0
        const zIndex = Math.floor(z);

        return { x, y, z, scale, zIndex };
    };

    return (
        <section
            className="w-full min-h-screen py-8 md:py-16 relative bg-gradient-to-b from-indigo-900 to-slate-500 overflow-hidden"
            aria-labelledby="skills-title"
        >
            {/* 배경 별들 */}
            <div className="absolute inset-0">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.animationDelay}s`,
                            animationDuration: `${star.animationDuration}s`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* 섹션 헤더 */}
                <header className="text-center mb-8 md:mb-16">
                    <h2
                        id="skills-title"
                        className="text-2xl md:text-4xl lg:text-6xl font-black text-white mb-4 md:mb-6"
                    >
                        COSMIC{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent ml-1 md:ml-2">
                            SKILLS
                        </span>
                    </h2>
                    <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-2 md:mb-4" />
                    <p className="text-cyan-200 text-sm md:text-lg max-w-2xl mx-auto px-4 gmarket-medium">
                        우주처럼 넓은 기술 스택을 탐험하며,
                        <br /> 각 기술은 고유한 궤도를 그리며 발전하고 있습니다
                    </p>
                </header>

                {/* 우주 시스템 - 중앙의 태양과 궤도를 도는 행성들 */}
                <div
                    className="relative flex justify-center items-center mb-8 md:mb-16 min-h-[200px] md:min-h-[400px]"
                    style={{
                        perspective: "1000px",
                    }}
                >
                    {/* 중앙 태양 */}
                    <div className="absolute z-20 flex items-center justify-center">
                        {/* 외부 글로우 */}
                        <div
                            className={`absolute ${
                                isMobile ? "w-28 h-28" : "w-60 h-60"
                            } bg-gradient-radial from-yellow-400/40 via-orange-400/20 to-transparent rounded-full animate-pulse`}
                        />
                        <div
                            className={`absolute ${
                                isMobile ? "w-24 h-24" : "w-40 h-40"
                            } bg-gradient-radial from-yellow-300/60 via-orange-300/30 to-transparent rounded-full animate-pulse`}
                            style={{ animationDelay: "0.5s" }}
                        />

                        {/* 태양 중심부 */}
                        <div
                            className={`relative ${
                                isMobile ? "w-20 h-20" : "w-32 h-32"
                            } bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full drop-shadow-2xl flex items-center justify-center`}
                        ></div>
                    </div>

                    {/* 궤도선들 - 3D 타원형 */}
                    {!isMobile && (
                        <>
                            <div
                                className="absolute border border-white/10 rounded-full pointer-events-none"
                                style={{
                                    width: "500px",
                                    height: "500px",
                                    transform: "rotateX(75deg)",
                                    boxShadow: "0 0 20px rgba(139, 231, 255, 0.3)",
                                }}
                            />
                            <div
                                className="absolute border border-white/10 rounded-full pointer-events-none"
                                style={{
                                    width: "650px",
                                    height: "700px",
                                    transform: "rotateX(75deg)",
                                    boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
                                }}
                            />
                        </>
                    )}

                    {/* 모바일 궤도선들 - 3D 타원형 */}
                    {isMobile && (
                        <>
                            <div
                                className="absolute border border-white/6 rounded-full pointer-events-none"
                                style={{
                                    width: "240px",
                                    height: "240px",
                                    transform: "rotateX(70deg)",
                                }}
                            />
                            <div
                                className="absolute border border-white/6 rounded-full pointer-events-none"
                                style={{
                                    width: "320px",
                                    height: "320px",
                                    transform: "rotateX(70deg)",
                                }}
                            />
                        </>
                    )}

                    {/* 스킬 행성들 */}
                    {skills.map((skill) => {
                        const position = getSkillPosition(skill);
                        const isActive = activeSkill.id === skill.id;
                        const planetSize = isMobile ? "w-14 h-14" : "w-24 h-24";
                        const iconSize = isMobile ? "w-10 h-10" : "w-20 h-20";

                        return (
                            <button
                                key={skill.id}
                                className="absolute z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
                                style={{
                                    transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
                                    zIndex: position.zIndex + 10,
                                    opacity: position.scale > 0.8 ? 1 : 0.6,
                                    transition: "all 0.3s ease",
                                }}
                                onClick={() => handleSkillClick(skill)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        handleSkillClick(skill);
                                    }
                                }}
                                aria-label={`${skill.name} 스킬 선택`}
                                aria-pressed={isActive}
                            >
                                {/* 행성 글로우 효과 */}
                                <div
                                    className={`absolute inset-0 rounded-full blur-lg transition-all duration-300 cursor-pointer ${
                                        isActive ? "scale-150 opacity-70" : "scale-100 opacity-40"
                                    }`}
                                    style={{ backgroundColor: skill.color }}
                                />

                                {/* 행성 본체 */}
                                <div
                                    className={`relative ${planetSize} rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
                                        isActive ? "scale-125 ring-2 ring-white/50" : "scale-100"
                                    }`}
                                    style={{
                                        background: `linear-gradient(135deg, ${skill.color}CC, ${skill.color}88)`,
                                        boxShadow: `0 0 ${isMobile ? "15px" : "20px"} ${skill.color}66`,
                                    }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={`${skill.name} 아이콘`}
                                        className={`filter drop-shadow-lg ${iconSize} bg-white/90 rounded-full p-1`}
                                        onError={(e) => {
                                            e.target.src = `https://via.placeholder.com/64/${skill.color.slice(
                                                1
                                            )}/FFFFFF?text=${skill.name.charAt(0)}`;
                                        }}
                                    />
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* 선택된 스킬 상세 정보 - 우주선 콘솔 스타일 */}
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-cyan-400/30 shadow-2xl relative">
                    {/* 콘솔 상단 LED */}
                    <div className="flex space-x-2 mb-4 md:mb-6">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse" />
                        <div
                            className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                        />
                        <div
                            className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start mb-4 md:mb-6">
                        <div className="relative self-center md:self-start">
                            <div
                                className="absolute inset-0 rounded-full blur-lg opacity-50"
                                style={{ backgroundColor: activeSkill.color }}
                            />
                            <img
                                src={activeSkill.icon}
                                alt={`${activeSkill.name} 아이콘`}
                                className="relative w-16 h-16 md:w-24 md:h-24 drop-shadow-lg bg-white/90 rounded p-2"
                            />
                        </div>

                        <div className="flex-1 w-full">
                            <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-start md:items-center mb-3">
                                <h3 className="text-xl md:text-3xl font-bold text-white">{activeSkill.name}</h3>
                                <span
                                    className="px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-white/90"
                                    style={{ backgroundColor: `${activeSkill.color}80` }}
                                >
                                    {activeSkill.category}
                                </span>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex-1">
                                    <div className="w-full bg-white/20 rounded-full h-3 md:h-4 mb-2 relative overflow-hidden">
                                        <div
                                            className="h-3 md:h-4 rounded-full transition-all duration-1000 ease-out relative"
                                            style={{
                                                width: `${activeSkill.level}%`,
                                                background: `linear-gradient(90deg, ${activeSkill.color}, ${activeSkill.color}CC)`,
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-cyan-300 font-bold text-base md:text-lg mb-2">
                                    {activeSkill.level}%
                                </span>
                            </div>

                            <p className="text-yellow-300 font-medium mb-2 text-sm md:text-base hidden md:block gmarket-medium">
                                {activeSkill.experience}
                            </p>
                            <p className="text-cyan-200 text-base md:text-lg hidden md:block gmarket-medium">
                                {activeSkill.description}
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl p-4 md:p-6 border border-cyan-500/20">
                        <h4 className="text-lg md:text-xl font-semibold text-cyan-300 mb-3 flex items-center gmarket-medium">
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5 mr-2 text-cyan-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            기술 분석 리포트
                        </h4>
                        <p className="text-white/90 leading-relaxed text-sm md:text-base gmarket-light">
                            {activeSkill.detailedDescription}
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes twinkle {
                    0%,
                    100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.2);
                    }
                }

                .bg-gradient-radial {
                    background: radial-gradient(circle at center, var(--tw-gradient-stops));
                }
            `}</style>
        </section>
    );
};

export default CosmicSkillsSection;
