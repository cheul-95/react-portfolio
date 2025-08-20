import logo from "../../assets/images/logo.png";
import { useState, useEffect } from "react";

function Header() {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // 컴포넌트 마운트 시 애니메이션 트리거
        setIsLoaded(true);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    setIsHeaderVisible(false);
                } else {
                    setIsHeaderVisible(true);
                }
            } else {
                setIsHeaderVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-transform duration-300 ease-in-out z-50 ${
                isHeaderVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="header-container flex items-center justify-between max-w-7xl mx-auto px-4 h-16">
                <h1
                    className={`site-title transform transition-all duration-700 ease-out ${
                        isLoaded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    }`}
                    style={{ transitionDelay: "0.3s" }}
                >
                    <a href="#home" className="site-logo" aria-label="이상철 포트폴리오 홈으로 이동">
                        <img
                            src={logo}
                            alt="이상철 개발자 로고"
                            className="logo-image w-24 hover:scale-105 transition-transform duration-200"
                        />
                        <span className="sr-only">개발자 이상철 포트폴리오</span>
                    </a>
                </h1>

                <nav
                    className={`main-navigation SDSamliphopangche_Outline transform transition-all duration-700 ease-out ${
                        isLoaded ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
                    style={{ transitionDelay: "0.5s" }}
                    aria-label="주요 네비게이션"
                >
                    <ul className="nav-list flex gap-6">
                        {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                            <li
                                key={item}
                                className={`nav-item transform transition-all duration-500 ease-out ${
                                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: `${0.6 + index * 0.2}s`,
                                }}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-link px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative group"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
