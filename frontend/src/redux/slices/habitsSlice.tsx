import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Habit, LabelAndValue } from "@models";
import { habitsApi } from "@redux/services";

interface HabitsState {
  data: Record<string, Habit>;
  activeHabit: LabelAndValue | null;
}

const initialState: HabitsState = {
  data: {},
  activeHabit: null,
};

export const habitsSlice = createSlice({
  name: "habits",
  initialState: initialState,
  reducers: {
    setActiveHabit: (state, action: PayloadAction<LabelAndValue | null>) => {
      if (state.data) {
        state.activeHabit = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      habitsApi.endpoints.getHabits.matchFulfilled,
      (state, { payload }) => {
        state.data = payload;
      },
    );

    // Handle the getDays query success and merge the days with the habit
    builder.addMatcher(
      habitsApi.endpoints.getDays.matchFulfilled,
      (state, { payload, meta }) => {
        const { habit_id } = meta.arg.originalArgs;
        const habit = state.data[habit_id];

        if (habit) {
          state.data[habit_id] = {
            ...habit,
            days: payload.data || habit.days,
          };
        }
      },
    );
  },
});

export const { setActiveHabit } = habitsSlice.actions;

export default habitsSlice;
