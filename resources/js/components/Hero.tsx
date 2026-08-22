import Header from '@/components/Header';

const services = [
    { number: '01', label: 'Brand Strategy' },
    { number: '02', label: 'Brand Identity Design' },
    { number: '03', label: 'Packaging Design' },
    { number: '04', label: 'Creative Direction' },
];

export default function Hero() {
    return (
        <div className="min-h-screen bg-black">
            <section
                className="relative flex h-[90vh] w-full flex-col bg-cover bg-center bg-no-repeat rounded-b-[2.5rem]"
                style={{ backgroundImage: "url('/assets/home/herobg.jpeg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-b-[2.5rem]" />

                {/* Header */}
                <Header />

                {/* Hero Content — vertically centered, split left/right */}
                <div className="relative z-10 flex flex-1 w-full items-center justify-between px-10">
                    {/* Left */}
                    <h1 className="text-[clamp(3rem,8vw,7rem)] font-extrabold uppercase leading-none tracking-tight text-white">
                        Visual
                        <br />
                        Crew
                    </h1>

                    {/* Right */}
                    <div className="max-w-xs text-start">
                        <p className="text-xl font-bold leading-snug text-white md:text-2xl">
                            We direct things
                            <br />
                            into existence.
                        </p>
                        <p className="mt-3 text-sm text-white/60 leading-relaxed">
                            From brand ideas to artificial worlds
                            <br />
                            and short films.
                        </p>
                    </div>
                </div>

                {/* Bottom services bar */}
                <div className="relative z-10 flex w-full items-end justify-between px-10 pb-10">
                    {services.map((service) => (
                        <div key={service.number} className="flex flex-col gap-1">
                            <span className="text-xs font-semibold tracking-wider">
                                <span className="text-orange-500">#</span>
                                <span className="text-white">{service.number}</span>
                            </span>
                            <span className="text-sm text-white/70">
                                {service.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
