import { Menu, X } from "lucide-react"
import { useRef, useState } from "react"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { Link, useLocation } from "react-router"
import image from './assets/images/logo-trans.png'

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

    // section observer 
    const location = useLocation()

    const  handleClick = () => {
       setIsMenu(false)
    }

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
                          ? "top-[80px] translate-x-0 opacity-100 z-10 backdrop-blur-md bg-black/90 md:bg-yellow-400 "
                          : "top-[80px] translate-x-full opacity-0 z-[-1]"
                        }`}
                        >
                            
                      {/* Navigate  */}
                        <div className=" flex flex-col md:flex-row md:gap-3 lg:gap-0 justify-evenly md:grow md:my-auto text-2xl md:text-base font-medium leading-snug">
                            {navigate.map((item) => (
                                <Link className={` md:relative md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:h-[3px] md:after:w-full md:after:origin-center md:after:transform md:after:transition-transform md:after:duration-300 md:after:scale-x-0 md:hover:after:scale-x-100
                                md:text-lg md:p-0 w-auto md:hover:bg-transparent hover:bg-white/20 md:after:bg-gray-100 p-2 active:scale-90 transition-all duration-300 ${location.pathname === item.url?"text-amber-400":" text-gray-100" }`} onClick={handleClick} to={item.url} key={item.name}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Socials */}
                        <ul className="flex justify-center md:justify-end space-x-5 md:space-x-0 md:grow md:gap-5">
                            {socials.map((item, index) => (
                                <li className="active:scale-80 transition duration-300" onClick={() => setIsMenu(!isMenu)} key={index}>
                                    <a href={item.url}>{item.icon}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-7 md:space-x-0 p-4 md:p-0">

                    {/* CTA  Button */}
                            <button className="hover:bg-gradient-to-b hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800hover:bg-yellow-600 py-3 bg-yellow-500  text-black font-semibold rounded-xl shadow-md active:scale-90 transition-all duration-300" >
                                <a className="py-3 px-4" href="/">Book Now</a>
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
