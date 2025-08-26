import { useState, useEffect } from "react";
import heroImage from "../assets/images/myImage.png";

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [typedText, setTypedText] = useState("");

    const fullText = "사용자 중심의 인터페이스와 원활한 협업으로 가치를 창출하는 프론트엔드 엔지니어입니다.";

    // 타이핑 효과
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, []);

    // 마우스 추적
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left - rect.width / 2) / 20,
            y: (e.clientY - rect.top - rect.height / 2) / 20,
        });
    };

    return (
        <section className="bg-slate-900 pt-16 relative overflow-hidden" onMouseMove={handleMouseMove}>
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-rose-400/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center justify-center max-w-7xl mx-auto pt-16 pb-16 relative z-10">
                <div
                    className="flex justify-center lg:justify-center mb-8 lg:mb-0"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    }}
                >
                    <div
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img
                            src={heroImage}
                            alt="hero-image"
                            className={` w-72 h-72 aspect-square object-cover object-center rounded-full  ring-2 ring-rose-500/40 shadow-xl transition-all duration-500 ${
                                isHovered ? "scale-110 ring-rose-400/60 shadow-2xl shadow-rose-500/20" : ""
                            }`}
                            loading="eager"
                            decoding="async"
                        />
                        {/* 호버 시 나타나는 효과 */}
                        <div
                            className={`absolute inset-0 rounded-full bg-rose-500/10 transition-opacity duration-300 ${
                                isHovered ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    </div>
                </div>

                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Hello , I`m
                        <br />
                        <span className="leading-normal text-rose-400 relative inline-block mr-2">이상철</span>
                        developer
                    </h1>

                    {/* 타이핑 효과가 있는 텍스트 */}
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 min-h-[3rem]">
                        {typedText}
                        <span className="animate-pulse text-rose-400">|</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                        <button
                            className="group px-8 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 relative overflow-hidden"
                            onMouseEnter={(e) => {
                                const ripple = document.createElement("span");
                                const rect = e.target.getBoundingClientRect();
                                const size = Math.max(rect.width, rect.height);
                                const x = e.clientX - rect.left - size / 2;
                                const y = e.clientY - rect.top - size / 2;
                                ripple.style.width = ripple.style.height = size + "px";
                                ripple.style.left = x + "px";
                                ripple.style.top = y + "px";
                                ripple.classList.add("absolute", "bg-white/20", "rounded-full", "animate-ping");
                                e.target.appendChild(ripple);
                                setTimeout(() => ripple.remove(), 600);
                            }}
                            onClick={() => (window.location.href = "#projects")}
                        >
                            <span className="relative z-10">View My Work</span>
                        </button>

                        <button
                            className="group px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-rose-400 hover:text-rose-400 transition-all duration-300 hover:bg-rose-500/5 transform hover:-translate-y-1 active:scale-95 relative"
                            onClick={() => (window.location.href = "#contact")}
                        >
                            <span className="group-hover:animate-pulse">Contact Me</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
