import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router"
import ScrollToTop from "./ScrollToTop"
function App() {
    return (
        <>
            <ScrollToTop />
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default App
