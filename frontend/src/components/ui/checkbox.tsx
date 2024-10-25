import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Checkbox = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      className={twMerge(
        `h-5
         w-5
         rounded
         border
         border-gray-300
         bg-white
         text-primary
         cursor-pointer
         transition-all
         duration-200
         ease-in-out
         checked:bg-major
         focus-visible:ring-2
         focus-visible:ring-major
         disabled:opacity-50
         `,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

Checkbox.displayName = "Checkbox";
