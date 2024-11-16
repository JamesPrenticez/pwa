import { Habit, LabelAndValue } from "@models";

interface WeeklyView {
  data: Record<string, Habit>;
}
export const WeeklyView = ({ data }: WeeklyView) => {
  return (
    <div className="flex flex-col gap-[2rem]">
      {Object.values(data).map((item, index) => (
        <div
          key={item._id + index}
          className="p-4 rounded-lg flex"
          style={{
            border: "solid 0.1rem",
            borderColor: item.bgcolor ? item.bgcolor : "rgba(255,255,255, 0.2)",
          }}
        >
          {item.title}

          {/* {item.days &&
            Object.values(item.days).map((day, index) => (
              <div>{JSON.stringify(day)}</div>
            ))} */}
        </div>
      ))}
      {/* {JSON.stringify(habitsOptions)} */}
    </div>
  );
};
