import { Suspense } from "react";
import { Await, Outlet, defer, useLoaderData } from "react-router-dom";
import { stories } from "../../api";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Story } from "../../api/api";
import StorySkeleton from "../shared/StorySkeleton";

interface Data{
  users: Promise<Story>
}
export async function storiesLoader(){
  return defer({ users: stories.getDatas() });
}
function MainLayout() {
  const data = useLoaderData() as Data
  console.log(data);
  
  return (
    <>
      <Navbar />
      <section className="my-10">
        <Suspense
          fallback={
          <StorySkeleton/>
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
