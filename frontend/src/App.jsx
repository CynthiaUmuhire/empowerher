import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Home, {loader as usersLoader } from "./pages/Home"
import Profile from "./pages/Profile"
import MainLayout from "./components/MainLayout"
import Story, {loader as userLoader} from "./pages/Story"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import AuthLayout from "./components/AuthLayout"
import Signup from "./pages/signup"


export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout/>,
      children: [{
        index: true,
          element: <Landing/>
        },
        {
          path: "login",
          element: <Login />
        },{
          path: "signup",
          element: <Signup/>
        }]
      },
    {
      path:"/home",
      element: <MainLayout/>,
      children: [
        {
          index : true,
          element: <Home/>,
          loader: usersLoader
        },
        {
          path: "/home/:id",
          element: <Story/>,
          loader: userLoader
        }
      ]
    },
    {
      path:"/profile",
      element: <Profile/>
    }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}