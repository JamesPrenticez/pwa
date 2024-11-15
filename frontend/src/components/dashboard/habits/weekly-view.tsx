import { LabelAndValue } from "@models";
import { useAppSelector } from "@redux/hooks";
import { useGetDaysQuery, useGetHabitsQuery } from "@redux/services";

export const WeeklyView = () => {
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

  const habitsOptions: LabelAndValue[] = Object.values(habitsData).map(
    (habit) => ({
      label: habit.title,
      value: habit._id,
    }),
  );

  return (
    <div>
      <div>WeeklyView</div>

      {Object.values(habitsData).map((item, index) => (
        <div
          className="p-4 rounded-lg flex"
          style={{
            backgroundColor: item.bgcolor
              ? item.bgcolor
              : "rgba(255,255,255, 0.2)",
          }}
        >
          {item.title}

          {item.days &&
            Object.values(item.days).map((day, index) => (
              <div>{JSON.stringify(day)}</div>
            ))}
        </div>
      ))}
      {/* {JSON.stringify(habitsOptions)} */}
    </div>
  );
};
