import { ArrowRight } from "lucide-react"

function ButtonCta({ item }) {
    return (
        // Call To Action Button
        <button className=" bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 font-serif hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600  text-black text-xl font-semibold rounded-xl shadow-2xl hover:shadow-yellow-400/25 active:scale-90 transform transition-all duration-300 mb-10 ">
            <a
                rel="noopener noreferrer"
                target="blank"
                className="py-4 px-8 inline-flex items-center justify-center"
                href="https://wa.me/2348071029309?text=Hello%2C%20I%27d%20like%20to%20schedule%20an%20appointment.%20I%27m%20"
            >
                {item}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </button>
    )
}

export default ButtonCta
