import React from 'react';

const testimonials = [
    {
        quote: "Jay's the real deal. Not only a Framer pro, but he truly cares—bringing ideas, polish, and extra miles we didn't even ask for. On Lorikeet, he turned loose homepage hero concepts into a live staging link in just a day, completely reshaping what we thought was possible.",
        author: "Dinesh Dave",
        role: "CO-FOUNDER & CREATIVE DIRECTOR",
        company: "WORK IS PLAY",
        avatar: "https://i.pravatar.cc/150?u=dinesh",
    },
    {
        quote: "Jay is a one-of-a-kind creative mind. He's always coming up with mind-blowing ideas, and I've had the pleasure of working with him on various projects over the years. Jay consistently delivers exceptional results and never underperforms.",
        author: "Max Trudel",
        role: "DIRECTOR / DOP",
        company: "SIDE HIT FILMS",
        avatar: "https://i.pravatar.cc/150?u=max",
    },
    {
        quote: "Jay's versatility is his superpower. Over the years working with Boombox, he's proven time and time again that no creative challenge is too big, too niche, or too wild. From 2D animations to 3D renders and even web design, his range is extraordinary.",
        author: "TJ Walker",
        role: "HEAD OF PRODUCTION",
        company: "BOOMBOX",
        avatar: "https://i.pravatar.cc/150?u=tj",
    },
    {
        quote: "Jay is truly in a league of his own. Not only is he incredibly talented and creative, but he's also easy and fun to work with. The final result is hands down the best agency website I've ever seen. Couldn't recommend him more.",
        author: "Max Gilberg",
        role: "FOUNDING PARTNER & CREATIVE DIRECTOR",
        company: "MAJOR MEDIA AGENCY",
        avatar: "https://i.pravatar.cc/150?u=gilberg",
    },
];

export function TestimonialsSection() {
    return (
        <section className="relative bg-black py-24 overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes t-scroll {
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .t-slider {
                        display: flex;
                        width: max-content;
                        animation: t-scroll 40s linear infinite;
                    }
                    .t-slider:hover { animation-play-state: paused; }
                `,
            }} />

            {/* dot grid */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <div className="w-8 h-px bg-white/25" />
                        <span className="text-white/30 text-[9px] font-mono tracking-[0.35em]">
                            CLIENT · TESTIMONIALS
                        </span>
                        <div className="w-8 h-px bg-white/25" />
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[0.12em] text-white mb-5 leading-tight uppercase">
                        NICE THINGS PEOPLE SAID
                    </h2>
                    <p className="text-white/50 text-sm font-light tracking-[0.2em] uppercase">
                        AFTER WE MADE THINGS.
                    </p>
                </div>
            </div>

            {/* Slider */}
            <div className="relative py-8">
                <div className="t-slider gap-5 px-6">
                    {[...testimonials, ...testimonials].map((t, i) => {
                        const offset =
                            i % 3 === 0
                                ? '-translate-y-6'
                                : i % 3 === 1
                                  ? 'translate-y-6'
                                  : 'translate-y-0';

                        return (
                            <div
                                key={i}
                                className={`group relative w-[380px] flex-shrink-0 rounded-2xl overflow-hidden transition-transform duration-500 ${offset} hover:!translate-y-0`}
                            >
                                {/* glass bg */}
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #8A1C1C, #95351E 30%, #7C1D1A 70%, #341115 100%)' }} />

                                {/* outer border */}
                                <div
                                    className="absolute inset-0 border border-white/[0.12] group-hover:border-white/[0.25] transition-colors duration-700"
                                    style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)' }}
                                />

                                {/* inset border */}
                                <div className="absolute inset-[3px] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors duration-700" />

                                {/* corner brackets */}
                                {[
                                    { pos: 'top-0 left-0',     d: 'M1 10 L1 1 L10 1',   cx: 1,  cy: 1  },
                                    { pos: 'top-0 right-0',    d: 'M30 1 L39 1 L39 10', cx: 39, cy: 1  },
                                    { pos: 'bottom-0 left-0',  d: 'M1 30 L1 39 L10 39', cx: 1,  cy: 39 },
                                    { pos: 'bottom-0 right-0', d: 'M30 39 L39 39 L39 30',cx: 39, cy: 39 },
                                ].map((b, j) => (
                                    <svg
                                        key={j}
                                        className={`absolute ${b.pos} w-8 h-8 text-white/25 group-hover:text-white/50 transition-colors duration-700`}
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path d={b.d} strokeWidth="0.7" />
                                        <circle cx={b.cx} cy={b.cy} r="0.8" fill="currentColor" opacity="0.4" />
                                    </svg>
                                ))}

                                {/* top ruler */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent group-hover:via-white/[0.20] transition-all duration-700" />

                                {/* hover bloom */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                                    style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.03)' }}
                                />

                                {/* Content */}
                                <div className="relative z-10 p-8 flex flex-col min-h-[280px]">
                                    {/* index */}
                                    <div className="flex items-center gap-2 mb-5">
                                        <span className="text-white/20 text-[8px] font-mono tracking-[0.3em]">
                                            {String((i % testimonials.length) + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex-1 h-px bg-white/[0.08]" />
                                    </div>

                                    {/* quote */}
                                    <p className="text-white/85 text-sm font-light tracking-wide leading-[1.8] flex-1">
                                        "{t.quote}"
                                    </p>

                                    {/* author */}
                                    <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-4">
                                        <img
                                            src={t.avatar}
                                            alt={t.author}
                                            className="w-10 h-10 rounded-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                        <div>
                                            <p className="text-white/90 text-sm font-extralight tracking-[0.1em]">
                                                {t.author}
                                            </p>
                                            <p className="text-white/40 text-[8px] font-mono tracking-[0.2em] uppercase mt-0.5">
                                                {t.role}
                                            </p>
                                            <p className="text-white/25 text-[7px] font-mono tracking-[0.2em] uppercase">
                                                {t.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* edge fades */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
