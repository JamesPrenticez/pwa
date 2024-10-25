import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const InputText = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={twMerge(
        ` flex 
            h-[2.5rem]
            w-full 
            rounded-md
            border 
            bg-tarantula
            text-inhert
            px-3
            py-2
            text-sm
            border-none
            text-primary
            placeholder:text-disabled
            transition-all
            duration-200
            ease-in-out
            outline-none
            focus-visible:ring-[2px]
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

InputText.displayName = "Input";
