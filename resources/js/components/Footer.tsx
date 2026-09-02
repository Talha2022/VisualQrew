import { ArrowUpRight } from 'lucide-react';

const links = {
    Index: [
        { label: 'Home' },
        { label: 'Work' },
        { label: 'Services' },
        { label: 'About Us' },
        { label: 'Store' },
    ],
    'Terms & Policies': [
        { label: 'License Agreement' },
        { label: 'Privacy Policy' },
        { label: 'Cookie Settings', active: true },
    ],
    'Digital Store': [
        { label: 'Mockups' },
        { label: 'Framer Templates' },
        { label: 'Freebies' },
    ],
    Socials: [
        { label: 'Instagram', external: true },
        { label: 'LinkedIn', external: true },
        { label: 'Behance', external: true },
        { label: 'Awwwards', external: true },
    ],
};

export default function Footer() {
    return (
        <section className="bg-black px-4 pb-4 pt-0 md:px-6 md:pb-6">
            <footer
                className="w-full overflow-hidden rounded-3xl px-8 pt-12 pb-8 flex flex-col"
                style={{
                    background:
                        'radial-gradient(circle at 10% 100%, #e8863a 0%, #c1451c 25%, #3a0f05 55%, #0a0a0a 80%)',
                    minHeight: '420px',
                }}
            >
                {/* Top row */}
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    {/* Left — brand */}
                    <div className="flex-shrink-0">
                        <h2 className="text-4xl font-medium text-white tracking-tight">
                            VisualQrew
                        </h2>
                        <div className="mt-4 space-y-1">
                            <p className="text-sm text-white/50">Beirut — Lebanon</p>
                            <p className="text-sm text-white/50">hello@visualqrew.com</p>
                        </div>
                    </div>

                    {/* Right — link columns */}
                    <div className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-4 md:gap-x-16">
                        {Object.entries(links).map(([heading, items]) => (
                            <div key={heading}>
                                <p className="mb-4 text-sm font-semibold text-white">
                                    {heading}
                                </p>
                                <ul className="space-y-3">
                                    {items.map(({ label, active, external }: { label: string; active?: boolean; external?: boolean }) => (
                                        <li key={label}>
                                            <a
                                                href="#"
                                                className={`inline-flex items-center gap-1 text-sm transition-colors hover:text-white ${
                                                    active
                                                        ? 'font-semibold text-white'
                                                        : 'text-white/60'
                                                }`}
                                            >
                                                {label}
                                                {external && (
                                                    <ArrowUpRight size={12} className="opacity-70" />
                                                )}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom copyright — pushed to bottom */}
                <div className="mt-auto pt-16 flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">
                        © 2026 VisualQrew.
                    </span>
                    <span className="text-xs text-cyan-300/70">
                        All rights reserved.
                    </span>
                </div>
            </footer>
        </section>
    );
}
