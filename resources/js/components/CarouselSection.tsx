import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

export default function CarouselSection() {
    return (
        <section className="bg-black px-10 py-12">
            <div className="mb-2 text-center">
                <span className="text-xs text-white/50">Our Work</span>
                <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                    A Glimpse Into
                    <br />
                    <span className="text-white/60">What We Create</span>
                </h2>
            </div>
            <ThreeDPhotoCarousel />
        </section>
    )
}
