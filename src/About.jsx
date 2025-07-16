import Header from "./Header"
import { motion } from "motion/react"

function About() {
    return (
        <>
            <Header
                word={"More Than Just a Haircut, It’s a Lifestyle"}
                boolean={true}
            />
            <section className="bg-neutral-500 w-full flex flex-col items-center justify-center text-gray-100 py-5 ">
                <h2 className="font-playfair font-bold text-black text-5xl lg:text-6xl my-10 text-shadow-white/50 text-shadow-md">
                    Our Story
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className=" text-center font-serif font-semibold text-black/90 text-xl lg:text-2xl max-w-5/6 lg:max-w-7/10 space-y-3 leading-relaxed text-shadow-white/30 text-shadow-sm "
                >
                    <p>
                        At Enzzy Cutz, we believe every man deserves to walk out
                        feeling brand new. Founded in the heart of Abeokuta, our
                        barbershop blends precision, passion, and personality
                        into every cut. From clean fades to bold
                        transformations, we’re not just cutting hair, we’re
                        creating confidence. Whether you're headed to work, a
                        wedding, or just out with the boys, you’ll leave our
                        chair looking sharp and feeling fresh. We proudly serve
                        clients across Panseke, Asero, Ibara, and beyond. Our
                        loyal customers keep coming back because we don’t just
                        follow trends, we set them.
                    </p>
                </motion.div>
                <button
                    className="hover:bg-gradient-to-b hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600  py-5 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 font-serif text-black text-2xl font-semibold rounded-xl shadow-md active:scale-90 transition-all duration-300 my-15 lg:my-20"
                >
                    <a target="blank" className="py-5 px-8" href="https://wa.me/2348071029309?text=Hello%2C%20I%27d%20like%20to%20schedule%20an%20appointment.%20I%27m%20">
                        Book Now
                    </a>
                </button>
            </section>
            <section >
                <div className="font-serif text-black/90 space-y-3 max-w-5/6 lg:max-w-7/10 mx-auto my-32">
                    <h2 className="text-center font-playfair font-bold text-3xl">
                        "We started Enzzy Cutz to give guys more than just a
                        haircut, I wanted every client to leave with confidence,
                        style, and a reason to come back."
                    </h2>
                    <p className="text-center ">— Oyeyemi Eniola, Owner</p>
                </div>
            </section>

            <section className="bg-gray-900 flex flex-col items-center justify-center">
              <p className=" mt-15 p-5 font-playfair font-bold text-3xl text-white ">Ready To Look Your Best?</p>
              <button
                    className="hover:bg-gradient-to-b hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600  py-5 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 font-serif text-black text-2xl font-semibold rounded-xl shadow-md active:scale-90 transition-all duration-300 mb-15 lg:mb-20"
                >
                    <a target="blank" className="py-5 px-8" href="https://wa.me/2348071029309?text=Hello%2C%20I%27d%20like%20to%20schedule%20an%20appointment.%20I%27m%20">
                        Book Now
                    </a>
                </button>
            </section>
        </>
    )
}

export default About
