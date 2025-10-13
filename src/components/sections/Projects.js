import React from "react";

const Projects = () => {
    return (
        <section className="w-full py-16 bg-gradient-to-b from-sky-900 to-sky-700" aria-labelledby="projects-title">
            <header className={`text-center mb-16 transition-all duration-1000 opacity-100 translate-y-0`}>
                <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 ">
                    <span className="bg-gradient-to-r from-green-100 to-indigo-300 bg-clip-text text-transparent ml-2">
                        PROJECTS
                    </span>
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full" />
            </header>
        </section>
    );
};

export default Projects;
