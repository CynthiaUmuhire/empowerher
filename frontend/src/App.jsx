import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Home, {loader as userLoader } from "./pages/Home"
import Profile from "./pages/Profile"
import MainLayout from "./components/MainLayout"
import Story from "./pages/Story"


export default function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <MainLayout/>,
      children: [
        {
          index : true,
          element: <Home/>,
          loader: userLoader
        },
        {
          path: "/1",
          element: <Story/>
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