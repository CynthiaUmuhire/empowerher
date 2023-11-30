import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { signup } from "../../api";
function AuthLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(signup.auth, (user) => {
      setIsAuthenticated(!!user?.email);
      if (user?.email) navigate("/stories", { replace: true });
    });
  }, []);
  if (isAuthenticated === undefined) return null;
  return (
    <section className="h-screen bg-[url('/landing-background.jpg')]  bg-cover bg-no-repeat overflow-hidden">
      <div className="h-16">
        <nav className="w-full bg-transparent text-gray-300 py-2 px-4 ">
          <div className="flex justify-between max-w-screen-2xl mx-auto">
            <h1 className="font-bold text-center text-lg sm:text-xl underline hover:translate-x-4 pt-1 ml-8">
              Nurture Nest
            </h1>
          </div>
        </nav>
      </div>
      <section className="my-10 max-w-screen-2xl mx-auto">
        <Outlet />
      </section>
    </section>
  );
}

export default AuthLayout;
