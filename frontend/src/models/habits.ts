export interface Habit {
  _id: string;
  user_id: string;
  title: string;
  slug?: string;
  color?: string;
  bgcolor?: string;
  icon?: string;
  successIcon?: string;
  errorIcon?: string;
  description?: string;
  created_at?: string;
  days?: Days;
  frequency?: string;
}

export type Days = Record<string, Day>;

export interface Day {
  _id: string;
  habit_id: string;
  date: Date;

  status?: boolean | null;

  measurement?: {
    quantity: number;
    unit: Unit;
  };
}

export enum Unit {
  TIME = "time",
  COUNT = "count",
}
