import { NavLink, Link } from "react-router-dom"
import { Menu} from '@headlessui/react'
import { FaSignOutAlt, FaToggleOff, FaUser } from "react-icons/fa";

function Navbar() {

    return (
        <section className="h-16">
            <nav className=" fixed w-full bg-violet-950 z-10 text-gray-300 py-2 px-4 ">
                <div className="flex justify-between max-w-screen-2xl mx-auto">
                    <h1 className="font-bold text-center text-lg sm:text-xl underline hover:translate-x-4 pt-1 ml-8">Nurture Nest</h1>
                    <div className="flex items-center justify-center gap-10 md:gap-24 mr-10">
                        <div className="flex overflow-hidden rounded-lg border border-gray-200">
                            <div className="hidden sm:flex items-center gap-5 md:gap-10 ">
                                {navbarLinks.map(link => {
                                    return (
                                        <NavLink key={link.id} to={link.path}
                                            className={({ isActive }) => isActive ? "flex h-10 items-center gap-1 px-4  text-violet-950 bg-gray-300  font-bold underline" : "flex h-10 items-center gap-1.5 px-4 "} >
                                            <span className="ms-1.5 text-sm  font-medium">{link.title}</span>
                                        </NavLink>
                                    )
                                })}
                            </div>

                        </div>
                        <Menu>
                            <Menu.Button>
                                <img src="/mom.jpg" alt="profile icon" className=" w-8 h-8 sm:w-12 sm:h-12  rounded-full object-cover" />
                            </Menu.Button>
                            <Menu.Items className=" bg-gray-300 text-violet-950 absolute top-7 right-12 rounded-xl max-w-2xl ">
                                {profileButtonElements.map(element => {
                                    return (<Menu.Item key={element.id}>
                                        <Link to={element.path} className="flex h-10 items-center gap-1.5 px-7 py-4 rounded-xl hover:bg-violet-950 hover:text-gray-300">
                                            <span>{element.icon}</span>
                                            <span className="ms-1.5 text-sm  font-medium">{element.title}</span>
                                        </Link> 
                                    </Menu.Item>)
                                })}
                            </Menu.Items>
                        </Menu>
                    </div>
                </div>
            </nav>
        </section>
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
    title: "Stories",
    path: "/    ",
}]
const profileButtonElements = [
    {
        id: 1,
        icon: <FaUser />,
        title: "Profile",
        path: "/profile"
    },
    {
        id: 2,
        icon: <FaToggleOff />,
        title: "theme",
    },
    {
        id: 3,
        icon: <FaSignOutAlt />,
        title: "Logout",
        path: "/logout"
    }
]
