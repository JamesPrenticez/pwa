import React from "react";
import dayjs from "dayjs";
import { updateAllHabits } from "@utils";
import { Days, Habit } from "@models";

interface MonthlyviewProps {
  data: Record<string, Habit>;
}

export const MonthlyView = ({ data }: MonthlyviewProps) => {
  // Example usage:
  const year = 2024;
  const month = 11; // December (0-based index)

  const result = updateAllHabits(year, month, data);

  const generateCalendar = (year: number, month: number) => {
    const startOfMonth = dayjs(new Date(year, month, 1));
    const endOfMonth = dayjs(new Date(year, month + 1, 0));

    const startDayOfWeek = startOfMonth.day(); // 0: Sunday, 6: Saturday
    const endDayOfWeek = endOfMonth.day();

    const daysInMonth = endOfMonth.date();
    const daysFromPrevMonth = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1; // Days to pad from previous month
    const daysFromNextMonth = endDayOfWeek === 0 ? 0 : 7 - endDayOfWeek; // Days to pad from next month

    const totalDays = daysInMonth + daysFromPrevMonth + daysFromNextMonth;

    const calendarDays = [];
    let currentDate = startOfMonth.subtract(daysFromPrevMonth, "day");

    for (let i = 0; i < totalDays; i++) {
      calendarDays.push(currentDate);
      currentDate = currentDate.add(1, "day");
    }

    return calendarDays;
  };

  const calendarDays = generateCalendar(year, month);
  console.log(result);

  return (
    <div className="w-full mx-auto">
      <h2 className="text-center font-semibold text-xl mb-4">
        {dayjs(new Date(year, month, 1)).format("MMMM YYYY")}
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {/* Weekday headers */}
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="text-center font-bold text-gray-400 text-[1rem]"
          >
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {calendarDays.map((day, index) => {
          const dayKey = day.format("YYYY-MM-DD");
          const isCurrentMonth = day.month() === month;
          const habitsForDay = Object.values(result).flatMap((habit) =>
            habit.days?.[dayKey]
              ? [
                  {
                    ...habit.days[dayKey],
                    title: habit.title,
                    bgColor: habit.color,
                  },
                ]
              : [],
          );

          return (
            <div
              key={index}
              className={`flex flex-col space-y-[0.1rem] w-[4rem] h-[4rem] items-start justify-start text-sm rounded-lg bg-glass  p-[0.4rem]
                ${day.isSame(dayjs(), "day") ? "border-white border-[0.1rem] shadow-[0_0_0.5rem_0.5rem_rgba(0,255,0,0.2)]" : "border-white/40 border"}`}
            >
              {/* Date */}
              <div
                className={`text-[1rem] font-[200] ${day.isSame(dayjs(), "day") ? "text-white font-bold" : "text-white"}`}
              >
                {day.date()}
              </div>

              <div className="flex gap-[0.1rem]">
                {habitsForDay.map((habitDay, i) => (
                  <div key={i} className="flex w-full ">
                    <div
                      style={{
                        background: habitDay.status
                          ? habitDay.bgColor
                          : "#dadada66",
                      }}
                      className="h-[0.7rem] w-[0.7rem] rounded-full"
                    ></div>
                    {/* <div>{habitDay.title || "Unknown Habit"}</div> */}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
