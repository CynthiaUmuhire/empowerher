import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

export default function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
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