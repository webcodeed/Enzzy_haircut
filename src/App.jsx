import { useState } from "react"
import Navbar from "./Navbar"
import { Outlet } from "react-router"
function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default App
