export default function WhyChooseUs() {
    return (
        <section className="bg-black px-10 py-10 relative overflow-hidden">
            {/* dot grid */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '28px 28px' }}
            />
            {/* Label */}
            <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                <span className="text-xs text-white/50">Why choose us</span>
            </div>

            {/* Heading + social icons on same line */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white leading-tight md:text-4xl">
                    Meet The Minds
                    <br />
                    <span className="text-white/60">Behind The Work</span>
                </h2>

                <div className="flex items-center gap-6">
                    {/* X (Twitter) */}
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                    {/* Avatar / profile */}
                    <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors overflow-hidden">
                        <img src="/assets/home/2.jpeg" alt="profile" className="h-full w-full object-cover" />
                    </a>
                    {/* LinkedIn */}
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Main content — image left, info right */}
            <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-28">
                {/* Left — tall image */}
                <div className="w-full overflow-hidden rounded-2xl md:w-[38%] aspect-[3/3]">
                    <img
                        src="/assets/home/1.jpeg"
                        alt="team"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Right — content */}
                <div className="flex flex-1 flex-col gap-6">
                    {/* Top content */}
                    <div className="flex flex-col gap-6">
                        {/* Description */}
                        <p className="text-sm leading-relaxed text-right text-white/80 md:text-base">
                            At Visual Crew, we bring together{' '}
                            <span className="font-bold text-white">directors,</span>{' '}<br/>
                            <span className="font-bold text-white">storytellers,</span>{' '}
                            and makers to craft bold, thoughtful<br/>
                            digital experiences made with care and curiosity.
                        </p>

                        {/* Stats row */}
                        <div className="flex items-center justify-between gap-6">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                                </svg>
                                <div>
                                    <p className="text-xs text-white/80">Over 100 Fields</p>
                                    <p className="text-xs text-white/40">12 Countries Over World</p>
                                </div>
                            </div>

                            {/* Avatars */}
                            <div className="flex items-center">
                                <div className="flex -space-x-2">
                                    {['/assets/home/1.jpeg', '/assets/home/2.jpeg', '/assets/home/3.jpeg'].map((src, i) => (
                                        <img key={i} src={src} alt="" className="h-7 w-7 rounded-full border-2 border-black object-cover" />
                                    ))}
                                </div>
                                <span className="ml-2 text-xs text-white/60">12</span>
                            </div>
                        </div>
                    </div>

                    {/* Spacer pushes cards to bottom */}
                    <div className="flex-1" />

                    {/* Two stat cards — pinned to bottom */}
                    <div className="grid grid-cols-2 gap-3 h-64">
                        {/* Card 1 — dark */}
                        <div className="flex flex-col justify-between rounded-2xl bg-neutral-900 p-5 h-full">
                            <div>
                                <p className="text-4xl font-bold text-white">400+</p>
                                <p className="mt-1 text-xs text-white/40">Satisfied Clients</p>
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-y-2 gap-x-1">
                                {['Film', 'Events', 'Music', 'Brand', 'Content', 'Ad Films'].map((tag) => (
                                    <span key={tag} className="text-[10px] text-white/30">{tag}</span>
                                ))}
                            </div>
                            <a
                                href="#"
                                className="mt-5 w-full rounded-full bg-orange-500 py-2 text-center text-xs font-semibold text-white hover:bg-orange-600 transition-colors"
                            >
                                Book a call
                            </a>
                        </div>

                        {/* Card 2 — red/image */}
                        <div className="relative overflow-hidden rounded-2xl h-full">
                            <img
                                src="/assets/home/herobg.jpeg"
                                alt="fact"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-red-700/70" />
                            <div className="relative z-10 flex flex-col justify-between h-full p-5">
                                <div>
                                    <p className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">Visual Crew Fact</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-white">230+</p>
                                    <p className="mt-1 text-xs text-white/70">Projects carefully launched worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
