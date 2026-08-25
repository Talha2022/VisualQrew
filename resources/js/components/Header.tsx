import { useEffect, useRef, useState } from 'react';
import { X, Menu } from 'lucide-react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current !== null) return;
            rafRef.current = requestAnimationFrame(() => {
                setScrolled(window.scrollY > 50);
                rafRef.current = null;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const NavArrow = () => (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </span>
    );

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <header
                className="pointer-events-auto flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-500 ease-in-out"
                style={
                    scrolled
                        ? {
                              width: '88%',
                              marginTop: '12px',
                              borderRadius: '9999px',
                              border: '1px solid rgba(255,255,255,0.15)',
                              background: 'rgba(255,255,255,0.08)',
                              backdropFilter: 'blur(12px)',
                              WebkitBackdropFilter: 'blur(12px)',
                              boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                          }
                        : {
                              width: '100%',
                              marginTop: '0px',
                              borderRadius: '0px',
                              border: '1px solid transparent',
                              background: 'transparent',
                              backdropFilter: 'blur(0px)',
                              WebkitBackdropFilter: 'blur(0px)',
                              boxShadow: 'none',
                          }
                }
            >
                {/* Logo */}
                <span className="text-white font-bold text-xl tracking-tight">
                    VisualCrew
                </span>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                        About
                    </a>
                    <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                        Projects
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-2 rounded-full bg-white pl-5 pr-2 py-2 text-sm font-semibold text-gray-900 hover:bg-white/90 transition-colors"
                    >
                        Get in touch
                        <NavArrow />
                    </a>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex items-center justify-center h-9 w-9 text-white"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile full-screen menu */}
            <div
                className={`md:hidden fixed inset-0 pointer-events-auto flex flex-col transition-all duration-400 ease-in-out ${
                    mobileOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                style={{
                    background: 'rgba(10,10,10,0.97)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                }}
            >
                {/* Top bar — logo + close */}
                <div className="flex items-center justify-between px-6 py-5">
                    <span className="text-white font-bold text-xl tracking-tight">
                        VisualCrew
                    </span>
                    <button
                        className="flex items-center justify-center h-9 w-9 text-white"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mx-6" />

                {/* Nav links */}
                <nav className="flex flex-col gap-1 px-6 pt-8 flex-1">
                    {['Home', 'About', 'Projects'].map((item, i) => (
                        <a
                            key={item}
                            href="#"
                            className="text-white/80 uppercase font-extrabold py-3 hover:text-white hover:pl-2 transition-all duration-200"
                            style={{
                                fontSize: 'clamp(2.8rem, 12vw, 5rem)',
                                transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                            }}
                            onClick={() => setMobileOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Bottom CTA */}
                <div className="px-6 pb-12">
                    <a
                        href="#"
                        className="flex items-center justify-center gap-2 rounded-full bg-white pl-5 pr-2 py-3 text-sm font-semibold text-gray-900 hover:bg-white/90 transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        Get in touch
                        <NavArrow />
                    </a>
                </div>
            </div>
        </div>
    );
}
