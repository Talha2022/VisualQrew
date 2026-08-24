import React from "react";

/**
 * OurProcessSection
 * -----------------
 * A dark, editorial bento-grid section for a homepage "process" block —
 * one tall lead card, one wide card, and two smaller cards underneath.
 *
 * Fully self-contained (Tailwind classes only). Swap the `steps` array
 * and `image` URLs for your own content/photography. Everything else
 * (numbering, layout, hover motion) just works.
 */
export interface ProcessStep {
    /** Two-digit label, e.g. "01" — encodes order, so keep it sequential */
    number: string;
    /** Small caption shown opposite the number */
    eyebrow: string;
    /** Optional large heading shown inside the card (top-aligned cards only) */
    heading?: string;
    /** Body copy shown near the bottom of the card */
    body: string;
    /** Background image URL */
    image: string;
    /** Optional CTA label — renders a pill button over the image */
    cta?: string;
    /** Grid placement, tuned to mirror the reference layout */
    span: "tall" | "wide" | "small";
}

const defaultSteps: ProcessStep[] = [
    {
        number: "01",
        eyebrow: "FIND THE THING",
        heading: "Before references, frames and treatments, we find the one thought worth building around. The tension. The behaviour. The visual opportunity. The thing people should remember.",
        body: "",
        image: "/assets/home/1.jpeg",
        span: "tall",
    },
    {
        number: "02",
        eyebrow: "BUILD THE WORLD",
        heading: "We define the visual language.",
        body: "Casting. Colour. Light. Texture. Camera. Environment. Movement. Everything begins belonging to the same universe.",
        image: "/assets/home/herobg.jpeg",
        span: "wide",
    },
    {
        number: "03",
        eyebrow: "MAKE IT REAL",
        body: "Production, AI generation, filmmaking or a combination of all three. Whatever the execution requires, the idea stays in control.",
        image: "/assets/home/2.jpeg",
        span: "small",
    },
    {
        number: "04",
        eyebrow: "CUT THE NOISE",
        body: "We refine until only the parts that deserve to exist are left. Because more is not always more.",
        image: "/assets/home/3.jpeg",
        span: "small",
    },
];

interface OurProcessSectionProps {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
    steps?: ProcessStep[];
}

export default function OurProcessSection({
    title = "How things come into existence.",
    subtitle = "OUR PROCESS",
    ctaLabel = "Start Using Nexora",
    onCtaClick,
    steps = defaultSteps,
}: OurProcessSectionProps) {
    const tall = steps.find((s) => s.span === "tall");
    const wide = steps.find((s) => s.span === "wide");
    const small = steps.filter((s) => s.span === "small");

    return (
        <section className="w-full bg-black px-6 py-16 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-10">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
                        {subtitle}
                    </p>
                    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                        {title}
                    </h2>
                </div>

                {/* Bento grid — explicit row heights so absolute-positioned card contents are visible */}
                <div
                    className="hidden sm:grid gap-3"
                    style={{
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridTemplateRows: "320px 280px",
                    }}
                >
                    {/* Tall card — spans both rows on the left */}
                    {tall && (
                        <Card
                            step={tall}
                            style={{ gridColumn: "1", gridRow: "1 / span 2" }}
                        />
                    )}

                    {/* Wide card — spans columns 2–3, row 1 */}
                    {wide && (
                        <Card
                            step={wide}
                            style={{ gridColumn: "2 / span 2", gridRow: "1" }}
                            headingPlacement="top"
                        />
                    )}

                    {/* Two small cards — row 2, columns 2 and 3 */}
                    {small.map((s, i) => (
                        <Card
                            key={s.number}
                            step={s}
                            style={{ gridColumn: `${i + 2}`, gridRow: "2" }}
                        />
                    ))}
                </div>

                {/* Mobile fallback — stacked cards */}
                <div className="flex flex-col gap-3 sm:hidden">
                    {steps.map((s) => (
                        <Card
                            key={s.number}
                            step={s}
                            className="h-[300px]"
                            headingPlacement={s.span === "wide" ? "top" : "bottom"}
                        />
                    ))}
                </div>

                {/* Mobile fallback — stacked, explicit heights */}
                <style>{`
                    @media (max-width: 639px) {
                        .process-grid { display: flex !important; flex-direction: column; }
                        .process-grid > * { height: 300px; }
                    }
                `}</style>
            </div>
        </section>
    );
}

function Card({
    step,
    className = "",
    style,
    headingPlacement = "bottom",
}: {
    step: ProcessStep;
    className?: string;
    style?: React.CSSProperties;
    headingPlacement?: "top" | "bottom";
}) {
    return (
        <div
            className={`group relative overflow-hidden rounded-3xl border border-white/10 ${className}`}
            style={style}
        >
            {/* Background image */}
            <img
                src={step.image}
                alt={step.heading || step.eyebrow}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient overlays for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

            {/* Number — top right */}
            <span className="absolute right-4 top-4 font-mono text-xs tracking-widest text-white/60">
                {step.number}/
            </span>

            {/* Eyebrow — top left */}
            {step.eyebrow && (
                <span className="absolute left-4 top-4 text-xs font-medium tracking-wide text-white/60">
                    {step.eyebrow}
                </span>
            )}

            {/* Top heading variant (wide card) */}
            {headingPlacement === "top" && step.heading && (
                <div className="absolute left-5 top-14">
                    <h3 className="max-w-[75%] text-xl font-semibold leading-snug text-white sm:text-2xl">
                        {step.heading}
                    </h3>
                </div>
            )}

            {/* Bottom content */}
            <div className="absolute inset-x-5 bottom-5 flex flex-col gap-2">
                {headingPlacement === "bottom" && step.heading && (
                    <p className="max-w-[85%] text-sm leading-relaxed text-white/80">
                        {step.heading}
                    </p>
                )}
                {step.body && (
                    <p className="max-w-[85%] text-sm leading-relaxed text-white/70">
                        {step.body}
                    </p>
                )}
                {step.cta && (
                    <button className="mt-1 w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                        {step.cta}
                    </button>
                )}
            </div>
        </div>
    );
}
