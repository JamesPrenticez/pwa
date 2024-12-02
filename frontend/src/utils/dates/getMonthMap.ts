import dayjs from "dayjs";

export function getMonthsMap(year: number) {
  const monthsMap = new Map();

  for (let month = 0; month < 12; month++) {
    const startDate = dayjs(new Date(year, month, 1)).format("YYYY-MM-DD");
    const endDate = dayjs(new Date(year, month + 1, 0)).format("YYYY-MM-DD"); // 0th day gives the last day of the previous month.

    monthsMap.set(month + 1, { startDate, endDate });
  }

  return monthsMap;
}

export function getMonthsArray(year: number) {
  const monthsArray = [];

  for (let month = 0; month < 12; month++) {
    const startDate = dayjs(new Date(year, month, 1)).format("YYYY-MM-DD");
    const endDate = dayjs(new Date(year, month + 1, 0)).format("YYYY-MM-DD"); // 0th day gives the last day of the previous month.
    const label = dayjs(new Date(year, month, 1)).format("MMMM YYYY");

    monthsArray.push({ startDate, endDate, label });
  }

  return monthsArray;
}

import { Day, Days, Habit } from "@models";

export function generateMonthArray(year: number, month: number): Day[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthArray: Day[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    monthArray.push({
      _id: "", // Placeholder for a new day
      habit_id: "", // Placeholder for a new day
      date,
    });
  }

  return monthArray;
}

function mergeHabitDays(year: number, month: number, habit: Habit): Habit {
  const generatedDays = generateMonthArray(year, month);

  const updatedDays: Days = {};
  generatedDays.forEach((generatedDay) => {
    const dateKey = generatedDay.date.toISOString().split("T")[0];
    const apiDay = habit.days?.[dateKey];

    updatedDays[dateKey] = apiDay || {
      ...generatedDay,
      habit_id: habit._id, // Fill habit_id for new days
    };
  });

  return { ...habit, days: updatedDays };
}

export function updateAllHabits(
  year: number,
  month: number,
  data: Record<string, Habit>,
): Record<string, Habit> {
  const updatedData: Record<string, Habit> = {};

  for (const habitId of Object.keys(data)) {
    const habit = data[habitId];
    updatedData[habitId] = mergeHabitDays(year, month, habit);
  }

  return updatedData;
}
// ===
