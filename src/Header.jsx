import { motion } from "motion/react"
import ButtonCta from "./ButtonCta"
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
                    <ButtonCta item={"Book Now"}/>
                )}
            </div>
        </header>
    )
}

export default Header
