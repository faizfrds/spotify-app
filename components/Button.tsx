import { forwardRef } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {} //extends exisitng html button props

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          "w-full rounded-full bg-green-500 border border-transparent p-4 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition text-black",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
