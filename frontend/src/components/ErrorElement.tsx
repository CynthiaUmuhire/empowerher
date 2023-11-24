import { useNavigate } from "react-router-dom";
import Button from "./shared/Button";
import Error from "../assets/Error";

export default function ErrorElement() {
  const navigate = useNavigate();
  return (
    <div className="grid place-content-center bg-primary-100 text-primary-800 font-semibold gap-5 h-screen px-6 sm:px-0 sm:text-xl md:text-2xl">
      <Error/>
      <h1>There's been an error but you can still go back mama</h1>
      <Button variant="secondary" handleClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}
