import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router"
import ScrollToTop from "./ScrollToTop"
function App() {
    return (
        <>
            {/* Scroll To The Top  */}
            <ScrollToTop />
            <div>
                {/* Navigation Bar  */}
                <Navbar />
                {/* Main Content  */}
                <Outlet />
                {/* Footer Section  */}
                <Footer />
            </div>
        </>
    )
}

export default App
