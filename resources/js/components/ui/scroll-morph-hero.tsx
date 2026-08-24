import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface CardTarget {
    x: number;
    y: number;
    rotation: number;
    scale: number;
    opacity: number;
}

interface FlipCardProps {
    src: string;
    index: number;
    target: CardTarget;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;
const TOTAL_IMAGES = 20;
const MAX_SCROLL = 1200; // full range: 0 = text only, MAX = full circle formed

const LOCAL_ASSETS = [
    "/assets/home/1.jpeg",
    "/assets/home/2.jpeg",
    "/assets/home/3.jpeg",
    "/assets/home/herobg.jpeg",
];

const IMAGES = Array.from(
    { length: TOTAL_IMAGES },
    (_, i) => LOCAL_ASSETS[i % LOCAL_ASSETS.length],
);

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

// ---------------------------------------------------------------------------
// FlipCard
// ---------------------------------------------------------------------------
function FlipCard({ src, index, target }: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 overflow-hidden rounded-xl shadow-lg bg-gray-800"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`card-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 overflow-hidden rounded-xl shadow-lg bg-gray-900 flex flex-col items-center justify-center p-4 border border-white/10"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <p className="text-[8px] font-bold text-white/50 uppercase tracking-widest mb-1">
                        View
                    </p>
                    <p className="text-xs font-medium text-white">Details</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function ScrollMorphHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    // virtualScroll: 0 = start (text visible, cards hidden), MAX_SCROLL = circle fully formed
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    // Mouse parallax
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });
    const [parallaxValue, setParallaxValue] = useState(0);

    // Scroll progress 0→1
    const scrollProgress = useTransform(virtualScroll, [0, MAX_SCROLL], [0, 1]);
    const smoothProgress = useSpring(scrollProgress, { stiffness: 40, damping: 20 });
    const [progress, setProgress] = useState(0);

    // Text fades out as cards come in (progress 0→0.4)
    const textOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);
    const textY = useTransform(smoothProgress, [0, 0.35], [0, -30]);

    // Circle text fades in once circle is formed
    const circleTextOpacity = useTransform(smoothProgress, [0.75, 1], [0, 1]);
    const circleTextScale = useTransform(smoothProgress, [0.75, 1], [0.9, 1]);

    // Container size observer
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const obs = new ResizeObserver((entries) => {
            for (const e of entries) {
                setContainerSize({ width: e.contentRect.width, height: e.contentRect.height });
            }
        });
        obs.observe(el);
        setContainerSize({ width: el.offsetWidth, height: el.offsetHeight });
        return () => obs.disconnect();
    }, []);

    // Virtual scroll — intercepts wheel inside the container
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            // Only hijack if we haven't finished the animation yet, or user is scrolling back
            const next = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
            if (next !== scrollRef.current) {
                e.preventDefault();
            }
            scrollRef.current = next;
            virtualScroll.set(next);
        };

        let touchY = 0;
        const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY; };
        const onTouchMove = (e: TouchEvent) => {
            const delta = touchY - e.touches[0].clientY;
            touchY = e.touches[0].clientY;
            const next = Math.min(Math.max(scrollRef.current + delta, 0), MAX_SCROLL);
            scrollRef.current = next;
            virtualScroll.set(next);
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        el.addEventListener("touchstart", onTouchStart, { passive: true });
        el.addEventListener("touchmove", onTouchMove, { passive: true });
        return () => {
            el.removeEventListener("wheel", onWheel);
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchmove", onTouchMove);
        };
    }, [virtualScroll]);

    // Mouse parallax
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const norm = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseX.set(norm * 60);
        };
        el.addEventListener("mousemove", onMove);
        return () => el.removeEventListener("mousemove", onMove);
    }, [mouseX]);

    // Subscribe to derived values
    useEffect(() => {
        const u1 = smoothProgress.on("change", setProgress);
        const u2 = smoothMouseX.on("change", setParallaxValue);
        return () => { u1(); u2(); };
    }, [smoothProgress, smoothMouseX]);

    // Stable scatter positions (cards start here — off screen / invisible)
    const scatterPositions = useMemo(
        () =>
            IMAGES.map(() => ({
                x: (Math.random() - 0.5) * 1600,
                y: (Math.random() - 0.5) * 1000,
                rotation: (Math.random() - 0.5) * 180,
            })),
        [],
    );

    return (
        <div ref={containerRef} className="relative w-full h-full bg-black overflow-hidden">
            {/* dot grid */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '28px 28px' }}
            />
            <div className="flex h-full w-full items-center justify-center">

                {/* ── Text: visible at start, fades out as cards arrive ── */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="absolute z-10 flex flex-col items-center justify-center text-center pointer-events-none px-6 max-w-3xl"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-5">
                        THE IDEA DOESN'T CARE HOW IT WAS MADE.
                        <span className="block text-white/40">Neither do we.</span>
                    </h2>
                    <p className="text-sm md:text-base text-white/50 leading-relaxed mb-8 max-w-xl">
                        A camera. A set. A generated world. A practical effect. A synthetic frame.
                        <br className="hidden md:block" />
                        We use whatever the idea needs.
                    </p>
                    <p className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase">
                        Scroll to explore
                    </p>
                </motion.div>

                {/* ── Circle centre text: fades in once circle is formed ── */}
                <motion.div
                    style={{
                        opacity: circleTextOpacity,
                        scale: circleTextScale,
                    }}
                    className="absolute z-20 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <p className="text-base md:text-lg font-semibold text-white tracking-tight leading-snug">
                        REAL WHEN IT SHOULD BE.
                        <br />
                        <span className="text-white/50">UNREAL WHEN IT CAN BE.</span>
                    </p>
                </motion.div>

                {/* ── Cards ── */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {IMAGES.map((src, i) => {
                        // --- Scatter (starting) position ---
                        const scatter = scatterPositions[i];

                        // --- Circle (ending) position ---
                        const isMobile = containerSize.width < 768;
                        const minDim = Math.min(containerSize.width, containerSize.height);
                        const circleRadius = Math.min(minDim * 0.38, 280);
                        const angle = (i / TOTAL_IMAGES) * 360;
                        const rad = (angle * Math.PI) / 180;
                        const circle = {
                            x: Math.cos(rad) * circleRadius + parallaxValue * 0.3,
                            y: Math.sin(rad) * circleRadius,
                            rotation: angle + 90,
                            scale: isMobile ? 1.1 : 1.3,
                        };

                        // --- Two-phase progress ---
                        // Phase 1 (0→0.6): cards fly from scatter to circle
                        // Phase 2 (0.6→1): circle gently rotates / breathes
                        const arriveT = Math.min(Math.max((progress - 0) / 0.7, 0), 1);
                        // Stagger: each card starts arriving slightly later
                        const stagger = i / TOTAL_IMAGES;
                        const cardT = Math.min(Math.max((arriveT - stagger * 0.25) / 0.75, 0), 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - cardT, 3);

                        const rotateBonus = progress > 0.7
                            ? ((progress - 0.7) / 0.3) * 20 // subtle rotation of whole circle
                            : 0;

                        const target: CardTarget = {
                            x: lerp(scatter.x, circle.x, eased),
                            y: lerp(scatter.y, circle.y, eased),
                            rotation: lerp(scatter.rotation, circle.rotation + rotateBonus, eased),
                            scale: lerp(0.5, circle.scale, eased),
                            opacity: lerp(0, 1, Math.min(eased * 3, 1)), // fade in fast
                        };

                        return (
                            <FlipCard key={i} src={src} index={i} target={target} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
