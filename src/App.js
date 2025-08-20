import { createContext } from "react";
import Header from "./components/layout/Header/Header.js";
// import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
// import Skills from "./components/sections/Skills/Skills";
// import Projects from "./components/sections/Projects/Projects";
// import Contact from "./components/sections/Contact/Contact";
// import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
// import LoadingSpinner from "./components/common/LoadingSpinner/LoadingSpinner";
// import useTheme from "./hooks/useTheme";

export const AppContext = createContext();

function App() {
    // const [theme, setTheme] = useState("dark");
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [currentSection, setCurrentSection] = useState("home");
    //const { theme: currentTheme, toggleTheme } = useTheme();
    //const activeSection = useScrollSpy(["home", "about", "skills", "projects", "contact"]);

    // Global Context Value
    // const contextValue = {
    // theme: currentTheme,
    //toggleTheme,
    // isMenuOpen,
    // setIsMenuOpen,
    //currentSection: activeSection,
    // };
    return (
        <main className="">
            <Header />

            <main>
                <section id="home">
                    <Hero />
                </section>

                <section id="about">
                    <About />
                </section>
                {/* 
                            <section id="skills">
                                <Skills />
                            </section>

                            <section id="projects">
                                <Projects />
                            </section>

                            <section id="contact">
                                <Contact />
                            </section> */}
            </main>

            {/*<Footer /> */}
        </main>
    );
}

export default App;
