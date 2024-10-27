import { forwardRef, type LabelHTMLAttributes, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  value: string;
  className?: string;
  children?: ReactNode;
}

export const Label = forwardRef<HTMLLabelElement, Props>(
  ({ value, className, children, ...props }, ref) => {
    return (
      <div className="pb-4 relative">
        <label
          ref={ref}
          {...props}
          className={twMerge(
            "text-[1.2rem] mt-2 mb-[2px] font-light text-primary",
            className,
          )}
        >
          <h5 className="">{value}</h5>
          {children}
        </label>
      </div>
    );
  },
);

Label.displayName = "Label";
