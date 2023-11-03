import { useState } from "react"
import { NavLink } from "react-router-dom"
import ButtonPopover from "./Button-popover"

function Navbar() {
    const [open, setOpen] = useState(false)
    function displayButtonElements() {
        {
            console.log(open);
            setOpen(!open)
        }
    }
    return (
       <>
            <nav className="fixed w-full bg-violet-950 text-gray-300 py-1 px-4 rounded-b-xl">
                <div className="flex justify-between max-w-screen-2xl mx-auto">
                    <h1 className="font-bold text-center text-lg sm:text-xl underline hover:translate-x-4 pt-1 ml-8">EmpowerHer</h1>
                    <div className="flex items-center justify-center gap-10 md:gap-24 mr-10">
                        <div className="flex overflow-hidden rounded-lg border border-gray-200">
                            <div className="hidden sm:flex items-center gap-5 md:gap-10 ">
                                {navbarLinks.map(link => {
                                    return (<NavLink key={link.id} to={link.path}
                                        className={({ isActive }) => isActive ? "flex h-10 items-center gap-1 px-4  text-violet-950 bg-gray-300  font-bold underline" : "flex h-10 items-center gap-1.5 px-4 "} >
                                        <span className="ms-1.5 text-sm  font-medium">{link.title}</span>
                                    </NavLink>)
                                })}
                            </div>

                        </div>
                        <button onClick={displayButtonElements} onFocus={()=>setOpen(false)}>
                            <img src="/mom.jpg" alt="profile icon" className=" w-8 h-8 sm:w-12 sm:h-12  rounded-full object-cover" />
                        </button>
                    </div>
                </div>
            </nav>
            {open && <ButtonPopover />}
       </>
    )
}

export default Navbar

const navbarLinks = [{
    id: 1,
    title: "Home",
    path: "/",
},
{
    id: 2,
    title: "Messages",
    path: "ghj",
},
{
    id: 3,
    title: "Explore",
    path: "vgh",
}]
