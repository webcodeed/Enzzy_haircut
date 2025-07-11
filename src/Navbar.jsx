import { Menu, X } from "lucide-react"
import { useState } from "react"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { Link } from "react-router"

function Navbar() {
    // navigation links
    const navigate = [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Service", url: "/service" },
        { name: "Contact", url: "/contact" },
    ]
    const socials = [
        { icon: <FaTiktok className="w-6 h-6" />, url: "" },
        { icon: <FaFacebook className="w-6 h-6" />, url: "" },
        { icon: <FaInstagram className="w-6 h-6" />, url: "" },
    ]

    // menu
    const [isMenu, setIsMenu] = useState(false)

    return (
            <nav className="fixed text-gray-100 top-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md md:p-4 md:mx-auto rounded-xl z-50">
                <div className=" mx-auto sm:px-6 lg:px-8 flex md:flex-wrap justify-between items-center ">
                    
                    {/* Logo */}
                    <div className="p-4 md:p-0 md:grow-3 self-start" >
                        <img className=" w-25 md:w-30" src="https://i.ibb.co/KcPz8TXt/enzzy-logo-transparent.png" alt="enzzy-logo-transparent "/>
                    </div>

                    {/* Navigation  */}
                    <div
                        className={`md:flex md:flex-wrap md:grow-2 md:gap-5 text-center space-y-3 md:justify-evenly md:items-center absolute opacity-0 md:opacity-100 md:z-auto md:static md:translate-x-0 w-full md:w-auto h-screen md:h-auto bg-inherit transition-all ease-in-out duration-300 ${
                          isMenu
                          ? "top-[80px] translate-x-0 opacity-100 z-10"
                          : "top-[80px] translate-x-full opacity-0 z-[-1]"
                        }`}
                        >
                            
                      {/* Navigate  */}
                        <div className=" flex flex-col md:flex-row justify-evenly md:grow md:my-auto text-2xl sm:text-lg font-medium leading-snug">
                            {navigate.map((item) => (
                                <Link className=" p-2" onClick={() => setIsMenu(!isMenu)} to={item.url} key={item.name}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Socials */}
                        <ul className="flex justify-center space-x-5 md:space-x-0 md:grow md:gap-5">
                            {socials.map((item, index) => (
                                <li onClick={() => setIsMenu(!isMenu)} key={index}>
                                    <a href={item.url}>{item.icon}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-7 md:space-x-0 p-4 md:p-0">

                    {/* CTA  Button */}
                            <div className="hover:bg-yellow-600 py-3 bg-yellow-500  text-black font-semibold rounded-xl shadow-md" >
                                <a className="py-3 px-4" href="/">Book Now</a>
                            </div>

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsMenu(!isMenu)}
                        className="md:hidden"
                    >
                        {isMenu ? (
                            <X className="w-10 h-10" />
                        ) : (
                            <Menu className="w-10 h-10" />
                        )}
                    </button>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
