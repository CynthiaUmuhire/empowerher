import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signup } from "../api";
import { useState } from "react";
import SpinIcon from "../assets/SpinIcon";
import Button from "../components/shared/Button";

const schema = yup
  .object({
    username: yup.string().required().trim(),
    email: yup.string().trim(),
    password: yup.string().required().trim(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();
export default function Signup() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isLoading, setIsLoading] = useState<boolean | undefined>();
  const [isdisabled, setIsDisabled] = useState<boolean>(false);
  const [credentialError, setCredentialError] = useState<string | undefined>();
  const onSubmit = async (data: yup.InferType<yup.Schema>) => {
    setIsDisabled(true);
    setIsLoading(true);
    try {
      const { email, password, username, confirmPassword } = data;
      await signup.signUp(email, password, username, confirmPassword);
      navigate("/stories");
    } catch (error) {
      if (error instanceof Error) {
         setCredentialError ("Account created successfully, You may login now")  
        throw new Error(`${error.message}`);
      }
    } finally {
      setIsDisabled(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center px-4 sm:px-10 2xl:mt-16 2xl:items-start">
        <div className="w-full space-y-20 sm:w-auto">
          <p className="flex flex-col text-center  text-xl text-gray-300 ">
            <span>Sign Up</span>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 text-black sm:text-sm"
          >
            <input
              placeholder="Your email"
              className={classNames([
                "w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500",
                errors.username && "border-2 border-red-400",
              ])}
              type="text"
              {...register("email")}
            />

            {errors.email && (
              <p className=" pl-3 text-red-400">The email invalid</p>
            )}
            <input
              placeholder="Your username "
              className={classNames([
                "w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500",
                errors.username && "border-2 border-red-400",
              ])}
              type="text"
              {...register("username")}
            />

            {errors.username && (
              <p className=" pl-3 text-red-400">The username is invalid</p>
            )}
            <input
              placeholder="password"
              className={classNames([
                "w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500",
                errors.password && "border-2 border-red-400",
              ])}
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className=" pl-3 text-red-400"> The password is invalid</p>
            )}
            <input
              placeholder="confirm your password"
              className={classNames([
                "w-full h-full py-2 rounded-full text-start px-5 bg-gray-300 placeholder:text-violet-500",
                errors.password && "border-2 border-red-400",
              ])}
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className=" pl-3 text-red-400">
                {" "}
                Your passwords are incompatible
              </p>
            )}
            {credentialError && (
              <p className="bg-primary-100 text-primary-800 p-2  font-semibold">
                {credentialError}
              </p>
            )}
            <Button disabled={isdisabled} variant="tertiary">
              register
              {isLoading && (
                <SpinIcon className="mr-2 h-5 animate-spin fill-primary-800 " />
              )}
            </Button>
            <p className="text-base text-gray-300">
              Already have an account ?{" "}
              <Link to="/login" className="underline text-primary-100">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
