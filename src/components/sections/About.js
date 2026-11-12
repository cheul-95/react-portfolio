import { Code, Globe, Zap, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { StarCanvas } from "../hooks/useStarCanvas";

const highlights = [
    {
        id: "consistency",
        icon: <Code className="w-6 h-6" />,
        title: "Data Consistency",
        description:
            "트랜잭션 · 유니크 키로 중복 정산 방지, 비관적 락으로 동시 주문 100건의 재고 정합성 보장",
        gradient: "from-blue-500 to-cyan-500",
        iconColor: "text-blue-400",
    },
    {
        id: "api",
        icon: <Globe className="w-6 h-6" />,
        title: "API Architecture",
        description: "Spring Boot · Laravel 기반 REST API 설계, JWT 인증, 일관된 에러 응답, 배치 처리 구현",
        gradient: "from-emerald-500 to-teal-500",
        iconColor: "text-emerald-400",
    },
    {
        id: "performance",
        icon: <Zap className="w-6 h-6" />,
        title: "Query Performance",
        description: "EXPLAIN 실행계획 분석으로 풀스캔 · N+1 쿼리를 찾아 인덱스와 조회 구조 개선",
        gradient: "from-yellow-500 to-orange-500",
        iconColor: "text-yellow-400",
    },
    {
        id: "operation",
        icon: <Users className="w-6 h-6" />,
        title: "Operation & Deploy",
        description: "디스크 풀 장애 원인 추적 · 재발 방지, Docker · GitHub Actions로 EC2 배포 자동화",
        gradient: "from-purple-500 to-pink-500",
        iconColor: "text-purple-400",
    },
];

const careers = [
    {
        company: "하이오티",
        team: "개발팀 · 백엔드개발자",
        period: "2025.12 ~ 2026.06",
        stack: ["PHP", "CodeIgniter4", "Laravel", "MariaDB", "AWS", "Docker", "React"],
        works: [
            {
                title: "호텔엔조이 정산 프로세스 자동화",
                desc: "엑셀 · 수기 정산을 GROUP BY 집계 쿼리와 정산 배치(크론 일 단위)로 재구축. 트랜잭션 롤백과 업체ID+정산일자 유니크 키로 중복 정산 방지",
                result: "정산 업무 3시간 → 검수 30분",
            },
            {
                title: "호텔엔조이 조회 성능 개선",
                desc: "화면별 쿼리를 EXPLAIN으로 분석해 인덱스를 타지 않는 쿼리와 N+1 패턴을 찾고, 조회 조건에 맞춘 인덱스 재설계와 연관 데이터 일괄 조회로 개선",
                result: "풀스캔 쿼리를 인덱스 조회로 전환, 반복 쿼리 통합",
            },
            {
                title: "호텔엔조이 업체 이미지 셀프 업로드",
                desc: "CI4 Validation으로 확장자 위조 · 비정상 파일 차단, 업로드 시 썸네일 자동 리사이징, 랜덤 해시 파일명 저장",
                result: "운영팀 수작업 일 1시간 이상 절감",
            },
            {
                title: "폐배터리 산업 관리자 페이지 신규 구축",
                desc: "Laravel REST API + React 관리자 화면 분리, 수거 → 폐기 → 판매 상태 이력 테이블 관리 및 허용되지 않은 상태 전이 서버 검증, Docker Compose로 EC2 배포",
                result: "기획 검토부터 배포까지 5일 단독 구축",
            },
        ],
    },
    {
        company: "네오컴즈",
        team: "개발팀 · 백엔드개발자",
        period: "2022.02 ~ 2025.05",
        stack: ["Java", "전자정부프레임워크", "MyBatis", "PHP", "CodeIgniter", "WordPress", "그누보드", "MySQL"],
        works: [
            {
                title: "대경 공장 재고관리 시스템 신규 개발 (1인)",
                desc: "Spring 기반 전자정부프레임워크로 요구사항 정리부터 DB 설계, Controller → Service → DAO 계층 개발, MyBatis SQL 관리, 출고 시 음수 재고 차단까지 단독 진행",
                result: "수작업 재고관리를 웹 시스템으로 대체, 납품 · 운영 대응까지 1인 완수",
            },
            {
                title: "금융 · 커머스 · 법무 · 헬스케어 클라이언트 프로젝트",
                desc: "쿠팡, SK 스키노뉴스, 신한금융희망재단, 차바이오, 법무법인 바른 등 15개 이상 프로젝트 개발 · 유지보수",
                result: "평균 납기보다 7일 이상 조기 완료",
            },
            {
                title: "쿠팡 애즈 사용자 행동 트래킹 플러그인",
                desc: "document 단위 이벤트 위임과 data-* 속성으로 추적 대상 관리, WP REST API로 자체 DB 저장과 GA 전송을 함께 하는 이중 수집 구조 설계",
                result: "100개 이상 이벤트 자동 트래킹",
            },
            {
                title: "랜덤팡 디스크 풀 장애 대응",
                desc: "df · du로 세션 · 임시 파일 누적 원인 추적 후 즉시 복구, find 기반 정리 스크립트를 크론탭에 등록",
                result: "적용 후 2개월간 재발 0건",
            },
        ],
    },
    {
        company: "지넥슨",
        team: "개발팀 · 백엔드개발자",
        period: "2021.07 ~ 2022.02",
        stack: ["Java", "Servlet/JSP", "Gradle", "MariaDB", "Docker", "Linux"],
        works: [
            {
                title: "보험 설계사 스마트확인서 솔루션 유지보수",
                desc: "일 평균 100명 이상이 쓰는 전자서명 문서 시스템에서 서명 후 파일 누락 이슈를 발견해 파일 존재 재검증 · 재서명 요청 로직 추가",
                result: "누락 문서를 즉시 감지하고 재서명으로 복구하는 구조 구축",
            },
        ],
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
            className="min-h-screen relative overflow-hidden bg-gradient-to-b from-sky-900 to-sky-700"
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
                                    백엔드 개발자 <span className="text-rose-400">이상철</span>
                                </h3>

                                {/* Q&A 리스트 */}
                                <dl className="space-y-6 text-left">
                                    <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                                        <dt className="text-sm sm:text-base font-semibold text-rose-400 mb-2">
                                            Q. 어떤 개발자인가요?
                                        </dt>
                                        <dd className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed gmarket-medium">
                                            Java와 PHP로 4년 6개월간 서비스를 개발하고 운영해 온 백엔드 개발자입니다.
                                            정산 배치 자동화, 쿼리 성능 개선, 장애 대응처럼{" "}
                                            <span className="font-semibold text-rose-400">
                                                데이터 정합성과 안정성이 중요한 일
                                            </span>
                                            을 주로 맡아 왔고, 지금은 Spring Boot와 JPA로 역량을 넓히고 있습니다.
                                        </dd>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                                        <dt className="text-sm sm:text-base font-semibold text-rose-400 mb-2">
                                            Q. 백엔드 개발자로서 강점은 무엇인가요?
                                        </dt>
                                        <dd className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed gmarket-medium">
                                            문제를 감이 아니라{" "}
                                            <span className="font-semibold text-rose-400">근거로 풉니다</span>. 느린
                                            쿼리는 EXPLAIN으로, 동시성 문제는 테스트로 직접 재현해 원인을 확인한 뒤
                                            고쳤습니다. React도 다룰 수 있어 API를 쓰는 쪽이 편한 응답 구조를 함께
                                            고민합니다.
                                        </dd>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
                                        <dt className="text-sm sm:text-base font-semibold text-rose-400 mb-2">
                                            Q. 앞으로 이루고 싶은 목표는 무엇인가요?
                                        </dt>
                                        <dd className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed gmarket-medium">
                                            반복되는 수작업과 비효율을 먼저 찾아 코드로 줄이는 개발자가 되고 싶습니다.
                                            나아가 시스템 설계와 아키텍처에 대한 이해를 넓혀{" "}
                                            <span className="font-semibold text-rose-400">
                                                유지보수하기 쉽고 확장 가능한 서비스
                                            </span>
                                            를 만드는 것이 목표입니다.
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
                                            <p className="mt-1 font-medium">lsch9040@naver.com</p>
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

                    {/* 경력 */}
                    <section
                        aria-labelledby="career-heading"
                        className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h3
                            id="career-heading"
                            className="text-2xl md:text-3xl font-extrabold text-white mb-8 flex items-center gap-3"
                        >
                            <span className="w-1.5 h-8 bg-gradient-to-b from-pink-400 to-rose-500 rounded-full" />
                            Career
                            <span className="text-sm md:text-base font-semibold text-rose-400">총 4년 6개월</span>
                        </h3>

                        <ol className="relative border-l border-white/20 ml-2 space-y-10">
                            {careers.map((career) => (
                                <li key={career.company} className="pl-6 md:pl-8 relative">
                                    <span
                                        className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-rose-400 ring-4 ring-rose-400/20"
                                        aria-hidden="true"
                                    />
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                                        <div>
                                            <h4 className="text-lg md:text-xl font-bold text-white">{career.company}</h4>
                                            <p className="text-xs md:text-sm text-gray-400">{career.team}</p>
                                        </div>
                                        <p className="text-xs md:text-sm text-gray-300 font-medium">{career.period}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {career.stack.map((s) => (
                                            <span
                                                key={s}
                                                className="px-2 py-0.5 bg-white/10 text-white/80 text-xs font-semibold rounded"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="space-y-3">
                                        {career.works.map((work) => (
                                            <li
                                                key={work.title}
                                                className="bg-white/5 border border-white/10 rounded-xl p-4"
                                            >
                                                <p className="text-sm md:text-base font-semibold text-white mb-1">
                                                    {work.title}
                                                </p>
                                                <p className="text-xs md:text-sm text-gray-300 leading-relaxed gmarket-medium">
                                                    {work.desc}
                                                </p>
                                                <p className="mt-2 text-xs md:text-sm font-semibold text-rose-400">
                                                    → {work.result}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ol>
                    </section>

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
                                    className="text-sm lg:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 gmarket-medium"
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
