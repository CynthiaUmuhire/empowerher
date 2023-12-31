import classNames from "classnames";
import { PropsWithChildren } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: string;
  handleClick?: () => void;
}
export default function Button({
  children,
  type,
  disabled = false,
  variant = "primary",
  handleClick,
}:PropsWithChildren<ButtonProps>) {
  const buttonClasses = classNames(
    "w-full flex justify-center items-center gap-5 rounded-full p-2 font-inter text-sm font-bold outline transition duration-200 ease-in-out hover:scale-105",
    {
      "disabled:scale-100 disabled:cursor-not-allowed disabled:outline-secondary-200 disabled:bg-secondary-200 disabled:text-primary-800":
        disabled,
      "text-primary-200": variant === "primary",
      "bg-primary-100 text-primary-800": variant === "secondary",
      "mt-9 w-full rounded-full py-3 text-center font-bold bg-primary-800 text-gray-300 transition hover:bg-gray-300 hover:text-primary-800 sm:w-80": variant === "tertiary",
    }
  );
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type={type}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}
