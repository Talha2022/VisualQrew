import { Head } from '@inertiajs/react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import { ServicesSection } from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurProcessSection from '@/components/OurProcessSection';
import ScrollMorphHero from '@/components/ui/scroll-morph-hero';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <Hero />
            <About />
            <ServicesSection />
            <WhyChooseUs />
            <OurProcessSection />
            <div className="w-full h-[700px]">
                <ScrollMorphHero />
            </div>
            <TestimonialsSection />
            <FaqSection />
            <CtaSection />
            <Footer />
        </>
    );
}
