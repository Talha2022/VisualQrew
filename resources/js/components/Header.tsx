export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
            {/* Logo */}
            <span className="text-white font-bold text-xl tracking-tight">
                VisualCrew
            </span>

            {/* Nav */}
            <nav className="flex items-center gap-8">
                <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                    Home
                </a>
                <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                    About
                </a>
                <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                    Projects
                </a>

                {/* CTA Button */}
                <a
                    href="#"
                    className="flex items-center gap-2 rounded-full bg-white pl-5 pr-2 py-2 text-sm font-semibold text-gray-900 hover:bg-white/90 transition-colors"
                >
                    Get in touch
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
                </a>
            </nav>
        </header>
    );
}
