import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeUp = (delay = 0) => ({
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
    },
});

const services = [
    'Brand Identity',
    'AI Campaign',
    'Short Film',
    'Creative Direction',
    'Packaging',
    'Other',
];

export default function Contact() {
    const [selected, setSelected] = useState<string[]>([]);
    const [sent, setSent] = useState(false);

    const toggle = (s: string) =>
        setSelected((prev) =>
            prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
        );

    return (
        <>
            <Head title="Contact" />

            <div className="bg-black min-h-screen font-sans">
                {/* dot grid */}
                <div
                    className="fixed inset-0 opacity-[0.04] pointer-events-none z-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />

                {/* Orange glow bottom-left */}
                <div
                    className="fixed bottom-0 left-0 w-[500px] h-[400px] pointer-events-none z-0"
                    style={{
                        background: 'radial-gradient(ellipse at bottom left, rgba(234,88,12,0.12) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />

                <section className="relative z-10 px-6 pt-32 pb-24 md:px-16 md:pt-40">
                    <div className="mx-auto max-w-6xl">

                        {/* Header */}
                        <motion.div
                            variants={fadeUp(0.1)}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center gap-3 mb-10"
                        >
                            <div className="w-8 h-px bg-white/25" />
                            <span className="font-mono text-[9px] tracking-[0.35em] text-white/40 uppercase">
                                Get In Touch
                            </span>
                            <div className="w-8 h-px bg-white/25" />
                        </motion.div>

                        {/* Big heading */}
                        <motion.h1
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            animate="visible"
                            className="font-black uppercase leading-[0.9] text-white mb-16"
                            style={{
                                fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Let's Make
                            <br />
                            <span className="text-white/25">Something.</span>
                        </motion.h1>

                        {/* Two-column layout */}
                        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_420px]">

                            {/* Left — form */}
                            <motion.div
                                variants={fadeUp(0.35)}
                                initial="hidden"
                                animate="visible"
                            >
                                {sent ? (
                                    <div className="flex flex-col gap-4 py-10">
                                        <p className="font-mono text-[9px] tracking-[0.3em] text-orange-500 uppercase">Message sent</p>
                                        <p className="text-white/60 text-sm font-light leading-relaxed">
                                            We've received your message and will be in touch shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                                        className="flex flex-col gap-8"
                                    >
                                        {/* Name + Email row */}
                                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                            <Field label="Your Name" name="name" type="text" placeholder="Full name" />
                                            <Field label="Email" name="email" type="email" placeholder="hello@example.com" />
                                        </div>

                                        {/* Service selector */}
                                        <div>
                                            <p className="font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase mb-4">
                                                What are you looking for?
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {services.map((s) => (
                                                    <button
                                                        key={s}
                                                        type="button"
                                                        onClick={() => toggle(s)}
                                                        className={`px-4 py-2 text-xs font-mono tracking-[0.15em] uppercase border transition-all duration-200 ${
                                                            selected.includes(s)
                                                                ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                                                                : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white/70'
                                                        }`}
                                                    >
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <p className="font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase mb-3">
                                                Tell us about the project
                                            </p>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                placeholder="What's the idea?"
                                                className="w-full bg-transparent border-b border-white/10 text-white/80 text-sm font-light placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors duration-300 resize-none py-3"
                                            />
                                        </div>

                                        {/* Submit */}
                                        <div>
                                            <button
                                                type="submit"
                                                className="flex items-center gap-3 rounded-full bg-white pl-6 pr-2 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white/90 transition-colors"
                                            >
                                                Send Message
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </motion.div>

                            {/* Right — contact details */}
                            <motion.div
                                variants={fadeUp(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col gap-10 md:pt-2"
                            >
                                {/* Email */}
                                <div>
                                    <p className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">Email</p>
                                    <a
                                        href="mailto:hello@visualcrew.com"
                                        className="text-white/70 text-sm font-light hover:text-white transition-colors duration-300"
                                    >
                                        hello@visualcrew.com
                                    </a>
                                </div>

                                {/* Based in */}
                                <div>
                                    <p className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase mb-2">Based In</p>
                                    <p className="text-white/70 text-sm font-light">Beirut — Lebanon</p>
                                    <p className="text-white/30 text-xs font-light mt-1">Available worldwide</p>
                                </div>

                                {/* Socials */}
                                <div>
                                    <p className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase mb-3">Socials</p>
                                    <div className="flex flex-col gap-2">
                                        {[
                                            { label: 'Instagram', href: '#' },
                                            { label: 'LinkedIn', href: '#' },
                                            { label: 'Behance', href: '#' },
                                        ].map(({ label, href }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                className="inline-flex items-center gap-1.5 text-white/50 text-xs font-mono tracking-[0.15em] uppercase hover:text-white transition-colors duration-300"
                                            >
                                                {label}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-white/[0.06]" />

                                {/* Response time note */}
                                <p className="text-white/20 text-[10px] font-mono tracking-[0.2em] uppercase leading-relaxed">
                                    We typically respond within 24–48 hours. For urgent projects, mention it in your message.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

function Field({
    label,
    name,
    type,
    placeholder,
}: {
    label: string;
    name: string;
    type: string;
    placeholder: string;
}) {
    return (
        <div>
            <p className="font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase mb-3">{label}</p>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-white/10 text-white/80 text-sm font-light placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors duration-300 py-3"
            />
        </div>
    );
}
