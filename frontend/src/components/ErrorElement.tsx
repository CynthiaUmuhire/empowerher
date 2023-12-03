import { useNavigate } from "react-router-dom";
import Button from "./shared/Button";
import Error from "../assets/Error";
import signup from "../api/signup";

export default function ErrorElement() {
  const navigate = useNavigate();
  return (
    <div className="grid place-content-center bg-primary-100 text-primary-800 font-semibold gap-5 h-screen px-6 sm:px-0 sm:text-xl md:text-2xl">
      <Error/>
      <h1>There's been an error but you can still go back mama</h1>
      <Button variant="secondary" handleClick={() => navigate(-1)}>
        Go back
      </Button>
      <button
                    className="flex h-10 items-center gap-1.5 px-7 py-4 rounded-xl hover:bg-primary-800 hover:text-gray-300"
                    onClick={() => {
                      signup.auth.signOut();
                      navigate("/login");
                    }}
                  ></button>
    </div>
  );
}
