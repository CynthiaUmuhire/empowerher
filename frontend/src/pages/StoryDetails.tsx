import { Await, LoaderFunction, defer, useLoaderData } from "react-router-dom";
import Button from "../components/shared/Button";
import CommentSection from "../components/shared/CommentSection";
import { CommentsData, Story } from "../api/api";
import { stories } from "../api";
import { Suspense } from "react";

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params);
  return defer({ user: stories.getData(params.id ? params.id : "") });
};
export default function StoryDetails() {
  const storiesPromise = useLoaderData() as { user: Promise<Story[]> };
  return (
    <Suspense>
      <Await resolve={storiesPromise.user}>
        {(story) => {
          return (
            <div>
              <header className="w-full container mx-auto">
                <div className="flex flex-col items-center py-12">
                  <h1 className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
                    {story?.short_title}
                  </h1>
                </div>
              </header>

              <div className="container mx-auto flex flex-wrap py-6">
                <section className="max-w-7xl flex flex-col items-center px-3">
                  <article className="flex flex-col justify-center shadow my-4">
                    <div className="hover:opacity-75 w-2/3 rounded-lg mx-auto">
                      <img src={story?.image} className="w-full h-full" />
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center p-6">
                      <a
                        href="#"
                        className="text-blue-700 text-sm font-bold uppercase pb-4"
                      >
                        Technology
                      </a>
                      <p className="text-3xl font-bold hover:text-gray-700 pb-4">
                        {story?.title}
                      </p>
                      <p className="text-sm pb-8">
                        By {story?.author}, Published on{" "}
                        {new Date(story?.post_date.seconds).toDateString()}
                      </p>
                      <h1 className="text-2xl font-bold pb-3">Introduction</h1>

                      <h1 className="text-2xl font-bold pb-3">Heading</h1>
                      <p className="pb-3">{story?.content}</p>
                    </div>
                  </article>
                </section>
              </div>

              <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
                <div className="max-w-2xl mx-auto px-4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                      Discussion (20)
                    </h2>
                  </div>
                  <form className="mb-6">
                    <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                      <label className="sr-only">Your comment</label>
                      <textarea
                        id="comment"
                        rows={6}
                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Write a comment..."
                        required
                      ></textarea>
                    </div>
                    <div className="w-1/2 mx-auto">
                      <Button variant="secondary">Submit</Button>
                    </div>
                  </form>
                  {story?.comments.map(
                    (
                      comment: CommentsData,
                      id = Math.floor(Math.random() * story?.comments.length)
                    ) => (
                      <CommentSection key={id} {...comment} />
                    )
                  )}
                </div>
              </section>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}