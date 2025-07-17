import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import image1 from "./assets/images/logo-top.png"
import image2 from "./assets/images/logo-trans.png"
import Header from "./Header"
import SlideShow from "./SlideShow"
import Button from "./button"
import { MapPin } from "lucide-react"
import BottomCta from "./BottomCta"
function Home() {
    const typedText = `, you are a king, so every cut is personal.
    We blend clean fades, beard trims, and fresh styles with a vibe that feels like home.
    Our space is laid back, our music is always on, and the energy stays sharp.
    Whether you're here for a quick shape-up or a full transformation, you’ll leave feeling confident and looking your best.
    We’re not just a barbershop in Abeokuta, we’re a community.
    Pull up, relax, and let’s elevate your style.`

    const [isType, setIsType] = useState("")
    const [started, setStarted] = useState(false)
    const indexRef = useRef(0)
    const vibeRef = useRef(null)
    const [doneTyping, setDoneTyping] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true)
                }
            },
            { threshold: 1 }
        )

        const current = vibeRef.current
        if (current) observer.observe(current)

        return () => {
            if (current) observer.disconnect()
        }
    }, [started])

    useEffect(() => {
        let timer
        if (started && indexRef.current < typedText.length - 1) {
            timer = setTimeout(() => {
                setIsType((prev) => prev + typedText[indexRef.current])
                indexRef.current += 1
            }, 50)
        } else if (!doneTyping && indexRef.current === typedText.length - 1) {
            setDoneTyping(true)
        }
        return () => clearTimeout(timer)
    }, [isType, started])

    const salonPrice = [
        {
            name: "Haircut(Barbing)",
            detail: "Clean, sharp, and personalized.",
            price: "5,000",
        },
        {
            name: "Line Up",
            detail: "Crisp hairlines and razor-defined edges.",
            price: "3,000",
        },
        {
            name: "Dye Application(Black)",
            detail: "Vibrant, lasting color to elevate your cut.",
            price: "2,000",
        },
        {
            name: "Hair Care",
            detail: "Deep cleanse for a fresh, scalp-ready start.",
            price: "2,000",
        },
    ]
    const homePrice = [
        {
            name: "Haircut(Barbing)",
            detail: "Clean, sharp, and personalized.",
            price: "10,000",
        },
        {
            name: "Line Up",
            detail: "Crisp hairlines and razor-defined edges.",
            price: "8,000",
        },
        {
            name: "Dye Application(Black)",
            detail: "Vibrant, lasting color to elevate your cut.",
            price: "5,000",
        },
        {
            name: "Hair Care",
            detail: "Deep cleanse for a fresh, scalp-ready start.",
            price: "5,000",
        },
    ]
    return (
        <div div className=" bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <Header
                word={
                    <>
                        Where Precision Meets Style.
                        <br />
                        Classic cuts, clean fades, premium care.
                    </>
                }
                boolean={true}
            />

            <main>
                <section className=" min-h-screen w-full grid content-center ">
                    <div
                        ref={vibeRef}
                        className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-12 flex flex-col items-center justify-center text-gray-100 py-5 w-5/6 lg:w-7/10 mx-auto"
                    >
                        <h2 className=" text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent lg:mb-15">
                            The Vibe
                        </h2>
                        <div className="text-gray-200 text-xl lg:text-2xl space-y-3 leading-relaxed  ">
                            <p className=" transform transition-all duration-400">
                                At{" "}
                                <span className="text-yellow-300 font-semibold">
                                    Enzzy Cutz
                                </span>
                                {isType}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    |
                                </motion.span>
                            </p>
                        </div>
                        {doneTyping && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="mt-15 lg:mt-20"
                            >
                                <Button item={"Book Now"} />
                            </motion.div>
                        )}
                    </div>
                </section>
                <section className=" relative bg-fixed bg-gradient-to-b from-neutral-700 via-black/95 to-neutral-700 w-full min-h-screen p-5">
                    <img
                        className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-[0.2] w-8/10 md:w-6/10 lg:w-4/10"
                        src={image2}
                        alt="image of logo"
                    />
                    <div className="flex flex-col items-center justify-center text-gray-100 mx-auto sm:max-w-7/10 md:max-w-6/10 lg:max-w-5/10  ">
                        <div className="space-y-4">
                            <img
                                className=" mx-auto"
                                src={image1}
                                alt="image of top of logo"
                            />
                            <h2 className=" font-bold bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent text-center text-4xl lg:text-6xl">
                                Price List
                            </h2>
                        </div>
                        <h2 className=" mt-7 text-center text-yellow-400 font-bold text-2xl lg:text-3xl">
                            ENZZY CUTZ SALOON
                        </h2>
                        <div className=" my-5 space-y-15">
                            <div className=" space-y-2">
                                <h2 className="text-lg font-serif text-center font-semibold">
                                    ENZZY-(THE KING MAKER)
                                </h2>
                                {salonPrice.map((item, index) => (
                                    <div
                                        className="flex justify-between items-center text-xl lg:text-2xl"
                                        key={index}
                                    >
                                        <h3 className="font-bold text-xl lg:text-2xl">
                                            {item.name}
                                        </h3>

                                        <p className="font-bold">
                                            &#8358;{item.price}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className=" space-y-2">
                                <h2 className=" text-lg font-serif text-center font-semibold">
                                    HOME SERVICE
                                </h2>
                                {homePrice.map((item, index) => (
                                    <div
                                        className="flex justify-between items-center text-xl lg:text-2xl"
                                        key={index}
                                    >
                                        <h3 className="font-bold text-xl lg:text-2xl">
                                            {item.name}
                                        </h3>

                                        <p className="font-bold">
                                            &#8358;{item.price}
                                        </p>
                                    </div>
                                ))}
                                <div className="my-8 p-4 bg-yellow-400/20 rounded-xl border border-yellow-400/30">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-semibold text-yellow-200 mb-1">
                                                Location Notice
                                            </p>
                                            <p className="text-sm text-gray-300">
                                                Prices may vary based on your
                                                location and distance from our
                                                salon
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button item={"Book Now"} />
                    </div>
                </section>
            </main>
            {/* <Project/> */}
            <SlideShow />
            <BottomCta/>
        </div>
    )
}

export default Home
