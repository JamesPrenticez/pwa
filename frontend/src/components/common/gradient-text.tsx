import React from "react";

interface GradientTextProps {
  bgcolor1?: string;
  bgcolor2?: string;
  bgcolor3?: string;
  text: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  bgcolor1 = "#d946ef",
  bgcolor2 = "#f43f5e",
  bgcolor3 = "#facc15",
  text,
}) => {
  return (
    <div
      className="flex"
      style={{
        background: `linear-gradient(to right, ${bgcolor1}, ${bgcolor2}, ${bgcolor3})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      <h1 className="text-4xl font-bold inline-block p-4 uppercase">{text}</h1>
    </div>
  );
};
