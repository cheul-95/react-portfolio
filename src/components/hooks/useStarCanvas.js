// src/hooks/useStarCanvas.js
import React, { useRef, useEffect } from "react";

// 별 애니메이션을 위한 순수 함수들
const createStars = (width, height, count = 120) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.5 + 0.5, // 더 작고 세련된 크기
            speed: Math.random() * 1.2 + 0.2,
            opacity: Math.random() * 0.7 + 0.3,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.015,
            twinkleSpeed: Math.random() * 0.03 + 0.01,
            twinkleOffset: Math.random() * Math.PI * 2,
            type: Math.random() > 0.8 ? "shooting" : "normal", // 20% 확률로 유성
            trail: [],
        });
    }
    return stars;
};

const drawStar = (ctx, x, y, size, rotation, opacity) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);

    // 더 세련된 별 - 둥근 점 + 십자 광선
    const centerSize = size * 0.8;
    const rayLength = size * 2;

    // 중앙 둥근 점 그리기
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, centerSize);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
    gradient.addColorStop(0.3, `rgba(220, 230, 255, ${opacity * 0.8})`);
    gradient.addColorStop(1, `rgba(150, 180, 255, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, centerSize, 0, Math.PI * 2);
    ctx.fill();

    // 4방향 광선 (더 자연스럽게)
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
    ctx.lineWidth = size * 0.15;
    ctx.lineCap = "round";

    // 수직 광선
    ctx.beginPath();
    ctx.moveTo(0, -rayLength);
    ctx.lineTo(0, rayLength);
    ctx.stroke();

    // 수평 광선
    ctx.beginPath();
    ctx.moveTo(-rayLength, 0);
    ctx.lineTo(rayLength, 0);
    ctx.stroke();

    // 대각선 광선 (더 짧게)
    const diagonalLength = rayLength * 0.7;
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.25})`;
    ctx.lineWidth = size * 0.08;

    ctx.beginPath();
    ctx.moveTo(-diagonalLength * 0.7, -diagonalLength * 0.7);
    ctx.lineTo(diagonalLength * 0.7, diagonalLength * 0.7);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(diagonalLength * 0.7, -diagonalLength * 0.7);
    ctx.lineTo(-diagonalLength * 0.7, diagonalLength * 0.7);
    ctx.stroke();

    ctx.restore();
};

const drawShootingStar = (ctx, star) => {
    if (star.trail.length < 2) return;

    ctx.save();

    // 꼬리 그리기
    ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.6})`;
    ctx.lineWidth = star.size * 0.5;
    ctx.lineCap = "round";

    const gradient = ctx.createLinearGradient(star.trail[0].x, star.trail[0].y, star.x, star.y);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0.5, `rgba(200, 220, 255, ${star.opacity * 0.3})`);
    gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);

    ctx.strokeStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(star.trail[0].x, star.trail[0].y);
    for (let i = 1; i < star.trail.length; i++) {
        ctx.lineTo(star.trail[i].x, star.trail[i].y);
    }
    ctx.stroke();

    // 별 머리 부분 더 밝게
    drawStar(ctx, star.x, star.y, star.size * 1.5, star.rotation, star.opacity);

    ctx.restore();
};

export const useStarCanvas = () => {
    const canvasRef = useRef(null);

    return { canvasRef };
};

// 별 캔버스 컴포넌트 - React.memo로 불필요한 리렌더링 방지
const StarCanvas = React.memo(() => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const starsRef = useRef([]);
    const isInitialized = useRef(false);

    useEffect(() => {
        if (isInitialized.current) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        // 캔버스 크기 설정 함수
        const resizeCanvas = () => {
            // 캔버스 크기는 뷰포트 크기로만 설정
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // 하지만 별들은 전체 문서 높이 기준으로 생성
            const fullHeight = Math.max(
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight,
                document.body.scrollHeight,
                document.body.offsetHeight
            );

            // 별들 재생성 (더 긴 범위에서)
            starsRef.current = createStars(canvas.width, fullHeight);
        };

        // 초기 설정
        resizeCanvas();

        // 애니메이션 루프
        const animate = () => {
            if (!canvas || !ctx) return;

            // 우주 같은 그라데이션 배경 (선택사항)
            // ctx.fillStyle = 'rgba(15, 15, 35, 0.1)';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            starsRef.current.forEach((star) => {
                // 반짝임 효과
                const twinkle = Math.sin(Date.now() * star.twinkleSpeed + star.twinkleOffset);
                const currentOpacity = star.opacity + twinkle * 0.3;

                if (star.type === "shooting") {
                    // 유성 꼬리 추적
                    star.trail.push({ x: star.x, y: star.y });
                    if (star.trail.length > 20) star.trail.shift();

                    drawShootingStar(ctx, star);
                } else {
                    // 일반 별
                    drawStar(ctx, star.x, star.y, star.size, star.rotation, Math.max(0, currentOpacity));
                }

                // 별 이동 및 회전
                star.y += star.speed;
                star.rotation += star.rotationSpeed;

                // 유성은 대각선으로 움직임
                if (star.type === "shooting") {
                    star.x += star.speed * 0.5;
                }

                // 화면 밖으로 나가면 재생성
                if (star.y > canvas.height + 50 || (star.type === "shooting" && star.x > canvas.width + 50)) {
                    star.y = -50;
                    star.x = Math.random() * canvas.width;
                    star.rotation = Math.random() * Math.PI * 2;
                    star.twinkleOffset = Math.random() * Math.PI * 2;
                    star.trail = []; // 꼬리 초기화

                    // 가끔 유성으로 변경
                    if (Math.random() > 0.95) {
                        star.type = "shooting";
                        star.speed = Math.random() * 3 + 2;
                        star.size = Math.random() * 1.5 + 1;
                    } else {
                        star.type = "normal";
                    }
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        // 리사이즈 핸들러
        const handleResize = () => resizeCanvas();
        window.addEventListener("resize", handleResize);

        // 애니메이션 시작
        animate();
        isInitialized.current = true;

        // 클린업
        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            isInitialized.current = false;
        };
    }, []); // 빈 의존성 배열

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none  "
            style={{
                zIndex: 0,
                width: "100vw",
                height: "100vh",
            }}
        />
    );
});

StarCanvas.displayName = "StarCanvas";

export { StarCanvas };
export default StarCanvas;
