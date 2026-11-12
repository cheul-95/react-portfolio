import { useState, useEffect } from "react";

const skills = [
    {
        id: "java",
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        category: "Backend",
        description: "첫 실무 언어 · 주력 전환 중",
        detailedDescription:
            "지넥슨에서 보험 설계사용 전자서명 문서 시스템(Servlet/JSP, Gradle, Docker)을 유지보수하며 파일 누락을 막는 방어 로직을 추가했고, 네오컴즈에서는 전자정부프레임워크와 MyBatis로 공장 재고관리 시스템을 1인 개발했습니다. 개인 프로젝트 Shop API에서는 Spring Boot, JPA로 커머스 API를 설계 · 배포하며 N+1 방지와 재고 동시성 제어를 다뤘습니다.",
        experience: "실무 경험",
        color: "#f89820",
        orbitRadius: 330,
        mobileOrbitRadius: 160,
        angle: 240,
    },
    {
        id: "spring",
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        category: "Backend",
        description: "트랜잭션 · 동시성 · 인증",
        detailedDescription:
            "개인 프로젝트 Shop API에서 Spring Boot, JPA, Spring Security + JWT로 커머스 API를 설계하고 EC2에 배포했습니다. 동시 주문 100건으로 Lost Update와 데드락을 재현해 비관적 락으로 해결했고, Testcontainers 통합 테스트와 GitHub Actions CI/CD를 갖췄습니다. 실무에서는 Spring 기반 전자정부프레임워크와 MyBatis로 재고관리 시스템을 단독 개발했습니다.",
        experience: "실무 및 프로젝트 경험",
        color: "#6db33f",
        orbitRadius: 260,
        mobileOrbitRadius: 100,
        angle: 300,
    },
    {
        id: "php",
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        category: "Backend",
        description: "웹 개발 경험",
        detailedDescription:
            "4년 넘게 실무 주력 언어로 사용했습니다. CodeIgniter4로 정산 배치 자동화(3시간 → 30분)와 이미지 셀프 업로드를 구축했고, Laravel REST API로 폐배터리 관리자 페이지를 5일 만에 단독 개발했습니다. WordPress · 그누보드 · 영카트 기반 15개 이상의 클라이언트 프로젝트를 개발 · 유지보수했습니다.",
        experience: "실무 경험",
        color: "#777bb4",
        orbitRadius: 330,
        mobileOrbitRadius: 160,
        angle: 300,
    },
    {
        id: "mysql",
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        category: "Database",
        description: "DB 설계 및 관리",
        detailedDescription:
            "MySQL · MariaDB를 실무에서 사용했습니다. 엑셀 정산 계산식을 GROUP BY 집계 쿼리로 옮기고, 트랜잭션과 유니크 키로 배치 재실행 시 중복 정산을 막았습니다. EXPLAIN 기반 인덱스 정리와 N+1 쿼리 개선으로 레거시 서비스의 성능 문제도 해결했습니다.",
        experience: "실무 경험",
        color: "#4479a1",
        orbitRadius: 260,
        mobileOrbitRadius: 100,
        angle: 40,
    },
    {
        id: "react",
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        category: "Frontend",
        description: "컴포넌트 개발",
        detailedDescription:
            "폐배터리 관리자 페이지에서 Laravel API와 연동되는 React 관리자 화면을 직접 만들었고, 부트캠프 팀 프로젝트(모두의 부엌, 최우수상)에서 Hooks와 Zustand로 상태를 관리했습니다. API를 쓰는 쪽을 이해해 백엔드 응답 구조를 설계할 때 활용합니다.",
        experience: "실무 및 프로젝트 경험",
        color: "#61dafb",
        orbitRadius: 260,
        mobileOrbitRadius: 100,
        angle: 180,
    },
    {
        id: "javascript",
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        category: "Frontend",
        description: "ES6+ 문법 학습",
        detailedDescription:
            "쿠팡 애즈 트래킹 플러그인에서 이벤트 위임과 data-* 속성으로 100개 이상의 사용자 행동 이벤트를 자동 수집하는 구조를 만들었습니다. 비동기 처리와 API 통신을 실무에서 꾸준히 사용했습니다.",
        experience: "학습 및 프로젝트 경험",
        color: "#f7df1e",
        orbitRadius: 330,
        mobileOrbitRadius: 160,
        angle: 140,
    },
    {
        id: "html",
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        category: "Frontend",
        description: "시맨틱 마크업",
        detailedDescription:
            "실무에서 WordPress · 그누보드 기반 클라이언트 사이트와 관리자 화면을 만들며 사용했습니다. 접근성과 SEO를 고려한 시맨틱 마크업을 기본으로 작성합니다.",
        experience: "실무 경험",
        color: "#e34c26",
        orbitRadius: 330,
        mobileOrbitRadius: 160,
        angle: 0,
    },
    {
        id: "css",
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        category: "Frontend",
        description: "반응형 디자인",
        detailedDescription:
            "Flexbox · Grid와 Tailwind CSS로 반응형 화면을 구현합니다. 이 포트폴리오 사이트와 부트캠프 프로젝트의 스타일을 직접 작성했습니다.",
        experience: "실무 경험",
        color: "#1572b6",
        orbitRadius: 330,
        mobileOrbitRadius: 160,
        angle: 60,
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
                        Java · Spring Boot 백엔드를 중심으로,
                        <br /> 각 기술을 실제로 어디에 썼는지 정리했습니다
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
