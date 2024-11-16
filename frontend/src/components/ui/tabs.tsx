import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  items: string[];
  onClick: (name: any) => void;
  defaultActiveValue?: string;
}

export const Tabs = ({
  items,
  onClick,
  defaultActiveValue,
  className,
}: TabProps) => {
  const [active, setActive] = useState<string | null>(
    defaultActiveValue ? defaultActiveValue : null,
  );

  return (
    <div className={twMerge("flex w-full h-full", className)}>
      {items.map((item, index) => (
        <button
          key={index}
          className={twMerge(
            "grow flex items-center justify-center text-lg text-muted font-bold pb-[0.5rem] border-b-[0.2rem] border-transparent hover:text-major",
            active === item ? "text-major border-major" : "",
          )}
          onClick={() => {
            onClick(item);
            setActive(item);
          }}
        >
          <div className="px-4 w-full">{capitalizeFirstLetter(item)}</div>
        </button>
      ))}
    </div>
  );
};
