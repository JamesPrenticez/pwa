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

export const mockLobbyCountDownTimer = dayjs
  .tz("2025-01-01", "Australia/Melbourne")
  .toISOString();
