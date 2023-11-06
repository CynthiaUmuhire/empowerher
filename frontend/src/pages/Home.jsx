import ClosedStoryCard from "../components/ClosedStoryCard"
import { getUsers } from "../../getUsers"
import { defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
export async function loader() {
  const usersPromise = await getUsers()
  console.log(usersPromise,"=======");
  return defer ({ users: usersPromise})
}
function Home() {
const data  = useLoaderData()
console.log(data)
  return (
      <section className="  max-w-screen-2xl mx-auto">
    
   </section>
  )
}

export default Home
