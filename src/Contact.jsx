import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import Header from "./Header"
import image2 from "./assets/images/logo-trans.png"
import { CheckCircle } from "lucide-react"

function Contact() {
    const form = useRef()
    const [isSent, setIsSent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState("")

    const handleClose = () => {
        setIsSent(false)
    }

    const sendEmail = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await emailjs.sendForm(
                "otegbadYe",
                "otegbade",
                form.current,
                "tWXWx0ypsMSnrvDS7"
            )
            setIsError("")
            setIsSent(true)
            setIsLoading(false)
            form.current.reset()
        } catch (error) {
            setIsError(` Error! Please try again later `)
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Header word={"Contact Us"} boolean={false} />
            <section className=" relative h-screen w-full grid content-center bg-fixed bg-gradient-to-b from-neutral-700 via-black/95 to-neutral-700">
                <img
                    className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-[0.4] w-8/10 md:w-6/10 lg:w-4/10"
                    src={image2}
                    alt="image of logo"
                />
                <div className="relative w-9/10 sm:w-7/10 md:w-6/10 lg:w-5/10 xl:w-4/10 mx-auto text-gray-100 rounded shadow z-10">
                    <h2 className="text-4xl font-anton font-semibold mb-5 text-yellow-600">
                        Get in touch.
                    </h2>
                    <p className="mb-10 font-semibold">
                        Use the form below to send us an email. Old fashion
                        phone calls too work -{" "}
                        <a
                            href="tel:+2347073334128"
                            className=" underline underline-offset-4 text-yellow-600"
                        >
                            +234 707 333 4128
                        </a>
                    </p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        {isError && (
                            <p className="text-white font-semibold text-lg bg-red-600 py-4 px-2 mt-4 ">
                                {" "}
                                <span className="border-4 rounded-full px-3 py-1 mx-2 font-black">
                                    !
                                </span>{" "}
                                {isError}
                            </p>
                        )}
                        <div>
                            <label className="block font-semibold mb-2">
                                Name{" "}
                                <span className=" text-gray-400">
                                    (required)
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-gray-200 text-black px-3 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold">
                                Email{" "}
                                <span className=" text-gray-400">
                                    (required)
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-gray-200 text-black px-3 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-2">
                                Message{" "}
                                <span className=" text-gray-400">
                                    (required)
                                </span>
                            </label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="w-full bg-gray-200 text-black px-3 py-2 rounded"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="hover:bg-gradient-to-b hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600 px-4 py-3 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 font-serif text-black font-bold rounded shadow-md active:scale-90 transition-all duration-300 disabled:opacity-50"
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
                {isSent && (
                    <div
                        onClick={handleClose}
                        className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 flex justify-center items-center"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className=" absolute flex backdrop-blur-2xl flex-col justify-center items-center z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-white w-7/10 sm:w-5/10 h-4/10"
                        >
                            <CheckCircle className=" text-green-600 m-2 w-5/10 h-5/10" />

                            <p className="text-black m-2">
                                Message sent successfully!
                            </p>
                            <button
                                onClick={handleClose}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default Contact
