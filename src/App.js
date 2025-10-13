import { lazy, Suspense, useState } from "react";
import Header from "./components/layout/Header/Header.js";
import LoadingScreen from "./components/common/LoadingScreen";
import { StarCanvas } from "./components/hooks/useStarCanvas";

// Lazy load sections
const Hero = lazy(() => import("./components/sections/Hero"));
const About = lazy(() => import("./components/sections/About"));
const SkillsSection = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));

// Fallback 컴포넌트
const SectionLoader = () => (
    <div className="section-loader">
        <div className="spinner"></div>
    </div>
);

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="app-container">
            {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            {!isLoading && (
                <>
                    <Header />
                    <main>
                        <section id="home">
                            <Suspense fallback={<SectionLoader />}>
                                <Hero />
                            </Suspense>
                        </section>
                        <section id="about">
                            <Suspense fallback={<SectionLoader />}>
                                <About />
                            </Suspense>
                        </section>
                        <section id="skills">
                            <Suspense fallback={<SectionLoader />}>
                                <SkillsSection />
                            </Suspense>
                        </section>
                        <section id="projects">
                            <Suspense fallback={<SectionLoader />}>
                                <Projects />
                            </Suspense>
                        </section>
                    </main>
                    <StarCanvas />
                </>
            )}
        </div>
    );
}

export default App;
