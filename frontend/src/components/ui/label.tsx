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
        <label ref={ref} {...props} className={twMerge("", className)}>
          <h5 className="text-[#90a299] text-2xl mt-2 mb-[2px] ml-[2px] font-light">
            {value}
          </h5>
          <div className="p-[0.25rem]">{children}</div>
        </label>
      </div>
    );
  },
);

Label.displayName = "Label";
