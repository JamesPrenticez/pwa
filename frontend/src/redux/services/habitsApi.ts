import { baseApi } from "@redux/services/baseApi";
import { SuccessResult, Habit, Day, Days } from "@models";

export const habitsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHabits: builder.query<Record<string, Habit>, void>({
      query: () => ({
        url: `habits`,
        method: "GET",
        queryKey: "habits",
      }),
      transformResponse: (response: SuccessResult<Habit[]>) => {
        // Transform the array to a Record<string, IHabit>
        const habitsArray = response.data; // Assuming `data` contains the array
        return habitsArray.reduce(
          (acc: Record<string, Habit>, habit: Habit) => {
            acc[habit._id] = habit; // Assuming `id` is a unique identifier for each habit
            return acc;
          },
          {},
        );
      },
    }),
    getDays: builder.query<
      SuccessResult<Habit["days"]>,
      { start_date: string; end_date: string; habit_id: string }
    >({
      query: ({ start_date, end_date, habit_id }) => ({
        url: `days`,
        method: "GET",
        params: {
          start_date,
          end_date,
          habit_id,
        },
      }),
    }),
  }),
});

export const { useGetHabitsQuery, useGetDaysQuery } = habitsApi;
