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
            h-10
            w-full 
            rounded-md
            border 
            bg-tarantula
            text-mist
            px-3
            py-2
            text-sm
            border-none
            placeholder:text-disabled
            focus-visible:outline-none 
            focus-visible:ring-[1px]
            focus-visible:ring-muted
            disabled:opacity-50`,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

InputText.displayName = "Input";
