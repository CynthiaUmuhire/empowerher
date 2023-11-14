import classNames from "classnames";
export default function Button({
  children,
  type,
  disabled = false,
  variant = "primary",
  handleClick,
}) {
  const buttonClasses = classNames(
    "w-full flex justify-center items-center gap-5 rounded-full p-2 font-inter text-sm font-bold outline transition duration-200 ease-in-out hover:scale-105",
    {
      "disabled:scale-100 disabled:cursor-not-allowed disabled:outline-secondary-200 disabled:bg-secondary-200 disabled:text-primary-800":
        disabled,
      "text-primary-200": variant === "primary",
      "bg-primary-100 text-primary-800": variant === "secondary",
      "text-tertiary-200 outline-tertiary-200": variant === "tertiary",
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
