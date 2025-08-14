import logo from "../../assets/images/logo.png";
import { useState, useEffect } from "react";
function Header() {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(() => {
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
            className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-transform duration-300 ease-in-out ${
                isHeaderVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div
                className="header-container flex items-center justify-between max-w-7xl mx-auto px-4 h-16
            "
            >
                <h1 className="site-title">
                    <a href="#home" className="site-logo" aria-label="이상철 포트폴리오 홈으로 이동">
                        <img src={logo} alt="이상철 개발자 로고" className="logo-image w-24" />
                        <span className="sr-only">개발자 이상철 포트폴리오</span>
                    </a>
                </h1>
                <nav className="main-navigation SDSamliphopangche_Outline" aria-label="주요 네비게이션">
                    <ul className="nav-list flex gap-4">
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
