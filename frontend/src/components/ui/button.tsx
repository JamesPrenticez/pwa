import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "major"
    | "minor"
    | "cta"
    | "muted"
    | "gangster";
  variant?: "outlined" | "filled" | "link";
  asChild?: boolean; // TODO do we have a use for this prop?
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "filled",
      color = "secondary",
      // asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const options: Record<
      string,
      { outlined: string; filled: string; link?: string }
    > = {
      primary: {
        outlined: "border-2 border-primary",
        filled: "bg-primary hover:bg-primary/80",
      },
      secondary: {
        outlined: "border-2 border-secondary",
        filled: "bg-secondary text-secondary hover:bg-secondary/80",
      },
      muted: {
        outlined: "border-2 border-secondary",
        filled: "bg-secondary text-muted hover:bg-secondary/80",
        link: "text-muted hover:text-white transistion-all ease-in-out duration-200",
      },
      success: {
        outlined: "border-2 border-green-600",
        filled:
          "bg-gradient-to-b from-leaf to-grass bg-opacity-80  border-b-2 border-sage",
      },
      gangster: {
        outlined: "border-2 border-green-600",
        filled:
          "bg-gradient-to-b from-black to-gray-800 bg-opacity-80  border-b-2 border-gray-600",
      },
      error: {
        outlined: "border-2 border-red-600",
        filled: "bg-red-600 hover:bg-red-600/80",
      },
      major: {
        outlined:
          "border-2 border-major hover:bg-major hover:text-tarantula text-sage",
        filled: "bg-major hover:bg-major/80",
      },
      minor: {
        outlined: "border-2 border-minor",
        filled: "bg-minor hover:bg-minor/80",
      },
      info: {
        filled: "bg-blue-600 hover:bg-blue-600/80",
        outlined: "border-2 border-blue-600",
      },
      cta: {
        outlined: "border-2 border-sage",
        filled:
          "bg-gradient-to-br from-sage to-major hover:from-sage/110 hover:to-major/110 text-tarantula",
      },
    };

    return (
      <div className="p-[0.25rem]">
        <button
          className={twMerge(
            `
          px-8
          py-2
          rounded-md
          cursor-pointer 
          text-primary 
          transition-all
          duration-200
          ease-in-out
          outline-none
          focus-visible:ring-[2px]
          focus-visible:ring-major
          disabled:opacity-50
          `,
            options[color][variant],
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      </div>
    );
  },
);

Button.displayName = "Button";

{
  /* <div class="relative inline-block px-8 py-2 rounded-md cursor-pointer text-primary border-b-2 border-sage overflow-hidden">
    <span class="relative z-10">Hover me</span>
    <span class="absolute inset-0 bg-gradient-to-b from-leaf to-grass transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-80"></span>
</div> */
}
