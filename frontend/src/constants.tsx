import {
  AuthedNavigationItem,
  Path,
  // Path,
  type NavigationItem,
} from "@models";

import {
  CheckBoxIcon,
  OverviewIcon,
  SettingsIcon,
  StopWatchIcon,
} from "@components/icons";

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
  DASHBOARD: {
    name: "Dashboard",
    path: Path.DASHBOARD,
    desc: "Overview",
    icon: <OverviewIcon width="1.6rem" height="1.6rem" />,
  },
  HABITS: {
    name: "Habits",
    path: Path.HABITS,
    desc: "Habits",
    icon: (
      <CheckBoxIcon
        width="2.5rem"
        height="2.5rem"
        style={{ transform: "translateX(-0.2rem)" }}
      />
    ),
  },
  STOPWATCH: {
    name: "Timer",
    path: Path.TIMER,
    desc: "Stopwatch",
    icon: <StopWatchIcon width="1.9rem" height="1.9rem" />,
  },
  SETTINGS: {
    name: "Settings",
    path: Path.DASHBOARD,
    desc: "Settings",
    icon: <SettingsIcon width="1.8rem" height="1.8rem" />,
  },
};

export const leftNavbarLinkItems: AuthedNavigationItem[] = [
  {
    name: "DASHBOARD",
    path: Path.HOME,
    desc: "Dashboard",
    icon: <OverviewIcon width="2.6rem" height="2.6rem" />,
  },
  {
    name: "HABITS",
    path: Path.HABITS,
    desc: "",
    icon: (
      <CheckBoxIcon
        width="3rem"
        height="3rem"
        style={{ transform: "scale(150%)" }}
      />
    ),
  },

  {
    name: "TIMER",
    path: Path.TIMER,
    desc: "Countdown or stopwatch",
    icon: (
      <StopWatchIcon
        width="3rem"
        height="3rem"
        style={{ transform: "translateY(-0.1rem)" }}
      />
    ),
  },
  {
    name: "SETTINGS",
    path: Path.SETTINGS,
    desc: "Settings",
    icon: <SettingsIcon width="3rem" height="3rem" />,
  },
];
