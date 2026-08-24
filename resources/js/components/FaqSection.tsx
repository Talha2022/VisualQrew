import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
    {
        q: 'Do you only work with brands?',
        a: 'No. We work across commercial projects, independent ideas, films and visual experiments. If the idea is interesting, there is usually a way in.',
    },
    {
        q: 'Do you handle both concept and execution?',
        a: 'Yes. VISUAL QREW can enter at the idea stage and carry the visual direction through execution, or join an existing concept and build the visual world around it.',
    },
    {
        q: 'Is all your AI work completely AI-generated?',
        a: 'Not necessarily. Some projects are fully generated, while others combine AI with traditional production, photography, design, compositing or live-action filmmaking. The method depends on the idea.',
    },
    {
        q: 'Can you create AI campaigns while keeping characters and products consistent?',
        a: 'Yes. Consistency, continuity and art direction are a major part of our AI workflow.',
    },
    {
        q: 'Do you work with agencies as well as direct clients?',
        a: 'Yes. We can work directly with brands or collaborate quietly with creative, advertising and production teams.',
    },
    {
        q: 'Can you work on only the visual direction without producing the project?',
        a: 'Absolutely. We can develop the concept, visual system, treatment and execution direction for another production team to carry forward.',
    },
    {
        q: 'Where are you based?',
        a: 'Pakistan, working wherever the project takes us.',
    },
];

export default function FaqSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="relative bg-black px-6 py-24 overflow-hidden sm:px-10 lg:px-16">
            {/* dot grid */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            <div className="relative z-10 mx-auto max-w-4xl">
                {/* Header + Accordion — two column layout */}
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
                    {/* Left — title aligned to top of first question */}
                    <div className="lg:w-2/5">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-px bg-white/25" />
                            <span className="text-white/30 text-[9px] font-mono tracking-[0.35em] uppercase">
                                FAQ
                            </span>
                            <div className="w-8 h-px bg-white/25" />
                        </div>
                        <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl leading-tight">
                            Questions people usually ask
                            <span className="block text-white/30">before we start making things.</span>
                        </h2>
                    </div>

                    {/* Right — accordion */}
                    <div className="flex flex-col lg:flex-1 lg:pt-0">
                        {faqs.map((faq, i) => {
                        const isOpen = open === i;
                        return (
                            <div
                                key={i}
                                className="border-t border-white/[0.08] last:border-b"
                            >
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="group w-full flex items-center justify-between gap-6 py-6 text-left"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="text-white/20 text-[10px] font-mono tracking-[0.3em] shrink-0">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-white/80 text-base font-light tracking-wide group-hover:text-white transition-colors duration-300">
                                            {faq.q}
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="shrink-0 text-white/40 group-hover:text-white/70 transition-colors duration-300"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-7 pl-[3.25rem] pr-8 text-sm font-light leading-relaxed text-white/50 tracking-wide">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </section>
    );
}
