interface ProjectDualImageProps {
    leftImage: string;
    rightImage: string;
    leftAlt?: string;
    rightAlt?: string;
}

export default function ProjectDualImage({
    leftImage,
    rightImage,
    leftAlt = '',
    rightAlt = '',
}: ProjectDualImageProps) {
    return (
        <section className="relative z-10 w-full bg-[#0e0e0e] px-4 pb-4 md:px-6 md:pb-6">
            {/* Framed container */}
            <div className="w-full overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                    {/* Left image */}
                    <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden">
                        <img
                            src={leftImage}
                            alt={leftAlt}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        />
                    </div>

                    {/* Right image */}
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
