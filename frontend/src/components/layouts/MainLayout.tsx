  import { Suspense, useEffect, useState } from "react";
  import {
    Await,
    Navigate,
    Outlet,
    defer,
    useLoaderData,
  } from "react-router-dom";
  import { stories, signup } from "../../api";
  import Footer from "../Footer";
  import Navbar from "../Navbar";
  import { Story } from "../../api/api";
  import StorySkeleton from "../shared/StorySkeleton";
  import { onAuthStateChanged } from "firebase/auth";

  interface Data {
    users: Promise<Story>;
  }
  export async function storiesLoader() {
    return defer({ users: stories.getDatas() });
  }
export default function MainLayout() {
  const stories = useLoaderData() as Data;
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, checkAuthentication] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(signup.auth, (user) => {
      checkAuthentication(!!user);
      setIsLoading(false);
      return <Navigate to="/stories" replace />;
    });
    return () => unsubscribe();
  }, []);

  if (isLoading) return <StorySkeleton />;
  // if (isAuthenticated) return <Navigate to="/stories" replace />;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <>
      <Navbar />
      <section className="my-10">
        <Suspense fallback={<StorySkeleton />}>
          <Await resolve={stories.users}>
            {(data) => <Outlet context={data.slice(0,6)} />}
          </Await>
        </Suspense>
      </section>
      <Footer />
    </>
  );
}