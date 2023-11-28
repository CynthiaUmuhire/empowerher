import { NavLink, Link, useNavigate } from "react-router-dom"
import { Menu} from '@headlessui/react'
import { FaSignOutAlt, FaToggleOff, FaUser } from "react-icons/fa";
import { signup } from "../api";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
    const navigate = useNavigate()
    return (
      <section className="h-16">
        <nav className=" fixed w-full bg-primary-800 z-10 text-gray-300 py-2 px-4 ">
          <div className="flex justify-between max-w-screen-2xl mx-auto">
            <h1 className="font-bold text-center text-lg sm:text-xl underline hover:translate-x-4 pt-1 ml-8">
              Nurture Nest
            </h1>
            <div className="flex items-center justify-center gap-10 md:gap-24 mr-10">
              <div className="flex overflow-hidden rounded-lg border border-gray-200">
                <div className="hidden sm:flex items-center gap-5 md:gap-10 ">
                  {navbarLinks.map((link) => {
                    return (
                      <NavLink
                        key={link.id}
                        to={link.path}
                        className={({ isActive }) =>
                          isActive
                            ? "flex h-10 items-center gap-1 px-4  text-violet-950 bg-gray-300  font-bold underline"
                            : "flex h-10 items-center gap-1.5 px-4 "
                        }
                      >
                        <span className="ms-1.5 text-sm  font-medium">
                          {link.title}
                        </span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
              <Menu>
                <Menu.Button>
                  <IoIosMenu className=" w-8 h-8 sm:w-12 sm:h-12 bg-primary-800 text-gray-300 " />
                </Menu.Button>
                <Menu.Items className=" bg-gray-300 text-primary-800 absolute top-7 right-12 rounded-xl max-w-2xl ">
                  <div className="flex flex-col  sm:hidden">
                    {navbarLinks.map((link) => {
                      return (
                        <NavLink
                          key={link.id}
                          to={link.path}
                          className={({ isActive }) =>
                            isActive
                              ? "flex h-10 items-center gap-1.5 px-7 py-4 rounded-xl font-extrabold hover:bg-primary-800 hover:text-gray-300 underline"
                              : "flex h-10 items-center gap-1.5 px-7 py-4 hover:bg-primary-800 hover:text-gray-300"
                          }
                        >
                          <span className="ms-1.5 text-sm  font-medium">
                            {link.title}
                          </span>
                        </NavLink>
                      );
                    })}
                  </div>
                  <Link
                    to="#"
                    className="flex h-10 items-center gap-1.5 px-7 py-4 rounded-xl hover:bg-primary-800 hover:text-gray-300"
                  >
                    <FaUser />
                    <span className="ms-1.5 text-sm  font-medium">profile</span>
                  </Link>
                  <button className="flex h-10 items-center gap-1.5 px-7 py-4 rounded-xl hover:bg-primary-800 hover:text-gray-300">
                    <FaToggleOff />
                    <span className="ms-1.5 text-sm  font-medium">Theme</span>
                  </button>
                  <button
                    className="flex h-10 items-center gap-1.5 px-7 py-4 rounded-xl hover:bg-primary-800 hover:text-gray-300"
                    onClick={() => {
                      signup.auth.signOut();
                      navigate("/login");
                    }}
                  >
                    <FaSignOutAlt />
                    <span className="ms-1.5 text-sm  font-medium">Logout</span>
                  </button>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </nav>
      </section>
    );
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
    path: "/stories",
}]
