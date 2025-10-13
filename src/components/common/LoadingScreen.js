import { useState, useEffect } from "react";
import StarCanvas from "../hooks/useStarCanvas";
const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        // 진행률 애니메이션
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    // 로딩 완료 후 페이드아웃
                    setTimeout(() => {
                        setTimeout(() => onComplete?.(), 300);
                        setIsAnimating(false);
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 100);

        return () => clearInterval(progressInterval);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br bg-slate-900 transition-opacity duration-300 ${
                isAnimating ? "opacity-100" : "opacity-0"
            }`}
        >
            <StarCanvas />
            <div className="text-center z-10">
                {/* 타이틀 */}
                <h2 className="text-4xl font-bold text-white mb-4 animate-pulse">PORTFOLIO</h2>

                {/* 프로그레스 바 */}
                <div className="w-80 max-w-xs mx-auto">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-purple-300 text-sm">Loading...</span>
                        <span className="text-purple-300 text-sm">{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-purple-900/50 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* 로딩 텍스트들 */}
                <div className="mt-6 h-6">
                    {progress < 30 && <p className="text-purple-300 text-sm animate-fade-in">Preparing portfolio...</p>}
                    {progress >= 30 && progress < 60 && (
                        <p className="text-purple-300 text-sm animate-fade-in">Loading projects...</p>
                    )}
                    {progress >= 60 && progress < 90 && (
                        <p className="text-purple-300 text-sm animate-fade-in">Almost ready...</p>
                    )}
                    {progress >= 90 && <p className="text-purple-300 text-sm animate-fade-in">Welcome! 🚀</p>}
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
