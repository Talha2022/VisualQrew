import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PortfolioGalleryProps {
    title?: string;
    archiveButton?: {
        text: string;
        href: string;
    };
    images?: Array<{
        src: string;
        alt: string;
        title?: string;
    }>;
    className?: string;
    maxHeight?: number;
    spacing?: string;
    onImageClick?: (index: number) => void;
    pauseOnHover?: boolean;
    marqueeRepeat?: number;
}

export function PortfolioGallery({
    title = "Browse our work",
    archiveButton = { text: "View gallery", href: "/work" },
    images: customImages,
    className = "",
    maxHeight = 120,
    spacing = "-space-x-72 md:-space-x-80",
    onImageClick,
    pauseOnHover = true,
    marqueeRepeat = 4,
}: PortfolioGalleryProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const defaultImages = [
        { src: "/assets/home/fullcardimg.jpeg", alt: "Visual Crew Work" },
        { src: "/assets/home/split1.jpg",       alt: "Brand Work" },
        { src: "/assets/home/split2.jpg",        alt: "AI Work" },
        { src: "/assets/home/split3.jpg",        alt: "Short Films" },
        { src: "/assets/home/herobg.jpeg",       alt: "Creative Direction" },
        { src: "/assets/home/1.jpeg",            alt: "Production" },
        { src: "/assets/home/2.jpeg",            alt: "Visual World" },
        { src: "/assets/home/3.jpeg",            alt: "Cinematic Frame" },
        { src: "/assets/home/fullcardimg.jpeg",  alt: "Visual Crew" },
        { src: "/assets/home/split1.jpg",        alt: "Brand Identity" },
    ];

    const images = customImages || defaultImages;

    return (
        <section
            aria-label={title}
            className={`relative bg-black py-20 px-4 overflow-hidden ${className}`}
            id="archives"
        >
            {/* dot grid */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #888 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto overflow-hidden">
                {/* Header */}
                <div className="text-center pt-16 pb-8 px-8">
                    
                    <h2 className="text-4xl md:text-6xl font-extralight text-white mb-8 tracking-tight">
                        {title}
                    </h2>
                    <a
                        href={archiveButton.href}
                        className="inline-flex items-center gap-3 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors group mb-20"
                    >
                        <span>{archiveButton.text}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Desktop — 3D overlapping fan */}
                <div className="hidden md:block relative overflow-hidden h-[400px] -mb-[200px]">
                    <div className={`flex ${spacing} pb-8 pt-40 items-end justify-center`}>
                        {images.map((image, index) => {
                            const totalImages = images.length;
                            const middle = Math.floor(totalImages / 2);
                            const distanceFromMiddle = Math.abs(index - middle);
                            const staggerOffset = maxHeight - distanceFromMiddle * 20;
                            const zIndex = totalImages - index;
                            const isHovered = hoveredIndex === index;
                            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
                            const yOffset = isHovered ? -120 : isOtherHovered ? 0 : -staggerOffset;

                            return (
                                <motion.div
                                    key={index}
                                    className="group cursor-pointer flex-shrink-0"
                                    style={{ zIndex }}
                                    initial={{
                                        transform: `perspective(5000px) rotateY(-45deg) translateY(200px)`,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.05,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    onClick={() => onImageClick?.(index)}
                                >
                                    <div
                                        className="relative aspect-video w-64 md:w-80 lg:w-96 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                                        style={{
                                            boxShadow: `rgba(0,0,0,0.01) 0.8px 0px 0.8px 0px,
                                                rgba(0,0,0,0.03) 2.4px 0px 2.4px 0px,
                                                rgba(0,0,0,0.08) 6.4px 0px 6.4px 0px,
                                                rgba(0,0,0,0.25) 20px 0px 20px 0px`,
                                        }}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover object-left-top"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile — marquee */}
                <div className="block md:hidden relative pb-8">
                    <style>{`
                        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                        .animate-marquee { animation: marquee var(--duration, 40s) linear infinite; }
                        .marquee-group:hover .animate-marquee { animation-play-state: paused; }
                    `}</style>
                    <div className={cn(
                        "marquee-group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
                        "flex-row",
                    )}>
                        {Array(marqueeRepeat).fill(0).map((_, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "flex shrink-0 justify-around [gap:var(--gap)]",
                                    "animate-marquee flex-row",
                                )}
                            >
                                {images.map((image, index) => (
                                    <div
                                        key={`${i}-${index}`}
                                        className="group cursor-pointer flex-shrink-0"
                                        onClick={() => onImageClick?.(index)}
                                    >
                                        <div
                                            className="relative aspect-video w-64 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                                            style={{
                                                boxShadow: `rgba(0,0,0,0.25) 20px 0px 20px 0px`,
                                            }}
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover object-left-top"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
