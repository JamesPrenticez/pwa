import {
  AuthedNavigationItem,
  Path,
  // Path,
  type NavigationItem,
} from "@models";

import { CalendarIcon, SettingsIcon, StopWatchIcon } from "@components/icons";

export const project = {
  name: "Self Regulator",
  unlock: "Unlock your potential!",
  record: "Record success, crush goals, and level up!",
  move: "MOVE IN THE RIGHT DIRECTION",
  best: "The World's Most Powerful Self Development Platform",
};

export const navigationItemsForHomepage: NavigationItem[] = [];

export const navigationItemsForAuthenticedUsers: NavigationItem[] = [];

export const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

// "Level up"
// "Own your day!"
// "Hit milestones"
// "Count wins"
// "See results"
// "Reach higher"
// "Track victories"
// "Capture progress"
// "Record success"
// "Keep score"
// "Monitor growth"
// "Hit targets"
// "Stay ahead"
// "Chase success"
// "Reflect growth"
// "Clock achievements"
// "Show progress"
// "Break records"
// "Crush goals"

export const navbarLinkItems: Record<string, AuthedNavigationItem> = {
  TEST: {
    name: "This should be disabled",
    path: Path.ABOUT,
    desc: "Why",
    disabled: true,
  },
  CALENDAR: {
    name: "CALENDAR",
    path: Path.CALENDAR,
    desc: "Calendar",
    icon: <CalendarIcon width="1.8rem" height="1.8rem" />,
  },
  STOPWATCH: {
    name: "Stopwatch",
    path: Path.STOPWATCH,
    desc: "Stopwatch",
    icon: <StopWatchIcon width="1.9rem" height="1.9rem" />,
  },
  SETTINGS: {
    name: "Settings",
    path: Path.SETTINGS,
    desc: "Settings",
    icon: <SettingsIcon width="1.8rem" height="1.8rem" />,
  },
};
