import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
    AnimatePresence,
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
    defaultValue?: boolean
    initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
    query: string,
    {
        defaultValue = false,
        initializeWithValue = true,
    }: UseMediaQueryOptions = {}
): boolean {
    const getMatches = (query: string): boolean => {
        if (IS_SERVER) return defaultValue
        return window.matchMedia(query).matches
    }

    const [matches, setMatches] = useState<boolean>(() => {
        if (initializeWithValue) return getMatches(query)
        return defaultValue
    })

    const handleChange = () => setMatches(getMatches(query))

    useIsomorphicLayoutEffect(() => {
        const matchMedia = window.matchMedia(query)
        handleChange()
        matchMedia.addEventListener("change", handleChange)
        return () => matchMedia.removeEventListener("change", handleChange)
    }, [query])

    return matches
}

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(({
    handleClick,
    controls,
    cards,
    isCarouselActive,
}: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: string[]
    isCarouselActive: boolean
}) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1800 : 3000
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const anglePerFace = 360 / faceCount
    const rotation = useMotionValue(0)
    const transform = useTransform(
        rotation,
        (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    // Snap rotation to the nearest face
    const snapToNearest = (current: number, velocity: number) => {
        // Determine direction from velocity, default to nearest
        const delta = velocity > 50 ? anglePerFace : velocity < -50 ? -anglePerFace : 0
        const target = Math.round((current + delta) / anglePerFace) * anglePerFace
        rotation.set(target)
        controls.start({
            rotateY: target,
            transition: { type: "spring", stiffness: 300, damping: 40, mass: 0.5 },
        })
    }

    return (
        <div
            className="flex h-full items-center justify-center"
            style={{ perspective: "1000px", transformStyle: "preserve-3d", willChange: "transform" }}
        >
            <motion.div
                drag={isCarouselActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
                style={{ transform, rotateY: rotation, width: cylinderWidth, transformStyle: "preserve-3d" }}
                onDrag={(_, info) =>
                    isCarouselActive && rotation.set(rotation.get() + info.delta.x * 0.3)
                }
                onDragEnd={(_, info) =>
                    isCarouselActive && snapToNearest(rotation.get(), info.velocity.x)
                }
                animate={controls}
            >
                {cards.map((imgUrl, i) => (
                    <motion.div
                        key={`key-${imgUrl}-${i}`}
                        className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
                        style={{
                            width: `${faceWidth}px`,
                            transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
                        }}
                        onClick={() => handleClick(imgUrl, i)}
                    >
                        <motion.img
                            src={imgUrl}
                            alt={`carousel-${i}`}
                            layoutId={`img-${imgUrl}`}
                            className="pointer-events-none w-full rounded-xl object-cover aspect-square"
                            initial={{ filter: "blur(4px)" }}
                            layout="position"
                            animate={{ filter: "blur(0px)" }}
                            transition={transition}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
})

Carousel.displayName = "Carousel"

function ThreeDPhotoCarousel() {
    const [activeImg, setActiveImg] = useState<string | null>(null)
    const [isCarouselActive, setIsCarouselActive] = useState(true)
    const controls = useAnimation()
    const cards = useMemo(
        () => [
            "/assets/home/1.jpeg",
            "/assets/home/2.jpeg",
            "/assets/home/3.jpeg",
            "/assets/home/herobg.jpeg",
            "/assets/home/1.jpeg",
            "/assets/home/2.jpeg",
            "/assets/home/3.jpeg",
            "/assets/home/herobg.jpeg",
            "/assets/home/1.jpeg",
            "/assets/home/2.jpeg",
            "/assets/home/3.jpeg",
            "/assets/home/herobg.jpeg",
        ],
        []
    )

    const handleClick = (imgUrl: string) => {
        setActiveImg(imgUrl)
        setIsCarouselActive(false)
        controls.stop()
    }

    const handleClose = () => {
        setActiveImg(null)
        setIsCarouselActive(true)
    }

    return (
        <motion.div layout className="relative">
            <AnimatePresence mode="sync">
                {activeImg && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        layoutId={`img-container-${activeImg}`}
                        layout="position"
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl"
                        style={{ willChange: "opacity" }}
                        transition={transitionOverlay}
                    >
                        <motion.img
                            layoutId={`img-${activeImg}`}
                            src={activeImg}
                            className="max-w-full max-h-full rounded-lg shadow-lg"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{ willChange: "transform" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative h-[700px] w-full overflow-hidden">
                <Carousel
                    handleClick={handleClick}
                    controls={controls}
                    cards={cards}
                    isCarouselActive={isCarouselActive}
                />
            </div>
        </motion.div>
    )
}

export { ThreeDPhotoCarousel }
