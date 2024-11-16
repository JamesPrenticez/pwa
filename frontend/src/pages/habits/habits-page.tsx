import { WeeklyView } from "@components/dashboard/habits/weekly-view";
import { useAppSelector } from "@redux/hooks";
import { useGetDaysQuery, useGetHabitsQuery } from "@redux/services";
import { Tabs } from "@components/ui/tabs";
import { useState } from "react";
import { MonthlyView } from "@components/dashboard/habits/monthly-view";
import { YearlyView } from "@components/dashboard/habits/yearly-view";

type Option = "weekly" | "monthly" | "yearly";

export const HabitsPage = () => {
  const options: Option[] = ["weekly", "monthly", "yearly"];
  const [activeOption, setActiveOption] = useState<Option>("weekly");

  useGetHabitsQuery();
  const { data: habitsData, activeHabit } = useAppSelector(
    (state) => state.habits,
  );

  const { data, error, isLoading } = useGetDaysQuery({
    start_date: "2024-01-01",
    end_date: "2024-12-31",
    habit_id: "29f8424c32b86011633c0a6e",
  }); // TODO dates

  if (!habitsData) return <h1>Loading...</h1>;

  return (
    <div className="p-[1rem] min-h-screen-6rem md:min-h-screen-8rem">
      <Tabs
        className="mb-[2rem]"
        items={options.map((x) => x)}
        onClick={(option) => setActiveOption(option)}
        defaultActiveValue={activeOption}
      />

      {activeOption === "weekly" && <WeeklyView data={habitsData} />}

      {activeOption === "monthly" && <MonthlyView data={habitsData} />}

      {activeOption === "yearly" && <YearlyView data={habitsData} />}
    </div>
  );
};
