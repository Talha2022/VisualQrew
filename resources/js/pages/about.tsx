import { Head } from '@inertiajs/react';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <>
            <Head title="About" />

            <div className="bg-black min-h-screen font-sans">
                <section className="px-6 pt-32 pb-20 md:px-10 md:pt-36 md:pb-28">
                    <div className="mx-auto max-w-7xl">
                        {/* 4-column grid */}
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-[180px_1fr_40px_1fr]">

                            {/* Col 1 — portrait image */}
                            <div className="w-full">
                                <div className="aspect-[3/4] overflow-hidden bg-neutral-800">
                                    <img
                                        src="/assets/home/1.jpeg"
                                        alt="VisualCrew"
                                        className="w-full h-full object-cover grayscale"
                                    />
                                </div>
                            </div>

                            {/* Col 2 — label + bio */}
                            <div className="flex flex-col gap-5">
                                <p className="font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase">
                                    Creator / Curator
                                </p>
                                <div className="flex flex-col gap-5">
                                    <p className="text-white font-light leading-relaxed"
                                        style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' }}>
                                        VisualCrew is a studio built on the notion that any idea can be realized. The creative industry innovators — directors, designers, and storytellers — took bold visions from concept into the lives of every brand and filmmaker in the creative community. VisualCrew started as a small collective and continued growing as a professional creative studio throughout its early years before shifting focus to digital evolution.
                                    </p>
                                    <p className="text-white font-light leading-relaxed"
                                        style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' }}>
                                        Today, the studio sits at the intersection of brand, design, tech, and pop culture. As it grows into the second decade, VisualCrew continues to push the boundaries of visual storytelling — from AI-powered campaigns to short films and full brand identities.
                                    </p>
                                    <p className="text-white font-light leading-relaxed"
                                        style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' }}>
                                        The work is never about following trends. It's about finding the one idea worth building around — and making it real.
                                    </p>
                                </div>
                            </div>

                            {/* Col 3 — spacer */}
                            <div className="hidden md:block" />

                            {/* Col 4 — core focus only */}
                            <div className="flex flex-col gap-10">
                                <div>
                                    <p className="font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase mb-4">
                                        Core Focus
                                    </p>
                                    <p className="text-white font-light leading-snug"
                                        style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}>
                                        VisualCrew's brand embodies the lifestyle of a studio and creator in the creative entrepreneur community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
