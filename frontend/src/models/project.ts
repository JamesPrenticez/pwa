import type { ReactNode } from "react";
import { Path } from "@models/paths";

export interface NavigationItem {
  name: string;
  path: Path;
  icon: ReactNode;
}
