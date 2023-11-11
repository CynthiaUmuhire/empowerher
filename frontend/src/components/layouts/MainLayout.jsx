import { Suspense } from "react";
import { Await, Outlet, defer, useLoaderData } from "react-router-dom";
import { stories } from "../../api";
import Footer from "../Footer";
import Navbar from "../Navbar";
export async function storiesLoader() {
  return defer({ users: stories.getDatas() });
}
function MainLayout() {
  const data = useLoaderData();
  return (
    <>
      <Navbar />
      <section className="my-10">
        <Suspense
          fallback={
            <div className="animate-pulse bg-gradient-to-r from-black to-gray-300 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-4">
              <article className="group max-w-lg flex">
                <div className="w-1/2"></div>
                <div className="p-4 w-1/2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900"></h3>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"></p>
                    <span className="text-violet-950"></span>
                  </div>
                </div>
              </article>
            </div>
          }
        >
          <Await resolve={data.users}>
            {(data) => <Outlet context={data} />}
          </Await>
        </Suspense>
      </section>
      <Footer />
    </>
  );
}

export default MainLayout;
