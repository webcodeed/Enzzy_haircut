import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import image from "./assets/images/logo-trans.png"
import { Link } from "react-router"
import { motion } from "motion/react"
function footer() {
    // Navigation Links
    const navigate = [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Service", url: "/service" },
        { name: "Contact", url: "/contact" },
    ]
    // Social Links
    const socials = [
        {
            icon: <FaTiktok className="w-6 h-6" />,
            url: "https://www.tiktok.com/@enzzy_cut",
        },
        {
            icon: <FaInstagram className="w-6 h-6" />,
            url: "https://www.instagram.com/only1_enzzy/",
        },
        {
            icon: <FaFacebook className="w-6 h-6" />,
            url: "https://www.facebook.com/oyeyemi.eniola.54",
        },
    ]
    return (
        <footer className=" bg-black w-full h-fit ">
            {/* Footer Section  */}
            <motion.div
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-gray-300 mx-auto px-5 py-10 sm:w-8/10 lg:w-8/10 md:w-full md:flex md:flex-col "
            >
                <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:justify-items-center gap-y-5 mb-10 lg:my-20">
                    {/* Logo section  */}
                    <img
                        className=" w-3/4 mx-auto md:mx-0 mb-10  col-span-2 md:my-auto md:col-span-1 md:row-span-2 lg:row-span-1 md: md:w-full"
                        src={image}
                        alt="enzzy-logo-transparent "
                    />
                    {/* Hours Section  */}
                    <div className=" col-start-1 md:col-start-2 ">
                        <h3 className="text-lg font-bold mb-1">Hours</h3>
                        <p className=" whitespace-nowrap">
                            Mon-Thurs 9:00am-8:00PM
                        </p>
                        <p className=" whitespace-nowrap">
                            Fri-Sun 9:00am-10:00pm
                        </p>
                    </div>
                    {/* Contact Section  */}
                    <div className=" col-start-1 md:col-start-3 ">
                        <h3 className="text-lg font-bold mb-1">Contact Us</h3>
                        <div className="flex flex-col">
                            <a
                                className="underline text-yellow-600 active:text-yellow-800 underline-offset-4"
                                href="tel:+2347073334128"
                                rel="noopener noreferrer"
                            >
                                +234 707 333 4128
                            </a>
                            <a
                                className="underline text-yellow-600 active:text-yellow-800 underline-offset-4"
                                href="mailto:eabdulrofiu@gmail.com"
                                rel="noopener noreferrer"
                            >
                                eabdulrofiu@gmail.com
                            </a>
                        </div>
                    </div>
                    {/* Location Section  */}
                    <div className=" col-start-1 md:col-start-4 ">
                        <h3 className="text-lg font-bold mb-1">Location</h3>
                        <address>Oluwo Estate, Camp</address>
                        <address>Abeokuta, Ogun State</address>
                    </div>
                    {/* Navigation Section  */}
                    <div className=" justify-self-end row-start-2 lg:row-start-1  row-span-2 lg:row-span-1 col-start-2 md:col-start-2 lg:col-start-5 md:col-span-2 md:justify-self-center flex flex-col">
                        <h3 className="text-lg font-bold mb-1">Quick Links</h3>
                        {navigate.map((item) => (
                            <Link
                                className="underline text-yellow-600 active:text-yellow-800 underline-offset-4"
                                to={item.url}
                                key={item.name}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Socials Section  */}
                <div className=" space-y-5 mb-20">
                    <div className="w-full h-1 bg-gradient-to-r from-yellow-300 to-yellow-600 mb-10"></div>
                    <ul className="flex justify-center gap-5 ">
                        {socials.map((item, index) => (
                            <li
                                className="active:scale-80 transition duration-300"
                                onClick={() => setIsMenu(!isMenu)}
                                key={index}
                            >
                                <a target="blank" href={item.url}>
                                    {item.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Copy Right Section  */}
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} Enzzy Cutz. All Rights
                        Reserved.
                    </p>
                </div>
            </motion.div>
        </footer>
    )
}

export default footer
