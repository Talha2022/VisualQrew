interface ProjectInfoProps {
    description: string;
    role: string; // e.g. "Creative Direction, Imagery, Photography"
}

export default function ProjectInfo({ description, role }: ProjectInfoProps) {
    const roleItems = role.split(',').map((r) => r.trim());
    // Support two paragraphs split by double newline
    const paragraphs = description.split('\n\n').filter(Boolean);

    return (
        <section
            className="relative z-10 w-full bg-[#0e0e0e] px-8 py-20 md:px-16 md:py-28"
            style={{ marginTop: '-2px' }} // flush against hero
        >
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:justify-between md:gap-16">

                {/* Left — body text */}
                <div className="md:w-[58%]">
                    {paragraphs.map((para, i) => (
                        <p
                            key={i}
                            className={`text-white font-light leading-relaxed ${
                                i > 0 ? 'mt-6' : ''
                            }`}
                            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
                        >
                            {para}
                        </p>
                    ))}
                </div>

                {/* Right — role block */}
                <div className="mt-12 md:mt-0 md:w-[20%] flex flex-col gap-1">
                    <p className="text-white/50 text-[9px] font-semibold tracking-[0.25em] uppercase mb-2">
                        Role:
                    </p>
                    {roleItems.map((item) => (
                        <p
                            key={item}
                            className="text-white text-[11px] font-semibold tracking-[0.15em] uppercase leading-snug"
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
