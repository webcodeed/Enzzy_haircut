import { useEffect, useRef, useState } from "react"

function SlideShow() {
    const image = [
        "https://i.ibb.co/9k1Dchf5/haircut-image2.jpg",
        "https://i.ibb.co/p65wbkwy/haircut-image1.jpg",
        "https://i.ibb.co/5gpZ4rRk/haircut-image6.jpg",
        "https://i.ibb.co/rf05672d/haircut-image3.jpg",
        "https://i.ibb.co/27YQbMFy/haircut-image4.jpg",
        "https://i.ibb.co/Jj9L7kFF/haircut-image5.jpg",
    ]

    // Scroll Section 
    const scrollRef = useRef(null)
    const intervalRef = useRef(null)
    const [isPaused, setIsPaused] = useState(false)

    // Restart Function  
    const isAtEndOfScroll = (element) => {
        if (!element) return false
        const maxScrollLeft = element.scrollWidth - element.clientWidth
        return Math.ceil(element.scrollLeft) >= maxScrollLeft
    }

    // Pause Function 
    const handlePause = () => {
        setIsPaused((prev) => !prev)
    }

    // Scroll Effect 
    useEffect(() => {
        const scrollElement = scrollRef.current
        if (!scrollElement) return

        // Clear any existing interval before setting a new one
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        // Only run if not paused
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                if (isAtEndOfScroll(scrollElement)) {
                    scrollElement.scrollLeft = 0
                } else {
                    scrollElement.scrollLeft += 1
                }
            }, 10)
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [isPaused])

    return (
        <div className="w-full h-screen grid content-center bg-neutral-950 text-gray-100">
            <div className="mx-auto w-9/10 sm:w-8/10 md:w-7/10 lg:w-6/10 ">
                <div className="text-center mb-10 space-y-3 ">
                    <h2 className="font-playfair font-bold text-5xl lg:text-6xl text-yellow-400">
                        The Gallery
                    </h2>
                    <p className="text-white text-xl lg:text-2xl ">
                        Real cuts from real clients. Check out the vibe.
                    </p>
                </div>

                <div
                    className=" overflow-x-scroll whitespace-nowrap w-full"
                    ref={scrollRef}
                    onClick={handlePause}
                    // onMouseEnter={() => setIsPaused(true)}
                    // onMouseLeave={() => setIsPaused(false)}
                >
                    {image.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`slide-${index}`}
                            className="inline w-8/10  sm:w-6/10 md:w-5/10 lg:w-4/10 h-auto rounded-2xl border-4 border-yellow-400 shadow-xl m-3"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SlideShow
