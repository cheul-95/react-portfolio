import React from "react";
import { Code, Globe, Zap, Users } from "lucide-react"; // 아이콘 라이브러리 예시

// 하이라이트 데이터
const highlights = [
    {
        id: "frameworks",
        icon: <Code className="w-6 h-6" />,
        title: "Spring & CodeIgniter4 & 워드프레스",
        description: "다양한 프로젝트를 통한 실무 경험",
        color: "rose",
    },
    {
        id: "api",
        icon: <Globe className="w-6 h-6" />,
        title: "API 설계",
        description: "안정적이고 효율적인 RESTful API 구축",
    },
    {
        id: "performance",
        icon: <Zap className="w-6 h-6" />,
        title: "성능 최적화",
        description: "빠르고 효율적인 웹 애플리케이션",
    },
    {
        id: "collaboration",
        icon: <Users className="w-6 h-6" />,
        title: "협업 능력",
        description: "팀과의 커뮤니케이션 중시",
    },
];

const About = () => {
    return (
        <div className="w-full bg-gray-50">
            <div className="flex items-center justify-center flex-col max-w-7xl mx-auto py-16 px-4">
                {/* 소개 텍스트 */}
                <div className="bg-white p-6 rounded-lg shadow-md leading-6 mb-8 max-w-4xl">
                    <p className="mb-4">
                        사용자 경험을 중시하는 <strong className="text-rose-500">프론트엔드 개발자</strong>입니다.
                        깔끔하고 직관적인 인터페이스를 만들며, 성능과 접근성을 고려한 웹 애플리케이션 개발에 열정을
                        가지고 있습니다.
                    </p>
                    <p className="text-gray-700">
                        최신 기술 트렌드를 빠르게 습득하고, 팀과의 협업을 통해 더 나은 서비스를 만들어가는 것을
                        즐깁니다.
                    </p>
                </div>

                {/* 하이라이트 카드들 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl">
                    {highlights.map((item) => (
                        <div
                            key={item.id}
                            className="group p-6 bg-white rounded-xl shadow-md border border-gray-100 
                                     hover:shadow-lg hover:scale-105 transition-all duration-300 
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                            tabIndex={0}
                            role="article"
                            aria-label={`${item.title}: ${item.description}`}
                        >
                            <div
                                className={`text-${item.color}-600 mb-3 transform group-hover:scale-110 transition-transform duration-300`}
                            >
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
