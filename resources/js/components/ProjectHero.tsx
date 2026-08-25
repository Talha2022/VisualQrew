interface ProjectHeroProps {
    imageSrc: string;
    headlineTop?: string;
    headlineBottom?: string;
}

export default function ProjectHero({
    imageSrc,
    headlineTop = 'VISUAL',
    headlineBottom = 'NEXORA',
}: ProjectHeroProps) {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            {/* Full-bleed background image */}
            <img
                src={imageSrc}
                alt={`${headlineTop} ${headlineBottom}`}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay — heavier at top-left so headline reads clean */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/20 pointer-events-none" />

            {/* ── Main headline — upper left ── */}
            <div className="absolute top-[15%] left-6 md:left-10 z-10">
                <h1
                    className="font-black uppercase text-white"
                    style={{
                        fontSize: 'clamp(3.5rem, 10.5vw, 10.5rem)',
                        lineHeight: 0.9,
                        letterSpacing: '-0.02em',
                    }}
                >
                    {headlineTop}
                    <br />
                    {headlineBottom}
                </h1>
            </div>

            {/* ── Bottom-right: VisualCrew branding ── */}
            <div className="absolute bottom-7 right-7 md:bottom-8 md:right-10 z-10">
                <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">
                    VisualCrew
                </span>
            </div>
        </section>
    );
}
