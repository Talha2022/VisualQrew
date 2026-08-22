export default function About() {
    return (
        <section className="bg-black px-10 py-8">
            {/* Top row */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                {/* Left */}
                <div className="md:w-1/2">
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
                </div>

                {/* Right */}
                <div className="flex flex-col gap-4 md:w-[42%] md:pt-1 md:ml-auto">
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
                </div>
            </div>

            {/* Bottom — 3 image cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
                {[
                    '/assets/home/1.jpeg',
                    '/assets/home/2.jpeg',
                    '/assets/home/3.jpeg',
                ].map((src, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-2xl bg-neutral-900 aspect-[3/3.5]"
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
        </section>
    );
}
