import { useState, useEffect } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <button
                onClick={toggleMenu}
                className={`fixed top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 backdrop-blur-md border border-slate-600/40 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-slate-500/60 hover:scale-105 shadow-lg ${
                    isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                } ${isMenuOpen ? " rotate-90" : ""}`}
                style={{ transitionDelay: "0.3s" }}
                aria-label="메뉴 토글"
            >
                <div className="relative w-5 h-5 md:w-6 md:h-6">
                    <span
                        className={`absolute block w-5 md:w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMenuOpen ? "rotate-45 top-2 md:top-2.5" : "top-1 md:top-1.5"
                        }`}
                    />
                    <span
                        className={`absolute block w-5 md:w-6 h-0.5 bg-white top-2 md:top-2.5 transition-all duration-300 ${
                            isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                        }`}
                    />
                    <span
                        className={`absolute block w-5 md:w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMenuOpen ? "-rotate-45 top-2 md:top-2.5" : "top-3 md:top-3.5"
                        }`}
                    />
                </div>
            </button>

            {/* 모바일 배경 오버레이 - 더 어둡게 */}
            <div
                className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-30 md:hidden transition-all duration-200 ${
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={closeMenu}
            />

            <header
                className={`fixed z-40 transition-all ease-out ${
                    isMenuOpen ? "opacity-100 visible duration-300" : "opacity-0 invisible duration-200"
                } ${"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-20 md:right-8 md:left-auto md:translate-x-0 md:translate-y-0"} ${
                    isMenuOpen
                        ? " md:-translate-y-0 scale-100"
                        : "-translate-y-4 md:-translate-y-full scale-98 md:scale-100"
                }`}
            >
                <div
                    className={`
                    bg-slate-900/95 backdrop-blur-lg md:bg-transparent md:backdrop-blur-none
                    rounded-3xl md:rounded-2xl
                    shadow-2xl md:shadow-none
                    border border-slate-600/30 md:border-none
                    w-80 max-w-[calc(100vw-2rem)] md:w-auto
                    p-6 md:p-4
                `}
                >
                    <div className="text-center mb-6 md:hidden">
                        <h2 className="text-xl font-bold text-white mb-1">Navigation</h2>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full" />
                    </div>

                    <nav aria-label="주요 네비게이션">
                        <ul
                            className={`
                            flex flex-col gap-2 md:gap-1
                            min-w-[200px] md:min-w-[140px]
                        `}
                        >
                            {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                                <li
                                    key={item}
                                    className={`transform transition-all ease-out ${
                                        isMenuOpen
                                            ? "translate-x-0 opacity-100 duration-200"
                                            : "-translate-x-8 opacity-0 duration-100"
                                    }`}
                                    style={{
                                        transitionDelay: isMenuOpen ? `${index * 0.05 + 0.1}s` : "0s",
                                    }}
                                >
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={closeMenu}
                                        className={`
                                            nav-link relative group block transition-all duration-200
                                            text-lg md:text-base font-medium md:font-normal 
                                            text-slate-300 hover:text-white
                                            px-6 py-4 md:px-4 md:py-3
                                            rounded-xl 
                                            hover:bg-gradient-to-r hover:from-rose-500/20 hover:to-pink-500/20
                                            md:hover:bg-white/10
                                            text-center md:text-left
                                        `}
                                    >
                                        <span className="relative z-10">{item}</span>
                                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-1 md:left-4 md:translate-x-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 md:bg-blue-400 transition-all duration-200 group-hover:w-8 md:group-hover:w-16 rounded-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-6 pt-4 border-t border-slate-600/30 text-center md:hidden">
                        <p className="text-xs text-slate-400">이상철 • Frontend Developer</p>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
