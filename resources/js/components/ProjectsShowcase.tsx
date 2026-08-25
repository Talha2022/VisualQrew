import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    src: string;
    alt: string;
    href?: string;
    label?: string;
    year?: string;
    hoverText?: string;
}

interface ProjectsShowcaseProps {
    projects?: Project[];
    sectionLabel?: string;
}

const defaultProjects: Project[] = [
    {
        src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
        alt: 'Brand Identity — Nexora',
        hoverText: 'BRAND IDENTITY',
        label: 'Brand Identity',
        year: '2025',
        href: '#',
    },
    {
        src: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80',
        alt: 'AI Campaign — Drift',
        hoverText: 'AI CAMPAIGN',
        label: 'AI Campaign',
        year: '2025',
        href: '#',
    },
    {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        alt: 'Short Film — Echoes',
        hoverText: 'SHORT FILM',
        label: 'Short Film',
        year: '2024',
        href: '#',
    },
    {
        src: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&q=80',
        alt: 'Packaging — Soleil',
        hoverText: 'PACKAGING',
        label: 'Packaging',
        year: '2024',
        href: '#',
    },
];

function chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}

export default function ProjectsShowcase({ projects = defaultProjects, sectionLabel }: ProjectsShowcaseProps) {
    const pairs = chunk(projects, 2);
    const label = sectionLabel ?? 'Projects';

    return (
        <section className="w-full bg-[#111111] px-6 py-20 md:px-12 md:py-24">
            {/* Header label */}
            <p className="mb-16 font-mono text-xs tracking-widest text-white/60 uppercase">
                {label} ({projects.length.toString().padStart(2, '0')})
            </p>

            {/* Pairs */}
            <div className="flex flex-col gap-24 md:gap-40">
                {pairs.map((pair, pairIdx) => (
                    <PairRow key={pairIdx} pair={pair} pairIdx={pairIdx} />
                ))}
            </div>
        </section>
    );
}

function PairRow({ pair, pairIdx }: { pair: Project[]; pairIdx: number }) {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const isEven = pairIdx % 2 === 0;

    const leftWidth  = isEven ? 'md:w-[42%]' : 'md:w-[28%]';
    const rightWidth = isEven ? 'md:w-[28%]' : 'md:w-[42%]';
    const leftAspect  = isEven ? 'aspect-[4/3]' : 'aspect-[3/4]';
    const rightAspect = isEven ? 'aspect-[3/4]' : 'aspect-[4/3]';

    const hoveredProject = hoveredIdx !== null ? pair[hoveredIdx] : null;
    const hoverLabel = hoveredProject?.hoverText ?? hoveredProject?.alt ?? '';

    return (
        <div className="relative">
            {/* Giant hover text — centered over the whole row */}
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {hoveredIdx !== null && (
                        <motion.p
                            key={hoverLabel}
                            className="text-white font-black uppercase leading-[0.9] text-center select-none px-4"
                            style={{
                                fontSize: 'clamp(4rem, 11vw, 11rem)',
                                letterSpacing: '-0.02em',
                            }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {hoverLabel.split(' ').map((word, i) => (
                                <motion.span
                                    key={i}
                                    className="block overflow-hidden"
                                    variants={{
                                        hidden: {},
                                        visible: {},
                                        exit: {},
                                    }}
                                >
                                    <motion.span
                                        className="block"
                                        variants={{
                                            hidden: { y: '110%', opacity: 0 },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    duration: 0.45,
                                                    ease: [0.22, 1, 0.36, 1],
                                                    delay: i * 0.07,
                                                },
                                            },
                                            exit: {
                                                y: '-60%',
                                                opacity: 0,
                                                transition: {
                                                    duration: 0.3,
                                                    ease: [0.4, 0, 1, 1],
                                                    delay: i * 0.04,
                                                },
                                            },
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                </motion.span>
                            ))}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            {/* Images row */}
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-0">
                {/* Left image */}
                {pair[0] && (
                    <ProjectImage
                        project={pair[0]}
                        index={pairIdx * 2}
                        className={`w-full ${leftWidth} md:mt-0`}
                        aspectClass={leftAspect}
                        isAnyHovered={hoveredIdx !== null}
                        isHovered={hoveredIdx === 0}
                        onHover={() => setHoveredIdx(0)}
                        onLeave={() => setHoveredIdx(null)}
                    />
                )}

                {/* Spacer */}
                <div className="hidden md:block flex-1" />

                {/* Right image */}
                {pair[1] && (
                    <ProjectImage
                        project={pair[1]}
                        index={pairIdx * 2 + 1}
                        className={`w-full ${rightWidth} md:mt-16`}
                        aspectClass={rightAspect}
                        isAnyHovered={hoveredIdx !== null}
                        isHovered={hoveredIdx === 1}
                        onHover={() => setHoveredIdx(1)}
                        onLeave={() => setHoveredIdx(null)}
                    />
                )}
            </div>
        </div>
    );
}

function ProjectImage({
    project,
    index,
    className,
    aspectClass,
    isAnyHovered,
    isHovered,
    onHover,
    onLeave,
}: {
    project: Project;
    index: number;
    className: string;
    aspectClass: string;
    isAnyHovered: boolean;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    const Tag = project.href ? 'a' : 'div';
    const linkProps = project.href ? { href: project.href } : {};

    return (
        <Tag
            {...(linkProps as any)}
            className={`block ${className}`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Image */}
            <div className={`relative overflow-hidden ${aspectClass}`}>
                <img
                    src={project.src}
                    alt={project.alt}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                        isHovered
                            ? 'grayscale-0 scale-[1.04]'
                            : isAnyHovered
                            ? 'grayscale opacity-40'
                            : 'grayscale'
                    }`}
                />

                {/* Index number */}
                <span
                    className={`absolute bottom-3 right-4 font-mono text-[10px] tracking-widest text-white/40 transition-opacity duration-300 ${
                        isAnyHovered ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-center justify-between">
                <div>
                    {project.label && (
                        <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/35">
                            {project.label}
                        </p>
                    )}
                    <p className={`mt-0.5 text-sm transition-colors duration-300 ${isHovered ? 'text-white' : 'text-white/60'}`}>
                        {project.alt}
                    </p>
                </div>
                {project.year && (
                    <span className="text-[10px] font-mono text-white/25">{project.year}</span>
                )}
            </div>
        </Tag>
    );
}
