import { Habit } from "@models";

interface MonthlyView {
  data: Record<string, Habit>;
}

export const MonthlyView = ({ data }: MonthlyView) => {
  return <div>Monthly View</div>;
};
