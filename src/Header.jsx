import { motion } from "motion/react"
function Header({ word, boolean }) {
    return (
        <header
            initial={{ x: "-50%", opacity: 0 }} // Start halfway off-screen to the left
            animate={{ x: "0%", opacity: 1 }} // Slide to original position and fade in
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-screen bg-[url(/bg-1.jpg)] bg-center lg:bg-fixed"
        >
            <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-screen flex flex-col space-y-20 items-center justify-center">
                <motion.div
                    initial={{ y: "50%", opacity: 0 }} // Start halfway off-screen to the left
                    animate={{ y: "0%", opacity: 1 }} // Slide to original position and fade in
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className=" max-w-9/10 md:max-w-7/10 lg:max-w-6/10 font-playfair text-5xl md:text-6xl lg:text-6xl text-gray-100"
                >
                    <h2 className="text-center leading-tight">{word}</h2>
                </motion.div>
                {boolean && (
                    <button className="hover:bg-gradient-to-b hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600  py-5 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 font-serif text-black text-2xl font-semibold rounded-xl shadow-md active:scale-90 transition-all duration-300">
                        <a target="blank" className="py-5 px-8" href="https://wa.me/2348071029309?text=Hello%2C%20I%27d%20like%20to%20schedule%20an%20appointment.%20I%27m%20">
                            Book Now
                        </a>
                    </button>
                )}
            </div>
        </header>
    )
}

export default Header
