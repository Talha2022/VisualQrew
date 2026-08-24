import React, { useEffect, useRef, useState } from 'react';

const services = [
    {
        number: '01',
        phase: 'Brand Work',
        label: 'Identity',
        heading: 'Brand Work',
        description: 'We craft bold brand identities — from logos and visual systems to full brand strategies that make you unforgettable.',
        image: '/assets/home/split1.jpg',
    },
    {
        number: '02',
        phase: 'AI Work',
        label: 'Intelligence',
        heading: 'AI Work',
        description: 'We build AI-powered visuals, generative worlds, and intelligent creative tools that push the boundaries of what\'s possible.',
        image: '/assets/home/split2.jpg',
    },
    {
        number: '03',
        phase: 'Short Films',
        label: 'Direction',
        heading: 'Short Films',
        description: 'We direct and produce short films — cinematic stories that capture real emotion and leave a lasting impression.',
        image: '/assets/home/split3.jpg',
    },
];

// Corner bracket SVG reused across cards
function Brackets() {
    return (
        <>
            <svg className="absolute top-0 left-0 w-8 h-8 text-white/35" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                <path d="M1 14 L1 1 L14 1" strokeWidth="0.7" />
                <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.4" />
            </svg>
            <svg className="absolute top-0 right-0 w-8 h-8 text-white/35" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                <path d="M26 1 L39 1 L39 14" strokeWidth="0.7" />
                <circle cx="39" cy="1" r="1" fill="currentColor" opacity="0.4" />
            </svg>
            <svg className="absolute bottom-0 left-0 w-8 h-8 text-white/35" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                <path d="M1 26 L1 39 L14 39" strokeWidth="0.7" />
                <circle cx="1" cy="39" r="1" fill="currentColor" opacity="0.4" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-8 h-8 text-white/35" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                <path d="M26 39 L39 39 L39 26" strokeWidth="0.7" />
                <circle cx="39" cy="39" r="1" fill="currentColor" opacity="0.4" />
            </svg>
        </>
    );
}

function CardBack({ service }: { service: typeof services[0] }) {
    return (
        <div
            className="absolute inset-0 flex flex-col justify-between p-6"
            style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                background: 'linear-gradient(to right, #8A1C1C, #95351E 30%, #7C1D1A 70%, #341115 100%)',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 border border-white/[0.12]" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)' }} />
            <div className="absolute inset-[3px] border border-white/[0.05]" />
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <Brackets />

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-1 bg-white/40" />
                    <span className="text-white/30 text-[8px] font-mono tracking-[0.4em] uppercase">
                        {service.number} · {service.label}
                    </span>
                </div>
                <div className="relative h-px mb-6">
                    <div className="absolute inset-0 bg-white/[0.08]" />
                    <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/40 to-transparent w-12" />
                </div>
                <h3 className="text-white/90 text-xl font-extralight tracking-[0.18em] uppercase mb-4 leading-none">
                    {service.heading}
                </h3>
                <p className="text-white/50 text-[11px] font-light tracking-wide leading-relaxed max-w-[90%]">
                    {service.description}
                </p>
            </div>

            <div className="relative z-10 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-white/30 shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                <span className="text-white/15 text-[7px] font-mono tracking-[0.3em] uppercase">
                    Phase · {service.phase}
                </span>
            </div>
        </div>
    );
}

export function ServicesSection() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const fullImageRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const dotGridRef = useRef<HTMLDivElement>(null);
    const front1Ref = useRef<HTMLDivElement>(null);
    const front2Ref = useRef<HTMLDivElement>(null);
    const front3Ref = useRef<HTMLDivElement>(null);
    const [flippedCards, setFlippedCards] = useState([false, false, false]);

    const toggleCardFlip = (index: number) => {
        setFlippedCards(prev => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    useEffect(() => {
        if (window.innerWidth < 768) return;

        import('gsap').then(({ gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                const wrapper = wrapperRef.current;
                const fullImg = fullImageRef.current;
                const c1 = card1Ref.current;
                const c2 = card2Ref.current;
                const c3 = card3Ref.current;

                if (!wrapper || !fullImg || !c1 || !c2 || !c3) return;

                gsap.set([c1, c2, c3], { opacity: 0, rotateY: 0 });
                gsap.set(fullImg, { opacity: 1, scale: 1 });

                const heading = wrapper.querySelector('#services-heading');
                if (heading) gsap.set(heading, { opacity: 0, y: 20 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1.5,
                    },
                });

                if (heading) tl.to(heading, { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' });
                tl.to({}, { duration: 0.2 });
                tl.to(fullImg, { opacity: 0, scale: 0.97, duration: 0.2, ease: 'power2.inOut' });
                tl.to([c1, c2, c3], { opacity: 1, duration: 0.15, ease: 'power2.out' }, '<');
                tl.set(fullImg, { display: 'none' });
                tl.to(c1, { x: '-6vw', duration: 0.25, ease: 'power3.inOut' });
                tl.to(c3, { x: '6vw', duration: 0.25, ease: 'power3.inOut' }, '<');
                tl.to({}, { duration: 0.05 });
                tl.to(c1, { rotateY: 180, duration: 0.2, ease: 'power2.inOut' });
                tl.to(c2, { rotateY: 180, duration: 0.2, ease: 'power2.inOut' }, '<+0.05');
                tl.to(c3, { rotateY: 180, duration: 0.2, ease: 'power2.inOut' }, '<+0.05');
                tl.set([front1Ref.current, front2Ref.current, front3Ref.current], { display: 'none' });

                if (dotGridRef.current) {
                    tl.to(dotGridRef.current, { opacity: 0, duration: 0.2 }, '<');
                    tl.set(dotGridRef.current, { display: 'none' });
                }

                return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
            });
        });
    }, []);

    return (
        <>
            {/* ── Desktop — scroll-driven ── */}
            <div ref={wrapperRef} className="relative h-[300vh] bg-black hidden md:block">
                <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-black" style={{ alignItems: 'center', paddingTop: '8vh' }}>
                    {/* Dot grid */}
                    <div
                        ref={dotGridRef}
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)', backgroundSize: '28px 28px' }}
                    />

                    {/* Heading */}
                    <div className="absolute top-12 z-40 text-center px-4" style={{ opacity: 0 }} id="services-heading">
                        <h2 className="text-4xl md:text-5xl font-extralight text-white tracking-[0.12em] uppercase">
                            What We <em className="not-italic font-light text-orange-500">Create</em>
                        </h2>
                    </div>

                    {/* Full blended image */}
                    <div ref={fullImageRef} className="absolute z-30 overflow-hidden rounded-2xl" style={{ width: '70vw', height: '34vw' }}>
                        <img src="/assets/home/fullcardimg.jpeg" alt="services" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Split cards */}
                    <div className="relative z-20" style={{ width: '70vw', height: '34vw', perspective: '1600px' }}>
                        {/* Card 1 */}
                        <div
                            ref={card1Ref}
                            className="absolute top-0 left-0"
                            style={{ width: '23.33vw', height: '34vw', opacity: 0, transformStyle: 'preserve-3d' }}
                        >
                            <div ref={front1Ref} className="absolute inset-0 overflow-hidden rounded-l-2xl" style={{ backfaceVisibility: 'hidden' }}>
                                <img src={services[0].image} className="w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-white/70 text-[9px] font-mono tracking-[0.3em] uppercase">{services[0].phase}</span>
                                </div>
                            </div>
                            <CardBack service={services[0]} />
                        </div>

                        {/* Card 2 */}
                        <div
                            ref={card2Ref}
                            className="absolute top-0 left-[23.33vw]"
                            style={{ width: '23.33vw', height: '34vw', opacity: 0, transformStyle: 'preserve-3d' }}
                        >
                            <div ref={front2Ref} className="absolute inset-0 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                                <img src={services[1].image} className="w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-white/70 text-[9px] font-mono tracking-[0.3em] uppercase">{services[1].phase}</span>
                                </div>
                            </div>
                            <CardBack service={services[1]} />
                        </div>

                        {/* Card 3 */}
                        <div
                            ref={card3Ref}
                            className="absolute top-0 left-[46.66vw]"
                            style={{ width: '23.33vw', height: '34vw', opacity: 0, transformStyle: 'preserve-3d' }}
                        >
                            <div ref={front3Ref} className="absolute inset-0 overflow-hidden rounded-r-2xl" style={{ backfaceVisibility: 'hidden' }}>
                                <img src={services[2].image} className="w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-white/70 text-[9px] font-mono tracking-[0.3em] uppercase">{services[2].phase}</span>
                                </div>
                            </div>
                            <CardBack service={services[2]} />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Mobile — tap to flip ── */}
            <div className="block md:hidden bg-black py-20 px-6 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)', backgroundSize: '28px 28px' }}
                />
                <div className="relative z-10 max-w-xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-extralight text-white tracking-[0.12em] uppercase leading-tight">
                        What We <em className="not-italic font-light text-orange-500">Create</em>
                    </h2>
                    <p className="text-white/30 text-[9px] font-mono tracking-[0.2em] uppercase mt-3">Tap a card to view details</p>
                </div>

                <div className="relative z-10 flex flex-col gap-6 max-w-sm mx-auto">
                    {services.map((service, i) => (
                        <div key={i} className="relative w-full" style={{ height: '300px', perspective: '1200px' }}>
                            <div
                                onClick={() => toggleCardFlip(i)}
                                className="w-full h-full relative cursor-pointer"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transition: 'transform 0.7s ease',
                                    transform: flippedCards[i] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                }}
                            >
                                {/* Front */}
                                <div className="absolute inset-0 overflow-hidden rounded-2xl" style={{ backfaceVisibility: 'hidden' }}>
                                    <img src={service.image} className="w-full h-full object-cover" alt={service.heading} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                        <div>
                                            <span className="text-white/70 text-[10px] font-mono tracking-[0.3em] uppercase">{service.label}</span>
                                            <h3 className="text-white text-xl font-extralight tracking-widest uppercase mt-1">{service.heading}</h3>
                                        </div>
                                        <span className="text-white/30 text-[8px] font-mono tracking-wider uppercase border border-white/20 px-2 py-1 rounded">FLIP</span>
                                    </div>
                                </div>

                                {/* Back */}
                                <div
                                    className="absolute inset-0 flex flex-col justify-between p-6 rounded-2xl"
                                    style={{
                                        transform: 'rotateY(180deg)',
                                        backfaceVisibility: 'hidden',
                                        background: 'linear-gradient(to right, #8A1C1C, #95351E 30%, #7C1D1A 70%, #341115 100%)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-2xl" />
                                    <Brackets />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-1 bg-white/40" />
                                            <span className="text-white/30 text-[8px] font-mono tracking-[0.4em] uppercase">{service.number} · {service.label}</span>
                                        </div>
                                        <div className="relative h-px mb-6">
                                            <div className="absolute inset-0 bg-white/[0.08]" />
                                            <div className="absolute left-0 top-0 h-px bg-gradient-to-r from-white/40 to-transparent w-12" />
                                        </div>
                                        <h3 className="text-white/90 text-xl font-extralight tracking-[0.18em] uppercase mb-4 leading-none">{service.heading}</h3>
                                        <p className="text-white/50 text-[11px] font-light tracking-wide leading-relaxed">{service.description}</p>
                                    </div>
                                    <div className="relative z-10 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-white/30" />
                                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                                        <span className="text-white/15 text-[7px] font-mono tracking-[0.3em] uppercase">Phase · {service.phase}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
