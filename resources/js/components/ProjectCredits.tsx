interface CreditItem {
    label: string;
    value: string;
}

interface ProjectCreditsProps {
    paragraphs: string[];
    credits: CreditItem[];
}

export default function ProjectCredits({ paragraphs, credits }: ProjectCreditsProps) {
    return (
        <section className="relative z-10 w-full bg-[#0e0e0e] px-8 py-16 md:px-16 md:py-20">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:justify-between md:gap-16">

                {/* Left — body text */}
                <div className="md:w-[58%]">
                    {paragraphs.map((para, i) => (
                        <p
                            key={i}
                            className={`text-white font-light leading-relaxed ${i > 0 ? 'mt-6' : ''}`}
                            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
                        >
                            {para}
                        </p>
                    ))}
                </div>

                {/* Right — credits */}
                <div className="mt-12 md:mt-0 md:w-[28%] flex flex-col gap-4">
                    <p className="text-white/50 text-[9px] font-semibold tracking-[0.25em] uppercase mb-1">
                        Credits
                    </p>
                    {credits.map((item) => (
                        <div key={item.label}>
                            <p className="text-white/40 text-[9px] font-semibold tracking-[0.2em] uppercase leading-none mb-0.5">
                                {item.label}:
                            </p>
                            <p className="text-white text-[10px] font-semibold tracking-[0.15em] uppercase leading-snug">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
