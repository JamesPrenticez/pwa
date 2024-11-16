import { Habit } from "@models";
import React from "react";

interface YearlyView {
  data: Record<string, Habit>;
}

export const YearlyView = ({ data }: YearlyView) => {
  return <div>Yearly View</div>;
};
