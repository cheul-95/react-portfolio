import city from "../assets/images/city.png";
import { Mail, Phone, Github } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-sky-700 to-sky-100 flex flex-col justify-center items-center">
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Contact Me</h2>
                <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto gmarket-light">
                    프로젝트 협업이나 채용 관련 문의는 언제든 환영합니다.
                    <br />
                    아래 연락처로 편하게 연락주세요.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
                    <a
                        href="mailto:lsch9040@naver.com"
                        className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-4"
                    >
                        <div className="bg-sky-700 p-3 rounded-full">
                            <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                            <p className="text-sm text-gray-600">lsch9040@naver.com</p>
                        </div>
                    </a>

                    {/* 전화번호 */}
                    <a
                        href="tel:010-1234-5678"
                        className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-4"
                    >
                        <div className="bg-sky-700 p-3 rounded-full">
                            <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                            <p className="text-sm text-gray-600">010-2202-2752</p>
                        </div>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/cheul-95"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-4"
                    >
                        <div className="bg-sky-700 p-3 rounded-full">
                            <Github className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold text-gray-800 mb-1">GitHub</h3>
                            <p className="text-sm text-gray-600">@cheul-95</p>
                        </div>
                    </a>
                </div>
            </div>

            <img
                src={city}
                alt="City"
                className="absolute left-0 w-full opacity-10 pointer-events-none select-none bottom-[-32px] sm:bottom-[-64px] md:bottom-[-128px]"
            />
        </div>
    );
};

export default Contact;
