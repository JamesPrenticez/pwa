import {
  AuthedNavigationItem,
  Path,
  // Path,
  type NavigationItem,
} from "@models";

import { OverviewIcon, SettingsIcon, StopWatchIcon } from "@components/icons";

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
    icon: <OverviewIcon width="1.6rem" height="1.6rem" />,
  },
  {
    name: "TIMER",
    path: Path.TIMER,
    desc: "Countdown or stopwatch",
    icon: (
      <StopWatchIcon
        width="1.9rem"
        height="1.9rem"
        style={{ transform: "translateY(-0.1rem)" }}
      />
    ),
  },
  {
    name: "SETTINGS",
    path: Path.SETTINGS,
    desc: "Settings",
    icon: <SettingsIcon width="1.8rem" height="1.8rem" />,
  },
];
