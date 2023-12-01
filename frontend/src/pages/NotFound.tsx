import { useNavigate } from "react-router-dom";
import PageNotFound from "../assets/PageNotFound";
import Button from "../components/shared/Button";

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="grid place-content-center bg-primary-100 text-primary-800 font-semibold gap-5 h-screen px-6 sm:px-0 sm:text-xl md:text-2xl">
      <PageNotFound className="" />
      <h1>Sorry we couldn't find the page you are looking for</h1>
      <Button variant="secondary" handleClick={()=>navigate(-1)}>Go back</Button>
    </div>
  )
}
