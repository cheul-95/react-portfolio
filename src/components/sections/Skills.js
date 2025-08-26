import React from "react";

// 스킬 데이터
const skills = [
    // Frontend Learning (먼저 표시)
    {
        id: "html",
        name: "HTML",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        category: "Frontend",
        description: "시맨틱 마크업",
    },
    {
        id: "css",
        name: "CSS",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        category: "Frontend",
        description: "반응형 디자인",
    },
    {
        id: "javascript",
        name: "JavaScript",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        category: "Frontend",
        description: "ES6+ 문법 학습",
    },
    {
        id: "react",
        name: "React",
        level: 65,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        category: "Frontend",
        description: "컴포넌트 개발",
    },
    // Backend Experience (뒤에 표시)
    {
        id: "java",
        name: "Java",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        category: "Backend",
        description: "3년+ 실무 경험",
    },
    {
        id: "php",
        name: "PHP",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        category: "Backend",
        description: "웹 개발 경험",
    },
    {
        id: "mysql",
        name: "MySQL",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        category: "Database",
        description: "DB 설계 및 관리",
    },
];

const SkillsSection = () => {
    return (
        <div className="w-full bg-gray-100 py-16">
            <div className="max-w-5xl mx-auto px-4">
                {/* 섹션 제목 */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">기술 스택</h2>
                    <p className="text-gray-600">백엔드 실무 경험을 바탕으로 프론트엔드 기술을 학습 중입니다</p>
                </div>

                {/* 스킬 그리드 */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className={`bg-white p-4 rounded-lg shadow-md border-2 transition-all duration-300
                                     hover:shadow-lg hover:scale-105 group cursor-pointer text-center
                                     ${
                                         skill.category === "Backend" || skill.category === "Database"
                                             ? "border-blue-200 hover:border-blue-300"
                                             : "border-green-200 hover:border-green-300"
                                     }`}
                        >
                            {/* 카테고리 뱃지 */}
                            <div className="mb-2">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium
                                    ${
                                        skill.category === "Backend" || skill.category === "Database"
                                            ? "bg-blue-100 text-blue-700"
                                            : "bg-green-100 text-green-700"
                                    }`}
                                >
                                    {skill.category}
                                </span>
                            </div>

                            {/* 스킬 아이콘 */}
                            <div className="flex justify-center mb-3">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300"
                                    onError={(e) => {
                                        e.target.src =
                                            "https://via.placeholder.com/48/4F46E5/FFFFFF?text=" + skill.name.charAt(0);
                                    }}
                                />
                            </div>

                            {/* 스킬 이름 */}
                            <h3 className="font-semibold text-gray-900 text-sm mb-2">{skill.name}</h3>

                            {/* 프로그레스 바 */}
                            <div className="mb-2">
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div
                                        className={`h-1.5 rounded-full transition-all duration-1000 ease-out 
                                            ${
                                                skill.category === "Backend" || skill.category === "Database"
                                                    ? "bg-blue-500"
                                                    : "bg-green-500"
                                            }`}
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>

                            {/* 레벨 퍼센트 */}
                            <span className="text-xs font-medium text-gray-600">{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
