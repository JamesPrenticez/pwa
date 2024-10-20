import type { ReactNode } from "react";
import { Path } from "@models/paths";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export interface NavigationItem {
  name: string;
  path: Path;
  icon: ReactNode;
}

export const mockLobbyCountDownTimer = dayjs()
  .tz("Australia/Melbourne")
  .add(1, "hour")
  .add(3, "second")
  .toISOString();
