import { Await, defer, useLoaderData } from "react-router-dom";
import { getUsers } from "../../getUsers";
import { Suspense } from "react";

export async function loader({ params }) {
    return defer({ user: getUsers(params.id) });
}
const Story = () => {
    const userdata = useLoaderData()
    // console.log(userdata);
    return (
        <Suspense fallback={
        <section className="animate-pulse translate-x-3 max-w-screen-2xl mx-auto flex flex-col items-center  justify-center">
            <div className='relative flex flex-col  max-w-2xl mx-auto items-center justify-center rounded-xl  bg-gray-300 px-8 py-16 shadow-2xl'>
            </div>
        </section>}>
            <Await resolve={userdata.user}>
                {(user)=>{
                    // console.log(user,"+*&");
                }

                }
            </Await>
        </Suspense>
    );
};

export default Story;

