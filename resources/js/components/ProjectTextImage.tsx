interface ProjectTextImageProps {
    paragraphs: string[];
    image: string;
    imageAlt?: string;
}

export default function ProjectTextImage({
    paragraphs,
    image,
    imageAlt = '',
}: ProjectTextImageProps) {
    return (
        <section className="relative z-10 w-full bg-[#0e0e0e] px-4 pb-4 md:px-6 md:pb-6">
            {/* Centered text block */}
            <div className="mx-auto max-w-2xl py-20 md:py-28 px-4 text-center md:text-left">
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

            {/* Full-width image — same width/padding as ProjectDualImage */}
            <div
                className="w-full overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
                <div className="w-full aspect-[16/9] overflow-hidden">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                </div>
            </div>
        </section>
    );
}
