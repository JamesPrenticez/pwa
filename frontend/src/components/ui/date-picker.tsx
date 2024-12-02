import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { InputText } from "./input-text";

export const DatePicker = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ value, onChange, className, ...props }, ref) => {
  return (
    <InputText
      type="date"
      className={twMerge(
        `appearance-none
           h-[2.5rem]
           w-full
           rounded-md
           bg-tarantula
           text-inherit
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
           text-2xl

          `,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

DatePicker.displayName = "DatePicker";
