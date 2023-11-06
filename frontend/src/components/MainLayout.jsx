import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

function MainLayout() {
    return (
        <>
            <Navbar />
            <section className="my-10">
                <Outlet />
            </section>
            <Footer />
        </>
    )

}

export default MainLayout

