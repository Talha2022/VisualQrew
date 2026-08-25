import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Footer from '@/components/Footer';

const fadeUp = (delay = 0) => ({
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
    },
});

const brandWork = [
    {
        src: '/assets/home/split1.jpg',
        alt: 'Visual Identity — Nexora',
        hoverText: 'VISUAL IDENTITY',
        label: 'Brand Work',
        year: '2025',
        href: '#',
    },
    {
        src: '/assets/home/1.jpeg',
        alt: 'Brand Strategy — Drift Co.',
        hoverText: 'BRAND STRATEGY',
        label: 'Brand Work',
        year: '2025',
        href: '#',
    },
    {
        src: '/assets/home/split2.jpg',
        alt: 'Packaging Design — Soleil',
        hoverText: 'PACKAGING',
        label: 'Brand Work',
        year: '2024',
        href: '#',
    },
    {
        src: '/assets/home/2.jpeg',
        alt: 'Creative Direction — Mira',
        hoverText: 'CREATIVE DIRECTION',
        label: 'Brand Work',
        year: '2024',
        href: '#',
    },
];

const aiWork = [
    {
        src: '/assets/home/herobg.jpeg',
        alt: 'Generative World — Aether',
        hoverText: 'GENERATIVE WORLD',
        label: 'AI Work',
        year: '2025',
        href: '#',
    },
    {
        src: '/assets/home/fullcardimg.jpeg',
        alt: 'AI Campaign — Orbit',
        hoverText: 'AI CAMPAIGN',
        label: 'AI Work',
        year: '2025',
        href: '#',
    },
    {
        src: '/assets/home/3.jpeg',
        alt: 'AI Visuals — Pulse',
        hoverText: 'AI VISUALS',
        label: 'AI Work',
        year: '2024',
        href: '#',
    },
];

const shortFilms = [
    {
        src: '/assets/home/split3.jpg',
        alt: 'Short Film — Echoes',
        hoverText: 'ECHOES',
        label: 'Short Film',
        year: '2025',
        href: '#',
    },
    {
        src: '/assets/home/1.jpeg',
        alt: 'Short Film — Hollow',
        hoverText: 'HOLLOW',
        label: 'Short Film',
        year: '2024',
        href: '#',
    },
];

export default function OurWork() {
    return (
        <>
            <Head title="Our Work" />


            {/* Brand Work */}
            <ProjectsShowcase
                sectionLabel="Brand Work"
                projects={brandWork}
            />

            {/* AI Work */}
            <ProjectsShowcase
                sectionLabel="AI Work"
                projects={aiWork}
            />

            {/* Short Films */}
            <ProjectsShowcase
                sectionLabel="Short Films"
                projects={shortFilms}
            />

            <Footer />
        </>
    );
}
