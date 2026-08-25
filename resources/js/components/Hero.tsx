import { motion, type Variants } from 'framer-motion';

const services = [
    { number: '01', label: 'Brand Strategy' },
    { number: '02', label: 'Brand Identity Design' },
    { number: '03', label: 'Packaging Design' },
    { number: '04', label: 'Creative Direction' },
];

const dropIn: Variants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const fadeUp = (delay = 0): Variants => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
    },
});

export default function Hero() {
    return (
        <div className="min-h-screen bg-black overflow-hidden">
            <motion.section
                variants={dropIn}
                initial="hidden"
                animate="visible"
                className="relative flex h-[90vh] w-full flex-col bg-cover bg-center bg-no-repeat rounded-b-[2.5rem]"
                style={{ backgroundImage: "url('/assets/home/herobg.jpeg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-b-[2.5rem]" />

                {/* Hero Content */}
                <div className="relative z-10 flex flex-1 w-full flex-col justify-center px-6 md:flex-row md:items-center md:justify-between md:px-10">

                    {/* Title */}
                    <motion.h1
                        variants={fadeUp(0.4)}
                        initial="hidden"
                        animate="visible"
                        className="text-[clamp(3.5rem,16vw,7rem)] font-extrabold uppercase leading-none tracking-tight text-white"
                    >
                        Visual
                        <br />
                        Crew
                    </motion.h1>

                    {/* Subtitle — below title on mobile, right side on desktop */}
                    <motion.div
                        variants={fadeUp(0.6)}
                        initial="hidden"
                        animate="visible"
                        className="mt-6 md:mt-0 md:max-w-xs"
                    >
                        <p className="text-lg font-bold leading-snug text-white md:text-2xl">
                            We direct things
                            <br />
                            into existence.
                        </p>
                        <p className="mt-2 text-sm text-white/60 leading-relaxed">
                            From brand ideas to artificial worlds
                            <br />
                            and short films.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom services bar */}
                <motion.div
                    variants={fadeUp(0.8)}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 w-full px-6 pb-8 md:px-10 md:pb-10"
                >
                    {/* Mobile: 2×2 grid */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:hidden">
                        {services.map((service) => (
                            <div key={service.number} className="flex flex-col gap-1">
                                <span className="text-xs font-semibold tracking-wider">
                                    <span className="text-orange-500">#</span>
                                    <span className="text-white">{service.number}</span>
                                </span>
                                <span className="text-sm text-white/70">{service.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: single row */}
                    <div className="hidden md:flex items-end justify-between">
                        {services.map((service) => (
                            <div key={service.number} className="flex flex-col gap-1">
                                <span className="text-xs font-semibold tracking-wider">
                                    <span className="text-orange-500">#</span>
                                    <span className="text-white">{service.number}</span>
                                </span>
                                <span className="text-sm text-white/70">{service.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>
        </div>
    );
}
