import { WeeklyView } from "@components/dashboard/habits/weekly-view";
import { useAppSelector } from "@redux/hooks";
import { useGetDaysQuery, useGetHabitsQuery } from "@redux/services";
import { Tabs } from "@components/ui/tabs";
import { useState } from "react";
import { MonthlyView } from "@components/dashboard/habits/monthly-view";
import { YearlyView } from "@components/dashboard/habits/yearly-view";
import { getWeekDetails } from "@utils";
import { Loading } from "@components/common/loading";
import { DatePicker } from "@components/ui/date-picker";
import { AutoCompleteDate } from "@components/ui/auto-complete-date";

type Option = "weekly" | "monthly" | "yearly";

export const HabitsPage = () => {
  const options: Option[] = ["weekly", "monthly", "yearly"];
  const [activeOption, setActiveOption] = useState<Option>("monthly"); // TODO persist into storage/setting with IndexDB

  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-12-31");

  useGetHabitsQuery();
  const { data: habitsData, activeHabit } = useAppSelector(
    (state) => state.habits,
  );

  const { data, error, isLoading } = useGetDaysQuery({
    start_date: startDate,
    end_date: endDate,
    habit_id: "29f8424c32b86011633c0a6e",
  }); // TODO dates

  const currentWeekDetails = getWeekDetails();

  if (!habitsData || isLoading)
    return (
      <h1 className="text-muted text-thin text-2xl my-[25rem] flex justify-center">
        Loading...
      </h1>
    );

  return (
    <div className="p-[1rem] min-h-screen-6rem md:min-h-screen-8rem">
      <Tabs
        className="mb-[2rem]"
        items={options.map((x) => x)}
        onClick={(option) => setActiveOption(option)}
        defaultActiveValue={activeOption}
      />

      {/* <DatePicker date={startDate} setDate={setStartDate}/>
      <DatePicker date={endDate} setDate={setEndDate}/> */}
      {/* <AutoCompleteDate /> */}

      {activeOption === "weekly" && (
        <>
          <WeeklyView data={habitsData} weekDetails={currentWeekDetails} />
        </>
      )}

      {activeOption === "monthly" && <MonthlyView data={habitsData} />}

      {activeOption === "yearly" && <YearlyView data={habitsData} />}
    </div>
  );
};
