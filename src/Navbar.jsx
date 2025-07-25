import { Menu, X } from "lucide-react"
import { useRef, useState } from "react"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { Link, useLocation } from "react-router"
import image from './assets/images/logo-trans.png'

function Navbar() {
    // Navigation Links
    const navigate = [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Services", url: "/service" },
        { name: "Contact", url: "/contact" },
    ]
     // Social Links
    const socials = [
        { icon: <FaTiktok className="w-8 h-8 md:w-6 md:h-6" />, url: "https://www.tiktok.com/@enzzy_cut" },
        { icon: <FaInstagram className="w-8 h-8 md:w-6 md:h-6" />, url: "https://www.instagram.com/only1_enzzy/" },
        { icon: <FaFacebook className="w-8 h-8 md:w-6 md:h-6" />, url: "https://www.facebook.com/oyeyemi.eniola.54" },
    ]

    // Menu Action
    const [isMenu, setIsMenu] = useState(false)
    const  handleClick = () => {
       setIsMenu(false)
    }

    // Page Observer 
    const location = useLocation()


    return (
            <nav className="fixed text-gray-100 top-0 w-full backdrop-blur-md font-serif bg-white/10 border-b border-white/20 shadow-md md:p-4 md:mx-auto rounded-xl z-50 " >
                <div className=" mx-auto lg:px-8 flex md:flex-wrap justify-between items-center md:gap-5 ">
                    
                    {/* Logo */}
                    <div className="p-4 md:p-0 md:grow-2 self-start" >
                        <img className=" w-25 md:w-30" src={image} alt="enzzy-logo-transparent "/>
                    </div>

                    {/* Navigation  */}
                    <div
                        className={`md:flex md:flex-wrap md:grow lg:grow-3 md:gap-5 text-center space-y-3 md:items-center absolute opacity-0 md:opacity-100 md:z-auto md:static md:translate-x-0 w-full md:w-auto h-screen md:h-auto transition-all ease-in-out duration-300 ${
                          isMenu
                          ? "top-[80px] translate-x-0 opacity-100 z-10 backdrop-blur-md bg-black/90 "
                          : "top-[80px] translate-x-full opacity-0 z-[-1]"
                        }`}
                        >
                            
                      {/* Navigation Links Section  */}
                        <div className=" flex flex-col md:flex-row md:gap-3 lg:gap-0 justify-evenly md:grow md:my-auto text-2xl md:text-base font-medium leading-snug">
                            {navigate.map((item) => (
                                <Link className={` md:relative md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:h-[3px] md:after:w-full md:after:origin-center md:after:transform md:after:transition-transform md:after:duration-300 md:after:scale-x-0 md:hover:after:scale-x-100
                                md:text-lg md:p-0 w-auto md:hover:bg-transparent hover:bg-white/20 md:after:bg-gray-100 p-2 active:scale-90 transition-all duration-300 ${location.pathname === item.url?"text-amber-400":" text-gray-100" }`} onClick={handleClick} to={item.url} key={item.name}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Socials Links Section */}
                        <ul className="flex justify-center md:justify-end space-x-5 md:space-x-0 md:grow md:gap-5">
                            {socials.map((item, index) => (
                                <li className="active:scale-80 transition duration-300" onClick={() => setIsMenu(false)} key={index}>
                                    <a target="blank" rel="noopener noreferrer" href={item.url}>{item.icon}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-7 md:space-x-0 p-4 md:p-0">

                    {/* CTA  Button */}
                            <button className=" bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600   text-black font-semibold rounded-xl shadow-md active:scale-90 transition-all duration-300" >
                                <a target="blank" rel="noopener noreferrer" className="py-3 px-4 inline-flex items-center justify-center" href="https://wa.me/2348071029309?text=Hello%2C%20I%27d%20like%20to%20schedule%20an%20appointment.%20I%27m%20">Book Now</a>
                            </button>

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
