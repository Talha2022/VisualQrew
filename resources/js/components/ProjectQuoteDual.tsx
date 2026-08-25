interface ProjectQuoteDualProps {
    quote: string;
    leftImage: string;
    rightImage: string;
    leftAlt?: string;
    rightAlt?: string;
}

export default function ProjectQuoteDual({
    quote,
    leftImage,
    rightImage,
    leftAlt = '',
    rightAlt = '',
}: ProjectQuoteDualProps) {
    return (
        <section className="relative z-10 w-full bg-[#0e0e0e] px-4 pb-4 md:px-6 md:pb-6">
            {/* Big bold quote */}
            <div className="w-full py-16 md:py-24 px-4 md:px-8 flex items-center justify-center">
                <p
                    className="text-white font-black uppercase text-center leading-[1.05] max-w-5xl"
                    style={{
                        fontSize: 'clamp(2rem, 5.5vw, 5.5rem)',
                        letterSpacing: '-0.01em',
                    }}
                >
                    {quote}
                </p>
            </div>

            {/* Dual images — same style as ProjectDualImage */}
            <div
                className="w-full overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
                <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                    <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden">
                        <img
                            src={leftImage}
                            alt={leftAlt}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        />
                    </div>
                    <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden">
                        <img
                            src={rightImage}
                            alt={rightAlt}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
