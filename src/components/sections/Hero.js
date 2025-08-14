import heroImage from "../assets/images/myImage.png";

function Hero() {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16 ">
            <div className="grid lg:grid-cols-2 gap-12 items-center justify-center max-w-7xl mx-auto px-4 pt-16 pb-16">
                <div className="flex justify-center lg:justify-center mb-8 lg:mb-0">
                    <img
                        src={heroImage}
                        alt="hero image"
                        className="aspect-square object-cover object-center rounded-full w-96"
                        loading="eager"
                        decoding="async"
                    />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Welcome to My{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Portfolio
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                        I am a passionate developer who loves creating amazing digital experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                            View My Work
                        </button>
                        <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
