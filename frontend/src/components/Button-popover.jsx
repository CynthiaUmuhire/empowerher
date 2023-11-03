import { Link } from "react-router-dom"
import { FaSignOutAlt, FaToggleOff, FaUser } from "react-icons/fa";

function ButtonPopover() {
  return ( 
    <div className="absolute right-5 top-5 bg-gray-300 text-violet-950 z-10 rounded-xl max-w-xl">
      {displayButtonElements.map(element => {
        return (
            <div key={element.id} className="flex flex-col gap-3">
                <Link to={element.path} className="flex h-10 items-center gap-1.5 px-4 hover:bg-violet-950 hover:text-gray-300">
                    <span>{element.icon}</span>
                    <span className="ms-1.5 text-sm  font-medium">{element.title}</span>
                </Link>
            </div>
        )
      })}
    </div>
  )
}

export default ButtonPopover

const displayButtonElements = [
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
