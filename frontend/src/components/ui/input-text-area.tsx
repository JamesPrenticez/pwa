import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number; // Set the maximum number of characters
}

const InputTextArea: React.FC<TextAreaProps> = ({
  className,
  maxLength,
  onChange,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState<string>("auto");

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setHeight(`${textareaRef.current.scrollHeight}px`);
    }
  }, [props.value]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setHeight(`${textareaRef.current.scrollHeight}px`);
    }

    // Call the onChange passed as a prop
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <textarea
      className={twMerge(
        `flex 
        min-h-[3.5rem]
        w-full 
        rounded-md
        border 
        bg-primary
        text-muted
        px-3
        py-2
        text-sm
        border-none
        placeholder:text-disabled
        outline-none 
        focus-visible:ring-[2px]
        focus-visible:ring-major
        disabled:opacity-50`,
        className,
      )}
      ref={textareaRef}
      rows={1}
      maxLength={maxLength}
      onChange={handleTextareaChange}
      style={{ height: height }}
      {...props}
    />
  );
};

InputTextArea.displayName = "InputTextArea";

export { InputTextArea };
