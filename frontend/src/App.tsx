import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout";
import MainLayout, { storiesLoader } from "./components/layouts/MainLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Stories from "./pages/Stories";
import Signup from "./pages/Signup";
import StoryDetails, { loader as storyLoader } from "./pages/StoryDetails";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "stories",
      element: <MainLayout />,
      loader: storiesLoader,
      children: [
        {
          index: true,
          element: <Stories />,
        },
        {
          path: ":id",
          element: <StoryDetails />,
          loader: storyLoader,
        },
      ],
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
