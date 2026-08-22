import { Head } from '@inertiajs/react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import CarouselSection from '@/components/CarouselSection';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <Hero />
            <About />
            <WhyChooseUs />
            <CarouselSection />
        </>
    );
}
