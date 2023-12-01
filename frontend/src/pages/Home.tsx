import ClosedStoryCard from "../components/ClosedStoryCard";
import { getUsers } from "../../getUsers";
import { defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
export async function loader() {
  return defer({ users: getUsers() });
}
function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <section className="  max-w-screen-2xl mx-auto">
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
          {(stories) => {
            console.log(stories);
            return (
              <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-4">
                {stories.map((story) => {
                  return (
                    <ClosedStoryCard
                      key={story.userId}
                      title={story.title}
                      image={story.imageUrl}
                      story={story.story}
                      path={story.id}
                    />
                  );
                })}
              </div>
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
}

export default Home;
