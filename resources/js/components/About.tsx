import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

const slideLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease },
    },
};

const slideRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease },
    },
};

const cardVariants = (delay = 0) => ({
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease, delay },
    },
});

const images = [
    '/assets/home/1.jpeg',
    '/assets/home/2.jpeg',
    '/assets/home/3.jpeg',
];

export default function About() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            const cardWidth = el.scrollWidth / images.length;
            const index = Math.round(el.scrollLeft / cardWidth);
            setActiveIndex(index);
        };

        el.addEventListener('scroll', handleScroll, { passive: true });
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToIndex = (i: number) => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = el.scrollWidth / images.length;
        el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
    };

    return (
        <section className="bg-black px-10 py-8 relative overflow-hidden">
            {/* dot grid */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '28px 28px' }}
            />

            {/* Top row */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                {/* Left */}
                <motion.div
                    className="md:w-1/2"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <span className="text-xs font-semibold text-orange-500">
                        Behind the Designs
                    </span>
                    <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white md:text-3xl">
                        Shaping
                        <br />
                        Experiences That
                        <br />
                        Make Life Simpler
                    </h2>
                </motion.div>

                {/* Right */}
                <motion.div
                    className="flex flex-col gap-4 md:w-[42%] md:pt-1 md:ml-auto"
                    variants={slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="text-sm font-semibold leading-snug text-white md:text-base">
                        I'm a product designer focused on
                        building clean, intuitive interfaces
                        that solve real-world problems.
                    </p>

                    <div className="flex items-center gap-4">
                        <div>
                            <p className="text-xs text-white/40">Let's Build Something</p>
                            <p className="text-xs text-white/40">Meaningful Together</p>
                        </div>

                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-full bg-orange-500 pl-4 pr-1.5 py-1.5 text-xs font-semibold text-white hover:bg-orange-600 transition-colors whitespace-nowrap"
                        >
                            Get in touch
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom — swipeable on mobile, grid on desktop */}
            <div className="mt-6">
                {/* Mobile: horizontal scroll / swipe */}
                <div
                    ref={scrollRef}
                    className="flex md:hidden gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-10 px-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="flex-none w-[75vw] snap-center overflow-hidden rounded-2xl bg-neutral-900 aspect-[3/3.5]"
                        >
                            <img
                                src={src}
                                alt={`about-${i + 1}`}
                                className="h-full w-full object-cover grayscale"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Mobile dots */}
                <div className="flex md:hidden justify-center gap-2 mt-4">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToIndex(i)}
                            className="rounded-full transition-all duration-300 focus:outline-none"
                            style={{
                                width: activeIndex === i ? '24px' : '8px',
                                height: '8px',
                                background: activeIndex === i
                                    ? 'linear-gradient(90deg, #f97316, #ea580c)'
                                    : 'rgba(249,115,22,0.3)',
                            }}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Desktop: 3-column grid with animations */}
                <div className="hidden md:grid md:grid-cols-3 gap-3">                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            className="overflow-hidden rounded-2xl bg-neutral-900 aspect-[3/3.5]"
                            variants={cardVariants(i * 0.15)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <img
                                src={src}
                                alt={`about-${i + 1}`}
                                className="h-full w-full object-cover grayscale"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
